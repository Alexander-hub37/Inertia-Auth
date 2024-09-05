// hooks/useRegister.js
import { useState } from 'react';
import { registerService } from '../Services/registerService';
import { router } from '@inertiajs/react';

const useRegister = (setError) => {
    const [generalError, setGeneralError] = useState(null);

    const handleRegister = async (data) => {
        setGeneralError(null);

        const response = await registerService(data);

        if (response.status === 200) {
            const responseData = response.data;
            localStorage.setItem('token', responseData.data.token);
            
            router.post('/register', { token: responseData.data.token });
        } else 
        
        if (response.status === 401) {

           setGeneralError(response.message);

        } else if (response.status === 422 && response.message) {
            Object.keys(response.message).forEach((field) => {
                setError(field, {
                    type: 'manual',
                    message: response.message[field][0], 
                });
            });
        } 
    };

    return { handleRegister, generalError };
};

export default useRegister;
