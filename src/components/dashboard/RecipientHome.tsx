import React from 'react';
import { UserProfile } from '../../../services/authService';
import { Donation } from '../../../types';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

interface RecipientHomeProps {
    currentUser: UserProfile;
    donations: Donation[];
    onClaimClick: (id: string) => void;
}

const RecipientHome: React.FC<RecipientHomeProps> = ({ currentUser, donations, onClaimClick }) => {
    // Mock filter for now
    const nearbyDonations = donations;

    return (
        <div className="space-y-6">
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-orange-500 rounded-2xl p-6 text-white shadow-lg col-span-1 md:col-span-2 relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold mb-1">Welcome, {currentUser.displayName}</h2>
                        <p className="text-orange-100 text-sm">Here is what's available for you today.</p>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-xs text-gray-500 font-bold uppercase">Meals Impact</p>
                    <p className="text-2xl font-bold text-gray-800 mt-1">850</p>
                    <p className="text-xs text-green-500 mt-1">Meals distributed</p>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-xs text-gray-500 font-bold uppercase">Active Claims</p>
                    <p className="text-2xl font-bold text-gray-800 mt-1">3</p>
                    <p className="text-xs text-orange-500 mt-1">Pickups in progress</p>
                </div>
            </div>

            {/* Feed */}
            <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Available Donations Nearby</h3>
                <div className="space-y-4">
                    {nearbyDonations.map(donation => (
                        <div key={donation.id} className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-4">
                            <img src={donation.items[0].imageUrl} alt="Food" className="w-full md:w-48 h-32 rounded-lg object-cover bg-gray-100" />

                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900">{donation.items[0].title}</h4>
                                        <p className="text-sm text-gray-500">{donation.donorName}</p>
                                    </div>
                                    <div className="bg-gray-100 px-2 py-1 rounded text-xs font-bold text-gray-600 flex items-center gap-1">
                                        <MapPin className="w-3 h-3" /> {donation.distanceKm?.toFixed(1)} km
                                    </div>
                                </div>

                                <div className="flex gap-2 mt-3">
                                    <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-md border border-emerald-100">
                                        {donation.items[0].quantity}
                                    </span>
                                    <span className="px-2 py-1 bg-red-50 text-red-700 text-xs font-bold rounded-md border border-red-100 flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> 2h left
                                    </span>
                                </div>

                                <div className="mt-4 flex gap-3">
                                    <button
                                        onClick={() => onClaimClick(donation.id)}
                                        className="bg-primary text-black px-6 py-2 rounded-lg font-bold text-sm hover:bg-primary-hover flex items-center gap-2"
                                    >
                                        Claim Now <ArrowRight className="w-4 h-4" />
                                    </button>
                                    <button className="px-4 py-2 text-sm text-gray-500 font-medium hover:text-gray-800">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecipientHome;
