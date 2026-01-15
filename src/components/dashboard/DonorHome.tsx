import React from 'react';
import { UserProfile } from '../../../services/authService';
import { Donation } from '../../../types';
import { Plus, Utensils, leaf, TrendingUp } from 'lucide-react';

interface DonorHomeProps {
    currentUser: UserProfile;
    donations: Donation[];
    onPostClick: () => void;
}

const DonorHome: React.FC<DonorHomeProps> = ({ currentUser, donations, onPostClick }) => {
    const activeDonations = donations.filter(d => d.donorId === currentUser.uid);

    return (
        <div className="space-y-6">
            {/* Welcome & Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden col-span-1 md:col-span-3 lg:col-span-1">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold mb-1">Hello, {currentUser.displayName}!</h2>
                        <p className="text-emerald-100 mb-6 text-sm">Thank you for fighting food waste.</p>
                        <button
                            onClick={onPostClick}
                            className="bg-white text-emerald-600 px-4 py-2 rounded-lg font-bold text-sm shadow-md hover:bg-emerald-50 transition-colors flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" /> Post Donation
                        </button>
                    </div>
                    <Utensils className="absolute -bottom-4 -right-4 w-32 h-32 text-white opacity-10" />
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                            <TrendingUp className="w-5 h-5" />
                        </div>
                        <span className="text-gray-500 font-medium text-sm">Total Meals Saved</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-800">1,245</p>
                    <p className="text-xs text-gray-400 mt-1">+12% from last month</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                            {/* Leaf icon using lucide-react standard name if available, else generic */}
                            <TrendingUp className="w-5 h-5 rotate-180" />
                        </div>
                        <span className="text-gray-500 font-medium text-sm">CO2 Prevented</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-800">450 <span className="text-sm font-normal text-gray-400">kg</span></p>
                    <p className="text-xs text-gray-400 mt-1">Equivalent to 25 planted trees</p>
                </div>
            </div>

            {/* Active Listings Section */}
            <div>
                <div className="flex justify-between items-end mb-4">
                    <h3 className="text-xl font-bold text-gray-800">Your Active Listings</h3>
                    <button className="text-sm text-primary font-medium hover:underline">View All History</button>
                </div>

                {activeDonations.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {activeDonations.map(donation => (
                            <div key={donation.id} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h4 className="font-bold text-gray-900">{donation.items[0].title}</h4>
                                        <p className="text-xs text-gray-500">Posted {new Date(donation.createdAt).toLocaleDateString()}</p>
                                    </div>
                                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-lg">{donation.status}</span>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <img src={donation.items[0].imageUrl} alt="Food" className="w-12 h-12 rounded-lg object-cover bg-gray-100" />
                                    <div>
                                        <p className="text-sm font-medium">{donation.items[0].quantity} • {donation.items[0].category.replace('_', ' ')}</p>
                                        <p className="text-xs text-gray-400">Expires in 2 hrs</p>
                                    </div>
                                </div>
                                <button className="w-full py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">Manage</button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300">
                        <Utensils className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                        <h3 className="text-gray-900 font-medium">No active listings</h3>
                        <p className="text-gray-500 text-sm mb-4">You have no food listed for donation right now.</p>
                        <button
                            onClick={onPostClick}
                            className="text-primary font-bold text-sm hover:underline"
                        >
                            Post your first donation
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DonorHome;
