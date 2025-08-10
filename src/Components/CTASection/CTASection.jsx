import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const CTASection = () => {
  return (
    <section className="bg-indigo-100 py-20 px-6 text-center">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-semibold mb-6 text-indigo-900">
          Ready to <span className="text-indigo-600 font-bold">Elevate</span> Your Learning?
        </h2>
        <p className="text-indigo-700 mb-10">
          Join thousands of students mastering smarter study habits and seamless collaboration with <span className="font-semibold underline decoration-indigo-400">AssignHub</span>.
        </p>
        <button
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-10 py-3 rounded-md shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          aria-label="Get started with AssignHub"
        >
          <Link to='/assignments'>
            Get Started Now
          </Link>

        </button>
      </motion.div>
    </section>
  );
};

export default CTASection;
