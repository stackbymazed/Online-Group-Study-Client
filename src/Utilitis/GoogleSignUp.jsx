import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const GoogleSignUp = () => {
    const { signUpWithGoogle } = use(AuthContext)
    const navigate = useNavigate()

    const handleGoogleSignUp = () => {
        signUpWithGoogle()
            .then((result) => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Create Successfully with Google!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/")
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });

    }
    return (
        <button onClick={handleGoogleSignUp} className="btn bg-white text-black border-[#e5e5e5] shadow-2xl">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            SignIn with Google
        </button>
    );
};

export default GoogleSignUp;