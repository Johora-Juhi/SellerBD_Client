import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import login from '../../../assets/images/clientLogin.jpg';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { googleLogin, signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [LoginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(LoginUserEmail);
    const user = useContext(AuthContext);

    console.log(LoginUserEmail);

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [from, token, navigate])

    if (user?.email) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginUserEmail('');
        setLoginError('')
        signIn(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.log(error);
                setLoginError(error.message);
            })
    }

    return (
       
            <div className="mt-20 px-12 py-20 shadow-lg lg:w-1/4 mx-auto justify-center border border-primary rounded-lg">
                <form onSubmit={handleSubmit(handleLogin)} >
                    <h1 className="text-3xl font-bold text-center text-primary mb-3">Please Login</h1>
                    <p className='text-sm text-gray-500 text-center mb-5'>We will not share your information</p>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", {
                            required: "Email Address is required"
                        })} type="email" placeholder="email" className="input input-bordered" />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control mt-2">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", {
                            required: "Password is required"
                        })} type="password" placeholder="password" className="input input-bordered" />
                        {errors.password && <p className='text-red-500' >{errors.password?.message}</p>}
                        {loginError &&
                            <label className="label">
                                <p className="label-text text-red-500">{loginError}</p>
                            </label>}
                        {/* <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label> */}
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn btn-primary border-none text-white mt-2">Login</button>
                    </div>
                    <p className='text-center label-text my-2'>New to Seller BD? <Link to='/signup' className='text-primary font-bold'> Create new account</Link></p>
                </form>
                {/* <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary">CONTINUE WITH GOOGLE</button> */}
            </div>
    );
};

export default Login;