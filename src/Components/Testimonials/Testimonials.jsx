import React from 'react';
import { FaHeart, FaRegGrinHearts } from 'react-icons/fa';
import { Slide } from 'react-awesome-reveal';

const Testimonials = () => {
  return (
    
    <div className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-24 px-6">
      <h2 className="text-3xl md:text-4xl text-primary font-bold mb-4 mx-auto justify-center items-center flex">
        Don’t just take our word for it
      </h2>
      <p className="text-lg text-gray-600 mb-1 mx-auto justify-center items-center flex">
        Studying online in a focus room with friends and strangers is a game-changer for <strong>millions</strong> of students all over the world.
      </p>
      <p className="text-sm text-gray-500 mb-6 mx-auto justify-center items-center flex">… and the crowd goes wild:</p>

      <div className="flex justify-center mb-8 gap-1 text-pink-400 text-2xl animate-pulse">
        <FaHeart className="transform hover:scale-125 transition-transform duration-500 ease-in-out" />
        <FaRegGrinHearts className="transform hover:scale-125 transition-transform duration-500 ease-in-out" />
        <FaHeart className="transform hover:scale-125 transition-transform duration-500 ease-in-out" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <Slide triggerOnce cascade damping={0.1}>
          {[
            {
              title: "Awesome Community",
              text: `"As a chronic procrastinator, this community really helps me motivate myself to get my homework done. Has cool leaderboards, timers, and study tips. It’s a really large community so it’s pretty easy to meet people, too."`
            },
            {
              title: "Productivity Booster",
              text: `"I have never been so focused and productive when studying by myself before. I can study with someone basically 24/7 if I really wanted to. It has been an amazing help! 💜 Thanks Study Together!"`
            },
            {
              title: "Goals",
              text: `"I’ve been a part of it for probably a little over a month and I’ve noticed how it’s improved my ability to stay focused. Since everyone is also studying in the call and working hard, I feel obliged to stay on task as well."`
            }
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl shadow-md border border-purple-100 flex flex-col justify-between min-h-[280px] text-left cursor-default
              transition transform hover:scale-[1.03] hover:shadow-xl duration-300 ease-in-out"
            >
              <div>
                <h3 className="font-bold text-lg mb-3 text-purple-800">{testimonial.title}</h3>
                <p className="text-gray-700 dark:text-gray-200">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Testimonials;
