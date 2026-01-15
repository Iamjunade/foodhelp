import React, { useState } from 'react';
import { UserProfile, signOutUser } from '../../../services/authService';
import { UserRole } from '../../../types';
import { LogOut, Menu, User, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TopBarProps {
    currentUser: UserProfile | null;
    onMenuClick: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ currentUser, onMenuClick }) => {
    const navigate = useNavigate();
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const handleLogout = async () => {
        await signOutUser();
        navigate('/');
    };

    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-30 flex items-center justify-between px-4 lg:px-6">
            <div className="flex items-center gap-3">
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 hover:bg-gray-100 rounded-lg text-gray-600"
                >
                    <Menu className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="FoodRescue" className="w-8 h-8 hidden md:block" />
                    <span className="font-bold text-xl text-gray-800">FoodRescue<span className="text-primary">.ai</span></span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500 relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                <div className="relative">
                    <button
                        onClick={() => setShowProfileMenu(!showProfileMenu)}
                        className="flex items-center gap-2 hover:bg-gray-50 pr-3 pl-1 py-1 rounded-full border border-transparent hover:border-gray-200 transition-all"
                    >
                        {currentUser?.photoURL ? (
                            <img src={currentUser.photoURL} alt="Profile" className="w-8 h-8 rounded-full border border-gray-200" />
                        ) : (
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <User className="w-4 h-4" />
                            </div>
                        )}
                        <div className="text-left hidden md:block">
                            <p className="text-sm font-bold text-gray-700 leading-tight">{currentUser?.displayName || 'User'}</p>
                            <p className="text-xs text-gray-500 capitalize">{currentUser?.role?.toLowerCase()}</p>
                        </div>
                    </button>

                    {showProfileMenu && (
                        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 animate-in fade-in slide-in-from-top-2">
                            <div className="px-4 py-3 border-b border-gray-50 md:hidden">
                                <p className="text-sm font-bold text-gray-800">{currentUser?.displayName}</p>
                                <p className="text-xs text-gray-500 capitalize">{currentUser?.role?.toLowerCase()}</p>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                            >
                                <LogOut className="w-4 h-4" />
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default TopBar;
