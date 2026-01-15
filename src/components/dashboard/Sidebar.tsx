import React from 'react';
import { UserRole } from '../../../types';
import {
    LayoutDashboard,
    Map,
    Settings,
    History,
    PlusCircle,
    UtensilsCrossed,
    ShoppingBag,
    Bike
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
    role: UserRole;
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ role, isOpen, onClose }) => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    const NavItem = ({ to, icon: Icon, label }: any) => (
        <Link
            to={to}
            onClick={() => window.innerWidth < 1024 && onClose()}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
        ${isActive(to)
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
        >
            <Icon className="w-5 h-5" />
            {label}
        </Link>
    );

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20 lg:hidden"
                    onClick={onClose}
                ></div>
            )}

            {/* Sidebar Content */}
            <aside
                className={`fixed top-16 left-0 bottom-0 w-64 bg-white border-r border-gray-200 z-20 transform transition-transform duration-300 ease-in-out lg:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
            >
                <div className="p-4 space-y-1">
                    <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 mt-4">Main</p>
                    <NavItem to="/dashboard" icon={LayoutDashboard} label="Dashboard" />

                    {role === UserRole.DONOR && (
                        <>
                            <NavItem to="/dashboard/post" icon={PlusCircle} label="Post Donation" />
                            <NavItem to="/dashboard/listings" icon={ShoppingBag} label="My Listings" />
                        </>
                    )}

                    {role === UserRole.RECIPIENT && (
                        <>
                            <NavItem to="/dashboard/browse" icon={UtensilsCrossed} label="Browse Food" />
                            <NavItem to="/dashboard/claims" icon={History} label="My Claims" />
                            <NavItem to="/dashboard/map" icon={Map} label="Map View" />
                        </>
                    )}

                    {role === UserRole.RESCUER && (
                        <>
                            <NavItem to="/dashboard/tasks" icon={Bike} label="Delivery Tasks" />
                            <NavItem to="/dashboard/history" icon={History} label="History" />
                        </>
                    )}

                    <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 mt-6">Settings</p>
                    <NavItem to="/dashboard/settings" icon={Settings} label="Settings" />
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
