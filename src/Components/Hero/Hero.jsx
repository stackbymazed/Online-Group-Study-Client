import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Empower Your <span className="text-indigo-600">Learning Journey</span> with StudyHub
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
            Seamlessly create, submit, and evaluate assignments in one powerful platform.
            Join thousands of learners collaborating smarter every day.
          </p>
          <button className="btn btn-indigo px-8 py-3 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition">
            Get Started
          </button>
        </motion.div>

        {/* Images with animations and overlay */}
        <div className="relative flex-1 max-w-md mx-auto lg:mx-0">
          {/* First Image - vertical float */}
          <motion.img
            src="https://i.ibb.co/SDN1MKSz/download-14.jpg"
            alt="Study Image 1"
            className="rounded-lg shadow-2xl border-blue-800 border-b-8 border-l-8"
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Second Image - horizontal float and overlay on first */}
          <motion.img
            src="https://i.ibb.co/HL8jGLQb/images-15.jpg"
            alt="Study Image 2"
            className="rounded-lg shadow-2xl border-blue-800 border-b-8 border-l-8 absolute top-20 left-16 w-64"
            initial={{ x: 0 }}
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
