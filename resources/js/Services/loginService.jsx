import axios from 'axios';

export const loginService = async (data) => {
    try {
        const response = await axios.post('/api/login', data);

        return {
            status: response.status,
            data: response.data,
        };

    } catch (error) {
        if (error.response) {
         
            return {
                status: error.response.status,
                message: error.response.data.message || error.response.data.errors,
            };
        }


        return {
            status: 'error',
            message: error.message || 'An error occurred. Please try again.',
        };
    }
};
