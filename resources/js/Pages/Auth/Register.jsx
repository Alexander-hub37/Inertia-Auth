// pages/Register.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from "../../Components/InputField";
import useRegister from '../../Hooks/useRegister';
import { Head } from '@inertiajs/react';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    const { handleRegister, generalError } = useRegister(setError);

    return (
        <div className="login-container"> 
            <Head title="Register" />
            <section className="login-section">
                <div className="login-box">
                    <div className="login-form-container">
                        <h2 className="login-title">Create your account</h2> 
                        <form onSubmit={handleSubmit(handleRegister)} className="login-form">
                            <InputField
                                label="Name"
                                type="text"
                                name="name"
                                register={register}
                                errors={errors}
                                placeholder="Name"
                            />

                            <InputField
                                label="Email Address"
                                type="email"
                                name="email"
                                register={register}
                                errors={errors}
                                placeholder="Email address"
                            />

                            <InputField
                                label="Password"
                                type="password"
                                name="password"
                                register={register}
                                errors={errors}
                                placeholder="Password"
                            />

                            <InputField
                                label="Confirm Password"
                                type="password"
                                name="password_confirmation"
                                register={register}
                                errors={errors}
                                placeholder="Confirm Password"
                            />

                            {generalError && <div className="error-message">{generalError}</div>}

                            <button type="submit" className="login-button">
                                Sign Up
                            </button>

                            <div className="or-divider">
                                <hr />
                                <p className="or-text">OR</p>
                                <hr />
                            </div>

                            <div className="register-section">
                                <p>If you have an account, please login</p>
                                <a href="/login" className="register-link">Login</a>
                            </div>
                        </form>
                    </div>

                    <div className="login-image-container">
                        <img
                            src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                            className="login-image"
                            alt="register"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;
