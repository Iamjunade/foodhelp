import React from 'react';
import { Utensils, LogOut, User, Bell, CheckCircle, FileText } from 'lucide-react';
import { UserRole } from '../types';
import { UserProfile } from '../services/authService';
import { APP_NAME } from '../constants';

interface MainLayoutProps {
    children: React.ReactNode;
    userRole: UserRole;
    currentUser: UserProfile | null;
    currentView: string;
    onNavigate: (view: 'HOME' | 'POST' | 'IMPACT' | 'DOCS') => void;
    onLogout: () => void;
    notifications?: string[];
}

const MainLayout: React.FC<MainLayoutProps> = ({
    children,
    userRole,
    currentUser,
    currentView,
    onNavigate,
    onLogout,
    notifications = []
}) => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900">
            {/* Navbar - Matching LandingPage.tsx */}
            <nav className="flex justify-between items-center px-6 md:px-12 py-6 max-w-7xl mx-auto w-full sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-50">
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('HOME')}>
                    <img src="/Gemini_Generated_Image_j3gzcyj3gzcyj3gz.png" alt="FoodRescue Logo" className="w-10 h-auto object-contain" />
                    <span className="text-xl font-bold text-gray-900 tracking-tight">{APP_NAME}</span>
                </div>

                <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                    <button
                        onClick={() => onNavigate('HOME')}
                        className={`${currentView === 'HOME' ? 'text-emerald-600 font-bold' : 'hover:text-emerald-600'} transition-colors`}
                    >
                        {userRole === UserRole.DONOR ? 'My Listings' : 'Live Feed'}
                    </button>
                    <button
                        onClick={() => onNavigate('IMPACT')}
                        className={`${currentView === 'IMPACT' ? 'text-emerald-600 font-bold' : 'hover:text-emerald-600'} transition-colors`}
                    >
                        Impact Reports
                    </button>
                    <button
                        onClick={() => onNavigate('DOCS')}
                        className={`${currentView === 'DOCS' ? 'text-emerald-600 font-bold' : 'hover:text-emerald-600'} transition-colors`}
                    >
                        Architecture
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    {/* Notifications */}
                    <div className="relative">
                        <Bell className="w-5 h-5 text-gray-400 hover:text-emerald-600 transition-colors cursor-pointer" />
                        {notifications.length > 0 && (
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        )}
                    </div>

                    {/* User Profile */}
                    <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-bold text-gray-900 leading-none">{currentUser?.displayName || 'User'}</p>
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">{userRole}</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden border-2 border-white shadow-sm">
                            {currentUser?.photoURL ? (
                                <img src={currentUser.photoURL} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-emerald-100 text-emerald-600 font-bold">
                                    {currentUser?.displayName?.[0] || 'U'}
                                </div>
                            )}
                        </div>
                        <button
                            onClick={onLogout}
                            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                            title="Logout"
                        >
                            <LogOut className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-8">
                {children}
            </main>

            {/* Footer - Matching LandingPage.tsx */}
            <footer className="py-8 text-center text-gray-400 text-sm border-t border-gray-50 mt-auto">
                © 2024 FoodRescue.ai. Built for social good.
            </footer>

            {/* Mobile Bottom Nav (Optional, kept for usability on small screens) */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-gray-100 px-6 py-4 flex justify-between items-center z-50 shadow-[0_-4px_20px_-1px_rgba(0,0,0,0.05)]">
                <button onClick={() => onNavigate('HOME')} className={`flex flex-col items-center gap-1 ${currentView === 'HOME' ? 'text-emerald-600' : 'text-gray-400'}`}>
                    <Utensils className="w-6 h-6" />
                </button>
                <button onClick={() => onNavigate('IMPACT')} className={`flex flex-col items-center gap-1 ${currentView === 'IMPACT' ? 'text-emerald-600' : 'text-gray-400'}`}>
                    <CheckCircle className="w-6 h-6" />
                </button>
                <button onClick={() => onNavigate('DOCS')} className={`flex flex-col items-center gap-1 ${currentView === 'DOCS' ? 'text-emerald-600' : 'text-gray-400'}`}>
                    <FileText className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default MainLayout;
