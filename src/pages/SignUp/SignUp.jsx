import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import GoogleSignUp from '../../Utilitis/GoogleSignUp';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser } = use(AuthContext)
    const handleCreateUser = (e) => {
        e.preventDefault()
        const from = e.target;
        const email = from.email.value
        const password = from.password.value
        const name = from.name.value
        const photo = from.photo.value


        // create user with email and password
        createUser(email, password)
            .then(res => {
                console.log(res);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Create Successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
            <div className="card-body">
                <h1 className="text-5xl font-bold mx-auto">SignUP now!</h1>
                <form onSubmit={handleCreateUser} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" required name='name' className="input" placeholder="Name" />
                    <label className="label">Email</label>
                    <input type="email" required name='email' className="input" placeholder="Email" />
                    <label className="label">Photo Url</label>
                    <input type="text" required name='photo' className="input" placeholder="Photo Url" />
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
                            required
                            name="password"
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
                    <input className="btn btn-neutral mt-4" type="submit" value="SIGNUP" />
                </form>
                <GoogleSignUp></GoogleSignUp>
                <p className='mx-auto'>Already have an account! <Link to='/signin' className='text-green-600 font-semibold'>SIGNIN</Link></p>
            </div>
        </div>
    );
};

export default SignUp;