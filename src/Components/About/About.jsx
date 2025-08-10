import React from "react";
import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* Left Side - Catchy Card */}
        <motion.div
          className="flex-1 bg-indigo-700 rounded-3xl p-12 shadow-2xl text-white cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-5xl font-extrabold mb-6 leading-tight tracking-tight">
            Learn <span className="text-yellow-300">Smart</span> <br />  
            & <br />
            <span className="text-yellow-300">Submit</span> Easily
          </h3>
          <p className="text-lg leading-relaxed tracking-wide">
            Our platform empowers both students and teachers by making assignment management 
            effortless and enjoyable. Collaborate, create, submit, and evaluate—all in one place.
          </p>
        </motion.div>

        {/* Right Side - Features */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8 leading-snug">
            Why Choose <span className="text-indigo-600">AssignHub?</span>
          </h2>
          <ul className="space-y-6 text-gray-700 dark:text-gray-300 text-lg">
            {[
              "Simple & Intuitive: User-friendly interface for smooth experience.",
              "Real-time Updates: Stay on top of your assignments anytime.",
              "Secure & Reliable: Your data privacy is our top priority.",
              "Collaborative: Teachers and students connect seamlessly."
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <HiCheckCircle className="flex-shrink-0 text-indigo-600 w-6 h-6 mt-1" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
          <button
            className="mt-10 bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-transform text-white px-10 py-3 rounded-lg shadow-lg font-semibold tracking-wide focus:outline-none focus:ring-4 focus:ring-indigo-300"
            aria-label="Get started with AssignHub"
          >
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
