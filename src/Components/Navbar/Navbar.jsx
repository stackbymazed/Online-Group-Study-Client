import { Link, NavLink, useNavigate } from 'react-router';
import { FiSun, FiMoon } from 'react-icons/fi';
import { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
// import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = () => {

    const { user, userSignOut } = use(AuthContext)
    // console.log(user)
    const navigate = useNavigate()
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            setTheme(savedTheme);
        } else if (systemPrefersDark) {
            setTheme('dark');
        }
    }, []);

    useEffect(() => {
        const html = document.documentElement;
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Toggle theme handler
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const links = <>
        <NavLink className={({ isActive }) =>
            isActive ? "underline text-black" : "text-white"
        } to='/'><li className='dark:text-white'>Home</li></NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "underline text-black" : "text-white"
        } to="/assignments"><li className='dark:text-white'>Assignments</li></NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "underline text-black" : "text-white"
        } to="/pendingAssignments"><li className='dark:text-white'>Pending-Assignments</li></NavLink>
    </>

    const handleSignout = () => {

        userSignOut()
            .then(() => {
                // Sign-out successful.
                navigate("/")
            }).catch((error) => {
                // An error happened.
            });
    }
    return (
        <div className="navbar  shadow-sm sticky top-0 z-50 bg-indigo-800 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-5">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="text-xl lg:ml-7 hidden lg:block">
                    {/* <img className='w-[80px] h-[40px] bg-none' src={image} alt="" /> */}
                    <h1 className='text-3xl font-semibold font-black'>StudyHub</h1>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end gap-3 mr-10">
                <button
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    className=" p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                    {
                        theme === 'dark' ? (
                            <span className="text-yellow-300 text-xl">
                                <FiSun />
                            </span>
                        ) : (
                            <span className="text-gray-700 text-xl">
                                <FiMoon />
                            </span>
                        )
                    }
                </button>
                {
                    user ?
                        <>
                            <div className="dropdown dropdown-hover mr-10">
                                <div tabIndex={0}>
                                    <img className='w-[40px] h-[40px] rounded-full' src={user?.photoURL} alt="User" />
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu rounded-box z-10 w-56 p-2 bg-white dark:bg-gray-800 text-black dark:text-white shadow-sm">
                                    <li className='text-xl font-semibold'>{user?.displayName}</li>

                                    <li>
                                        <Link to="/createAssignment">
                                            <button className="btn btn-primary w-full">Create Assignments</button>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/myAssignments">
                                            <button className="btn btn-primary w-full">My Attempted Assignments</button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <Link to="/signin">
                                    <button onClick={handleSignout} className="relative inline-block px-4 py-2 font-medium group">
                                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-indigo-800 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                        <span className="absolute inset-0 w-full h-full bg-white dark:bg-gray-900 border-2 border-indigo-800 group-hover:bg-indigo-800"></span>
                                        <span className="relative text-indigo-800 dark:text-white group-hover:text-white">Logout</span>
                                    </button>
                                </Link>
                            </div>

                        </>
                        :
                        <>
                            <Link to='/signin'><button className='btn btn-primary'>SignIN</button></Link>
                            <Link to='/signup'><button className='btn btn-primary'>SignUp</button></Link>

                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;