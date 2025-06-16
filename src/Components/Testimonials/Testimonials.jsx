import React from 'react';
import { FaHeart, FaRegGrinHearts } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <div className="py-16 bg-base-100 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Don’t just take our word for it</h2>
      <p className="text-lg text-gray-600 mb-1">
        Studying online in a focus room with friends and strangers is a game-changer for <strong>millions</strong> of students all over the world.
      </p>
      <p className="text-sm text-gray-500 mb-6">… and the crowd goes wild:</p>

      {/* Animated heart icons */}
      <div className="flex justify-center mb-8 gap-1 text-pink-400 text-2xl animate-pulse">
        <FaHeart />
        <FaRegGrinHearts />
        <FaHeart />
      </div>

      {/* Testimonials Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
        <div className="bg-purple-50 p-6 rounded-xl shadow border border-purple-100">
          <h3 className="font-bold mb-2">Awesome Community</h3>
          <p className="text-sm text-gray-700">
            "As a chronic procrastinator, this community really helps me motivate myself to get my homework done. Has cool leaderboards, timers, and study tips. It’s a really large community so it’s pretty easy to meet people, too."
          </p>
        </div>

        <div className="bg-purple-50 p-6 rounded-xl shadow border border-purple-100">
          <h3 className="font-bold mb-2">Productivity Booster</h3>
          <p className="text-sm text-gray-700">
            "I have never been so focused and productive when studying by myself before. I can study with someone basically 24/7 if I really wanted to. It has been an amazing help! 💜 Thanks Study Together!"
          </p>
        </div>

        <div className="bg-purple-50 p-6 rounded-xl shadow border border-purple-100">
          <h3 className="font-bold mb-2">Goals</h3>
          <p className="text-sm text-gray-700">
            "I’ve been a part of it for probably a little over a month and I’ve noticed how it’s improved my ability to stay focused. Since everyone is also studying in the call and working hard, I feel obliged to stay on task as well."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
