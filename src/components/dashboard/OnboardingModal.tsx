import React, { useState } from 'react';
import { UserRole } from '../../../types';
import { Store, Heart, Bike, Loader2 } from 'lucide-react';

interface OnboardingModalProps {
    onSelectRole: (role: UserRole) => Promise<void>;
}

const OnboardingModal: React.FC<OnboardingModalProps> = ({ onSelectRole }) => {
    const [loading, setLoading] = useState(false);

    const handleSelect = async (role: UserRole) => {
        setLoading(true);
        await onSelectRole(role);
        setLoading(false);
    };

    const RoleCard = ({ role, icon: Icon, title, desc, colorClass }: any) => (
        <button
            onClick={() => handleSelect(role)}
            disabled={loading}
            className={`group relative p-6 rounded-2xl border text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white
        ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:border-primary cursor-pointer'}
      `}
        >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${colorClass}`}>
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
        </button>
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-300">
                <div className="p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Welcome to FoodRescue.ai! 👋</h2>
                    <p className="text-gray-500 max-w-lg mx-auto mb-10 text-lg">
                        To personalize your dashboard, please tell us how you plan to use the platform.
                    </p>

                    {loading && (
                        <div className="absolute inset-0 bg-white/50 z-10 flex items-center justify-center">
                            <Loader2 className="w-10 h-10 text-primary animate-spin" />
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <RoleCard
                            role={UserRole.DONOR}
                            icon={Store}
                            title="I want to Donate"
                            desc="For Restaurants, Hotels & Caterers with surplus food."
                            colorClass="bg-emerald-100 text-emerald-600"
                        />
                        <RoleCard
                            role={UserRole.RECIPIENT}
                            icon={Heart}
                            title="I need Food"
                            desc="For NGOs, Shelters & Community Fridges."
                            colorClass="bg-orange-100 text-orange-600"
                        />
                        <RoleCard
                            role={UserRole.RESCUER}
                            icon={Bike}
                            title="I want to Volunteer"
                            desc="Help transport food and save the planet."
                            colorClass="bg-blue-100 text-blue-600"
                        />
                    </div>

                    <p className="mt-8 text-xs text-gray-400">
                        You can't change this easily later, so choose carefully!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OnboardingModal;
