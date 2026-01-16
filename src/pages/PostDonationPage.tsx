import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { subscribeToAuthChanges, UserProfile } from '../../services/authService';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import DonationForm from '../../components/DonationForm';
import { Loader2 } from 'lucide-react';

const PostDonationPage: React.FC = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = subscribeToAuthChanges((currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const handleSuccess = () => {
        navigate('/dashboard');
    };

    const handleCancel = () => {
        navigate('/dashboard');
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
        );
    }

    if (!user) {
        return null; // ProtectedRoute will handle this
    }

    return (
        <DashboardLayout currentUser={user}>
            <div className="max-w-2xl mx-auto">
                <DonationForm
                    currentUser={user}
                    onSuccess={handleSuccess}
                    onCancel={handleCancel}
                />
            </div>
        </DashboardLayout>
    );
};

export default PostDonationPage;
