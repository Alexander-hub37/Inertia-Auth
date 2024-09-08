import React from 'react';
import { logoutService } from "../Services/logoutService";
import { router } from '@inertiajs/react';

const LogoutButton = ({ className }) => {
    const handleLogout = async () => {
        try {
            const response = await logoutService();

            if (response.status === 200) {
                
                router.post("/logout", {});
            } else {
                
                console.error(response.message);
            }
        } catch (error) {
            console.error('Error during logout:', error.message);
        }
    };

    return (
        <a onClick={handleLogout} className={className}>
            Sign out
        </a>
    );
};

export default LogoutButton;
