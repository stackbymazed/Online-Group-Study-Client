import React from 'react';
import { motion } from "framer-motion";
// import { delay } from 'motion';

const Hero = () => {
    return (
        <div className="hero bg-base-200 my-10">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-10">
                <div className='flex-1'>
                    <motion.img
                        src='https://i.ibb.co/SDN1MKSz/download-14.jpg'
                        lg:animate={{ y: [100, 150, 100] }}
                        animate={{ y: [0, 50, 0] }}
                        lg:transition={{ duration: 5, repeat: Infinity, delay: 5 }}
                        transition={{ duration: 10, repeat: Infinity, delay: 5 }}
                        className="lg:max-w-sm max-w-60 rounded-lg shadow-2xl rounded-t-4xl rounded-br-4xl border-s-8 border-blue-800 border-b-8"
                    />
                    <motion.img
                        src='https://i.ibb.co/HL8jGLQb/images-15.jpg'
                        lg:animate={{ x: [100, 200, 100] }}
                        animate={{ x: [0, 50, 0] }}
                        lg:transition={{ duration: 10, repeat: Infinity }}
                        transition={{ duration: 20, repeat: Infinity }}
                        className="lg:max-w-sm max-w-60 rounded-lg shadow-2xl rounded-t-4xl rounded-br-4xl border-s-8 border-blue-800 border-b-8"
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
