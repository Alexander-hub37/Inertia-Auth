import { useForm } from "react-hook-form";
import InputField from "../../Components/InputField";
import useLogin from "../../Hooks/useLogin";
import { Head } from '@inertiajs/react';

const Login = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const { handleLogin, generalError } = useLogin(setError);

  return (
        <div className="login-container">
            <Head title="Login" />
            <section className="login-section">
                <div className="login-box">
                    <div className="login-form-container">
                        <h2 className="login-title">Login</h2>
                        <p className="login-subtitle">
                            If you have an account, please login
                        </p>

                        <form onSubmit={handleSubmit(handleLogin)} className="login-form">
                            <InputField
                                label="Email Address"
                                type="email"
                                name="email"
                                register={register}
                                errors={errors}
                                placeholder="Enter Email Address"
                            />

                            <InputField
                                label="Password"
                                type="password"
                                name="password"
                                register={register}
                                errors={errors}
                                placeholder="Enter Password"
                            />

                            {generalError && <div className="error-message">{generalError}</div>}

                            <div className="forgot-password">
                                <a href="#" className="forgot-password-link">Forgot Password?</a>
                            </div>

                            <button type="submit" className="login-button">Log In</button>

                            <div className="or-divider">
                                <hr />
                                <p className="or-text">OR</p>
                                <hr />
                            </div>

                            <div className="register-section">
                                <p>If you don't have an account...</p>
                                <a href="/register" className="register-link">Register</a>
                            </div>
                        </form>
                    </div>

                    <div className="login-image-container">
                        <img
                            src="https://www.itdo.com/blog/content/images/size/w1200/2024/03/Sin-t-tuloz.png"
                            className="login-image"
                            alt="login"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
