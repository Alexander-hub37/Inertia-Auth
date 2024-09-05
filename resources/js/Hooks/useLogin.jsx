import { useState } from 'react';
import { loginService } from "../Services/loginService";
import { router } from '@inertiajs/react';

const useLogin = (setError) => {
    const [generalError, setGeneralError] = useState(null);

    const handleLogin = async (data) => {
        setGeneralError(null);  

        const response = await loginService(data);

        if (response.status === 200) {
            const responseData = response.data;

            localStorage.setItem('token', responseData.data.token);

            router.post('/login', { token: responseData.data.token });
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

    return { handleLogin, generalError };
};

export default useLogin;
