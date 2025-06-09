import React from 'react';

const Hero = () => {
    return (
        <div className="hero bg-base-200 my-10">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-10">
                <div className='flex-1 lg:pl-20'>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="w-[300px] rounded-lg shadow-2xl "
                        alt="Students collaborating online"
                    />
                </div>
                <div className='flex-1'>
                    <h1 className="text-5xl font-bold">Study Smarter, Together!</h1>
                    <p className="py-6">
                        Welcome to <span className="font-semibold text-primary">StudyHub</span> — the ultimate platform for group study with friends!
                        Create assignments, submit your work, and review your friends’ progress — all in one place.
                        Let’s build knowledge, collaboration, and success together!
                    </p>
                    <button className="btn btn-primary">Start Learning</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
