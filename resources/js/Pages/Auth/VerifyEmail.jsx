import React, { useState } from 'react';
import { Head, usePage, router } from '@inertiajs/react';
import  LogoutButton  from "../../Components/LogoutButton";

const VerifyEmail = () => {
    const { status } = usePage().props;
    const [message, setMessage] = useState(status || '');

    const handleResendVerification = () => {
        router.post('/email/verification-notification', {}, {
            onSuccess: () => setMessage('Verification link sent! Check your email.')
        });
    };

    return (
    <div className="login-container"> 
    <Head title="Verify Email" />
        <section className="login-section">
            <div className="login-box">
            <div className="login-form-container">
                <h1 className="login-title text-center">Verify Your Email Address</h1> 
                
                {message && (
                <div className="text-green-600 text-sm text-center">
                    {message}
                </div>
                )}

                <p className="text-gray-700 text-center mt-4">
                Almost there! Confirm your email to activate your account. Don't see it? Request another.
                </p>

                <div className="mt-6 text-center">
                <button
                    type="button"
                    onClick={handleResendVerification}
                    className="login-button"  
                >
                    Resend Verification Email
                </button>
                <button>
                <LogoutButton className="logout-button" />
                </button>
                </div>
            </div>
            <div className="login-image-container">
                <img
                src="https://static.vecteezy.com/system/resources/previews/005/280/692/non_2x/banner-illustration-of-email-marketing-and-message-concept-letter-sheet-in-an-envelope-checkmark-sending-application-receive-news-filled-document-alert-and-bell-blue-and-white-vector.jpg"
                className="login-image"
                alt="login"
                />
            </div>
            </div>
        </section>
    </div>
    );
};

export default VerifyEmail;
