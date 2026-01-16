import React, { useState } from 'react';
import { UserRole } from '../types';
import { Store, MapPin, Phone, User, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';

import { registerRestaurant } from '../services/firestoreService';

interface RestaurantRegistrationProps {
    onComplete: () => void;
    currentUser: { displayName?: string | null; email?: string | null; uid: string } | null;
}

const RestaurantRegistration: React.FC<RestaurantRegistrationProps> = ({ onComplete, currentUser }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        businessName: '',
        fssaiLicense: '',
        address: '',
        phone: '',
        googleBusinessLink: '',
        contactPerson: currentUser?.displayName || ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!currentUser) return;

        setIsLoading(true);
        try {
            await registerRestaurant({
                userId: currentUser.uid,
                businessName: formData.businessName,
                fssaiLicense: formData.fssaiLicense,
                contactPerson: formData.contactPerson,
                phone: formData.phone,
                address: formData.address,
                googleBusinessLink: formData.googleBusinessLink
            });
            onComplete();
        } catch (error) {
            console.error("Registration failed", error);
            alert("Registration failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-primary selection:text-black overflow-hidden relative flex items-center justify-center p-4">
            {/* Background Effects */}
            <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
                <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.03] animate-grid-move"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-blob mix-blend-screen opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-accent/5 rounded-full blur-[100px] animate-blob mix-blend-screen opacity-20" style={{ animationDelay: '-5s' }}></div>
            </div>

            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-center">

                {/* Left Side: Welcome & Value Prop */}
                <div className="hidden md:flex flex-col space-y-8 p-8 animate-fade-in-up">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            Partner Enrollment
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                            Join the <br />
                            <span className="text-gradient-primary">Zero Waste</span> <br />
                            Revolution.
                        </h1>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Transform your surplus food into social impact. Get tax benefits, badges, and real-time sustainability reports.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            "Instant pickup verification",
                            "Compliance with FSSAI regulations",
                            "Automated donation receipts",
                            "Impact analytics dashboard"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-gray-400 group">
                                <div className="w-8 h-8 rounded-full bg-surface-highlight border border-white/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                                </div>
                                <span className="group-hover:text-gray-300 transition-colors">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Registration Form */}
                <div className="glass-card p-8 rounded-3xl relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl opacity-50"></div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-2">Register Restaurant</h2>
                        <p className="text-sm text-gray-500">Enter your business details to get verified.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Business Name */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Business Name</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Store className="h-5 w-5 text-gray-500 group-focus-within:text-primary transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    required
                                    value={formData.businessName}
                                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                                    className="w-full bg-surface-highlight border border-white/10 text-white text-sm rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary block w-full pl-12 p-3.5 placeholder-gray-600 transition-all"
                                    placeholder="e.g. Saffron Banquet Hall"
                                />
                            </div>
                        </div>

                        {/* FSSAI & Phone Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">FSSAI License</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.fssaiLicense}
                                    onChange={(e) => setFormData({ ...formData, fssaiLicense: e.target.value })}
                                    className="w-full bg-surface-highlight border border-white/10 text-white text-sm rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary block p-3.5 placeholder-gray-600 transition-all font-mono"
                                    placeholder="XXXX-XXXX-XXXX"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Phone</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Phone className="h-4 w-4 text-gray-500 group-focus-within:text-primary transition-colors" />
                                    </div>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full bg-surface-highlight border border-white/10 text-white text-sm rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary block pl-10 p-3.5 placeholder-gray-600 transition-all"
                                        placeholder="98765 43210"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Business Address</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <MapPin className="h-5 w-5 text-gray-500 group-focus-within:text-primary transition-colors" />
                                </div>
                                <textarea
                                    required
                                    rows={2}
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    className="w-full bg-surface-highlight border border-white/10 text-white text-sm rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary block w-full pl-12 p-3.5 placeholder-gray-600 transition-all resize-none"
                                    placeholder="Full street address with landmark..."
                                />
                            </div>
                        </div>

                        {/* Google Maps Link */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Google Maps Business Link</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <MapPin className="h-5 w-5 text-gray-500 group-focus-within:text-primary transition-colors" />
                                </div>
                                <input
                                    type="url"
                                    required
                                    value={formData.googleBusinessLink}
                                    onChange={(e) => setFormData({ ...formData, googleBusinessLink: e.target.value })}
                                    className="w-full bg-surface-highlight border border-white/10 text-white text-sm rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary block w-full pl-12 p-3.5 placeholder-gray-600 transition-all"
                                    placeholder="https://maps.google.com/..."
                                />
                            </div>
                        </div>

                        {/* Contact Person */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Contact Person</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-500 group-focus-within:text-primary transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    required
                                    value={formData.contactPerson}
                                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                                    className="w-full bg-surface-highlight border border-white/10 text-white text-sm rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary block w-full pl-12 p-3.5 placeholder-gray-600 transition-all"
                                    placeholder="Manager Name"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full group relative flex items-center justify-center py-4 px-6 border border-transparent rounded-xl text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-2 overflow-hidden"
                        >
                            {isLoading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <>
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                                    <span className="text-sm font-bold tracking-wide uppercase mr-2">Complete Registration</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default RestaurantRegistration;
