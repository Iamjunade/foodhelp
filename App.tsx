import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Utensils,
  Bike,
  User,
  Plus,
  Clock,
  Navigation,
  CheckCircle,
  FileText,
  LogOut,
  Bell,
  Search,
  Filter,
  Loader2
} from 'lucide-react';
import { UserRole, Donation, DonationStatus, FoodItem } from './types';
import { APP_NAME } from './constants';
import DonationForm from './components/DonationForm';
import ImpactStats from './components/ImpactStats';
import ArchitectureDoc from './components/ArchitectureDoc';
import LandingPage from './components/LandingPage';
import MainLayout from './components/MainLayout';
import RestaurantRegistration from './components/RestaurantRegistration';
import NGORegistration from './components/NGORegistration';
import { subscribeToAuthChanges, signInWithGoogle, signOutUser, UserProfile } from './services/authService';
import { subscribeToDonations, updateDonationStatus } from './services/firestoreService';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>(UserRole.DONOR);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [view, setView] = useState<'HOME' | 'POST' | 'IMPACT' | 'DOCS' | 'REGISTRATION'>('HOME');
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);

  // Auth Subscription
  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((user) => {
      if (user) {
        setIsAuthenticated(true);
        setCurrentUser(user);
        setUserRole(user.role);

        // For Demo: If user is a DONOR (Restaurant), show registration first
        // In a real app, we check a 'isProfileComplete' flag
        if (user.role === UserRole.DONOR) {
          setView('REGISTRATION');
        } else {
          setView('HOME');
        }

      } else {
        setIsAuthenticated(false);
        setCurrentUser(null);
        setUserRole(UserRole.DONOR);
        setView('HOME');
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Donations Subscription
  useEffect(() => {
    // Only subscribe to donations if authenticated
    if (isAuthenticated) {
      const unsubscribe = subscribeToDonations((data) => {
        setDonations(data);
      });
      return () => unsubscribe();
    }
  }, [isAuthenticated]);

  // Effect to simulate incoming notifications for NGOs
  useEffect(() => {
    if (userRole === UserRole.RECIPIENT) {
      setNotifications([
        "New Donation: Saffron Banquet Hall posted 50 meals (1.2km away)",
        "Urgent: Daily Bread Bakery items expiring in 4 hours"
      ]);
    } else {
      setNotifications([]);
    }
  }, [userRole]);

  const handleLogin = async (role: UserRole) => {
    setIsLoading(true);
    // In a real app, we would pass the role to the auth service or update profile after sign in
    // For this demo, we can assume the auth service handles basic sign in
    // and we might handle role-specific logic after auth state updates.
    // However, signInWithGoogle doesn't accept role directly in our current implementation.
    // We will stick to the generic sign in and rely on the useEffect above to route logic.
    await signInWithGoogle();
  };

  const handleLogout = async () => {
    await signOutUser();
    setView('HOME');
  };

  // Helper to get color based on role
  const getRoleColor = () => {
    switch (userRole) {
      case UserRole.DONOR: return 'text-emerald-600 bg-emerald-50 border-emerald-200';
      case UserRole.RECIPIENT: return 'text-orange-600 bg-orange-50 border-orange-200';
      case UserRole.RESCUER: return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-gray-600';
    }
  };

  const handlePostDonation = async (items: FoodItem) => {
    if (!currentUser) return;
    setView('HOME');
  };

  const handleClaim = async (id: string) => {
    if (!currentUser) return;

    try {
      await updateDonationStatus(id, DonationStatus.CLAIMED, {
        recipientId: currentUser.uid,
        recipientName: currentUser.displayName || 'Anonymous Recipient'
      });

      // We don't need to manually update state because subscription will do it

      // Simulate finding a rescuer instantly for demo
      setTimeout(async () => {
        await updateDonationStatus(id, DonationStatus.PICKED_UP, {
          rescuerName: 'Rescuer Ravi', // This would be real logic in future
          rescuerId: 'simulated-rescuer'
        });
      }, 5000);

    } catch (e) {
      console.error("Failed to claim", e);
    }
  };

  const renderHome = () => {
    // Filter donations based on role view
    let displayDonations = donations;
    if (userRole === UserRole.RECIPIENT || userRole === UserRole.RESCUER) {
      displayDonations = donations.filter(d => d.status === DonationStatus.AVAILABLE || d.status === DonationStatus.CLAIMED);
    }

    return (
      <div className="space-y-4 pb-24 md:pb-0 animate-in fade-in slide-in-from-bottom-2 duration-500">

        {/* Recipient Dashboard Header */}
        {userRole === UserRole.RECIPIENT && (
          <div className="bg-orange-500 text-white p-6 rounded-xl shadow-lg mb-6 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-bold text-2xl mb-1">Good Afternoon, {currentUser?.displayName || 'Hope Shelter'}</h3>
              <p className="text-orange-100 text-sm mb-4">You have {displayDonations.filter(d => d.status === DonationStatus.AVAILABLE).length} active opportunities nearby.</p>
              <div className="flex gap-2">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-xs text-orange-100 font-medium">Meals Needed</p>
                  <p className="font-bold text-lg">45</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-xs text-orange-100 font-medium">Active Claims</p>
                  <p className="font-bold text-lg">{donations.filter(d => d.recipientId === currentUser?.uid).length}</p>
                </div>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-4 translate-y-4">
              <Utensils className="w-48 h-48" />
            </div>
          </div>
        )}

        {/* Rescuer Dashboard Header */}
        {userRole === UserRole.RESCUER && (
          <div className="bg-blue-600 text-white p-4 rounded-xl shadow-lg mb-6 max-w-2xl">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold flex items-center gap-2">
                <Bike className="w-5 h-5" /> Active Rescue
              </h3>
              <span className="bg-blue-500 px-2 py-0.5 rounded text-xs animate-pulse">In Progress</span>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-blue-100 text-sm">Pickup: Saffron Banquet</p>
                <p className="text-xl font-bold">1.2 km / 5 mins</p>
              </div>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors">
                Navigate
              </button>
            </div>
          </div>
        )}

        {/* Action Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-1">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              {userRole === UserRole.DONOR ? 'Your Surplus Listings' : 'Available For Pickup'}
            </h2>
            {userRole === UserRole.RECIPIENT && <p className="text-sm text-gray-500">Real-time feed of nearby waste alerts</p>}
          </div>

          <div className="flex gap-2 w-full md:w-auto">
            {userRole !== UserRole.DONOR && (
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search food or location..."
                  className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow"
                />
              </div>
            )}

            {userRole === UserRole.DONOR && (
              <button
                onClick={() => setView('POST')}
                className="w-full md:w-auto bg-emerald-600 text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-200/50 hover:bg-emerald-700 transition-all transform hover:-translate-y-0.5"
              >
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">Log Surplus Food</span>
                <span className="sm:hidden">Log Food</span>
              </button>
            )}
          </div>
        </div>

        {/* Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayDonations.map(donation => (
            <div key={donation.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-3 hover:shadow-md transition-all group relative">

              {/* Distance Badge (Top Right) */}
              <div className="absolute top-4 right-4 bg-gray-50 text-gray-600 px-2 py-1 rounded text-xs font-bold flex items-center gap-1 z-10">
                <MapPin className="w-3 h-3" /> {donation.distanceKm?.toFixed(1)}km
              </div>

              <div className="flex gap-4">
                <div className="relative shrink-0">
                  <img
                    src={donation.items[0].imageUrl}
                    alt="Food"
                    className="w-24 h-24 rounded-lg object-cover bg-gray-100"
                  />
                  {donation.items[0].category && (
                    <span className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[10px] font-bold text-center py-0.5 rounded-b-lg backdrop-blur-sm">
                      {donation.items[0].category.replace('_', ' ')}
                    </span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 line-clamp-2 leading-tight mb-1">{donation.items[0].title}</h3>
                  <p className="text-sm text-gray-500 font-medium">{donation.donorName}</p>

                  <div className="mt-3 flex gap-2 flex-wrap">
                    <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md font-medium border border-emerald-100">
                      {donation.items[0].quantity}
                    </span>
                    {donation.items[0].isPerishable && (
                      <span className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded-md font-medium border border-red-100 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Expiring Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Status & Actions */}
              <div className="pt-3 mt-1 border-t border-gray-50">
                {userRole === UserRole.RECIPIENT && donation.status === DonationStatus.AVAILABLE && (
                  <div className="flex gap-2">
                    <button className="flex-1 bg-white border border-gray-200 text-gray-600 py-2 rounded-lg font-bold text-sm hover:bg-gray-50">
                      Details
                    </button>
                    <button
                      onClick={() => handleClaim(donation.id)}
                      className="flex-[2] bg-orange-600 text-white py-2 rounded-lg font-bold text-sm shadow-sm hover:bg-orange-700 transition-colors"
                    >
                      Claim for NGO
                    </button>
                  </div>
                )}

                {userRole === UserRole.RESCUER && donation.status === DonationStatus.CLAIMED && (
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold text-sm shadow-sm flex items-center justify-center gap-2 hover:bg-blue-700">
                    <Navigation className="w-4 h-4" /> Accept Delivery Task
                  </button>
                )}

                {userRole === UserRole.DONOR && (
                  <div className="flex justify-between items-center text-xs">
                    <span className={`px-2 py-1 rounded-full font-bold
                        ${donation.status === DonationStatus.AVAILABLE ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}
                     `}>
                      {donation.status}
                    </span>
                    <span className="text-gray-400">
                      Listed {new Date(donation.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  if (!isAuthenticated) {
    if (isLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white flex-col gap-4">
          <Loader2 className="w-10 h-10 text-emerald-600 animate-spin" />
          <p className="text-emerald-800 font-medium">Securely logging you in...</p>
        </div>
      );
    }
    return <LandingPage onLogin={(role) => handleLogin(role)} />;
  }

  // If user is in Registration View
  if (view === 'REGISTRATION') {
    if (userRole === UserRole.RECIPIENT) {
      return (
        <NGORegistration
          currentUser={currentUser}
          onComplete={() => setView('HOME')}
        />
      );
    }
    return (
      <RestaurantRegistration
        currentUser={currentUser}
        onComplete={() => setView('HOME')}
      />
    );
  }

  return (
    <MainLayout
      userRole={userRole}
      currentUser={currentUser}
      currentView={view}
      onNavigate={setView}
      onLogout={handleLogout}
      notifications={notifications}
    >
      <div className="space-y-6">
        {view === 'HOME' && renderHome()}

        {view === 'POST' && (
          <div className="max-w-2xl mx-auto">
            <DonationForm
              currentUser={currentUser}
              onSuccess={() => setView('HOME')}
              onCancel={() => setView('HOME')}
            />
          </div>
        )}

        {view === 'IMPACT' && (
          <div className="pb-20 md:pb-0 animate-in fade-in">
            <ImpactStats />
          </div>
        )}

        {view === 'DOCS' && (
          <div className="pb-20 md:pb-0 animate-in fade-in">
            <ArchitectureDoc />
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default App;