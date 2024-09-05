export const registerService = async (data) => {
    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();

        if (response.status === 401 || response.status === 422) {
            
            return {
                status: response.status,
                message: responseData.message || responseData.errors,  
            };
        }

        
        if (!response.ok) {
            throw new Error('An error occurred. Please try again.');
        }

        return {
            status: response.status,
            data: responseData,
        };

    } catch (error) {
        return {
            status: 'error',
            message: error.message || 'An error occurred. Please try again.',
        };
    }
};
