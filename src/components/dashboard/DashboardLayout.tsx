import React, { useState } from 'react';
import TopBar from './TopBar';
import Sidebar from './Sidebar';
import { UserProfile } from '../../../services/authService';

interface DashboardLayoutProps {
    children: React.ReactNode;
    currentUser: UserProfile | null;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, currentUser }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    if (!currentUser) return null;

    return (
        <div className="min-h-screen bg-gray-50">
            <TopBar
                currentUser={currentUser}
                onMenuClick={() => setSidebarOpen(!sidebarOpen)}
            />

            <Sidebar
                role={currentUser.role}
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            <main className="lg:pl-64 pt-16 min-h-screen transition-all duration-300">
                <div className="p-4 lg:p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
