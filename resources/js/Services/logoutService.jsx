import axios from 'axios';

export const logoutService = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
        return { status: 401, message: 'Unauthorized' };
    }

    try {
        const response = await axios.post('/api/logout', {}, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        localStorage.removeItem('token'); 

        return {
            status: 200,
            message: 'Logout successful',
        };

    } catch (error) {
        if (error.response) {
            return {
                status: error.response.status,
                message: error.response.data.message || 'Failed to log out.',
            };
        }

        return {
            status: 500,
            message: 'An error occurred. Please try again.',
        };
    }
};
