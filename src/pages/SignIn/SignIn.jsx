import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import GoogleSignUp from '../../Utilitis/GoogleSignUp';
import Swal from 'sweetalert2';

const SignIn = () => {

    const { userSignin } = use(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)

    const handleSignIn = (e) => {
        e.preventDefault()
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;

        // signin user email and password 
        userSignin(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Sign in Successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
            <div className="card-body">
                <h1 className="text-5xl font-bold mx-auto">SignIN now!</h1>
                <form onSubmit={handleSignIn} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name='email' required className="input" placeholder="Email" />
                    <label className="input validator">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                ></path>
                                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                            </g>
                        </svg>
                        <input
                            type="password"
                            name='password'
                            required
                            placeholder="Password"
                            minLength="6"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                        />
                    </label>
                    <p className="validator-hint hidden">
                        Must be more than 6 characters, including
                        <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                    </p>
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <input className="btn btn-neutral mt-4" type="submit" value="SIGNIN" />
                </form>
                <GoogleSignUp></GoogleSignUp>
                <p className='mx-auto'>Don't have an account! <Link to='/signup' className='text-green-600 font-semibold'>SIGNUP</Link></p>
            </div>
        </div>
    );
};

export default SignIn;