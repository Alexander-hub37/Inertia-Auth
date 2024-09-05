export const logoutService = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
        return { status: 401, message: 'Unauthorized' };
    }

    try {
        const response = await fetch('/api/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, 
            },
        });

        const data = await response.json();


        if (response.ok) {
            localStorage.removeItem('token');
            return {
                status: 200,
                message: 'Logout successful',
            };
        }

        return {
            status: response.status,
            message: data.message || 'Failed to log out.',
        };

    } catch (error) {
        return {
            status: 500,
            message: 'An error occurred. Please try again.',
        };
    }
};
