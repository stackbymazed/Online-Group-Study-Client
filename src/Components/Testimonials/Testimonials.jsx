import React from 'react';
import { FaHeart, FaRegGrinHearts } from 'react-icons/fa';
import { Slide } from 'react-awesome-reveal';

const Testimonials = () => {
  return (
    <div className="py-16 bg-base-100 text-center px-4">
      <h2 className="text-3xl md:text-4xl text-primary font-bold mb-4">
        Don’t just take our word for it
      </h2>
      <p className="text-lg text-gray-600 mb-1">
        Studying online in a focus room with friends and strangers is a game-changer for <strong>millions</strong> of students all over the world.
      </p>
      <p className="text-sm text-gray-500 mb-6">… and the crowd goes wild:</p>

      <div className="flex justify-center mb-8 gap-1 text-pink-400 text-2xl animate-pulse">
        <FaHeart />
        <FaRegGrinHearts />
        <FaHeart />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <Slide triggerOnce cascade damping={0.1}>
          {[ // Data array for testimonials (optional enhancement)
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
              className=" p-6 rounded-xl shadow border border-purple-100 flex flex-col justify-between min-h-[280px] text-left"
            >
              <div>
                <h3 className="font-bold text-lg mb-3 text-purple-800">{testimonial.title}</h3>
                <p className="text-sm text-gray-700 dark:text-white">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Testimonials;
