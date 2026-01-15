import React, { useState, useEffect } from 'react';
import { subscribeToAuthChanges, updateUserRole, UserProfile } from '../../services/authService';
import { subscribeToDonations, updateDonationStatus } from '../../services/firestoreService';
import { UserRole, Donation, DonationStatus } from '../../types';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import OnboardingModal from '../../components/dashboard/OnboardingModal';
import DonorHome from '../../components/dashboard/DonorHome';
import RecipientHome from '../../components/dashboard/RecipientHome';
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [donations, setDonations] = useState<Donation[]>([]);

    useEffect(() => {
        const unsubscribe = subscribeToAuthChanges((currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (user) {
            const unsubscribe = subscribeToDonations((data) => {
                setDonations(data);
            });
            return () => unsubscribe();
        }
    }, [user]);

    const handleRoleSelect = async (role: UserRole) => {
        if (user) {
            try {
                await updateUserRole(user.uid, role);
                // Optimistic update
                setUser({ ...user, role });
            } catch (error) {
                console.error("Failed to update role", error);
            }
        }
    };

    const handlePostClick = () => {
        navigate('/dashboard/post');
    };

    const handleClaimClick = async (id: string) => {
        // Placeholder for claim logic - could navigate to details or show modal
        console.log("Claiming donation", id);
        try {
            await updateDonationStatus(id, DonationStatus.CLAIMED);
        } catch (error) {
            console.error("Error claiming donation", error);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
        );
    }

    if (!user) {
        return null; // Protected route handles redirect using ProtectedRoute component
    }

    // Role-based rendering
    return (
        <DashboardLayout currentUser={user}>
            {user.role === UserRole.PENDING && (
                <OnboardingModal onSelectRole={handleRoleSelect} />
            )}

            {user.role === UserRole.DONOR && (
                <DonorHome
                    currentUser={user}
                    donations={donations}
                    onPostClick={handlePostClick}
                />
            )}

            {(user.role === UserRole.RECIPIENT || user.role === UserRole.RESCUER) && (
                <RecipientHome
                    currentUser={user}
                    donations={donations}
                    onClaimClick={handleClaimClick}
                />
            )}

            {/* Fallback for ADMIN or unknown roles for now */}
            {user.role === UserRole.ADMIN && (
                <div className="text-center p-12">
                    <h2 className="text-2xl font-bold">Admin Dashboard</h2>
                    <p>Under Construction</p>
                </div>
            )}
        </DashboardLayout>
    );
};

export default Dashboard;
