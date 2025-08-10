import React from 'react';
import { useNavigate } from 'react-router';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <img
        src="https://i.ibb.co/YFmxpP97/images-9.jpg"
        alt="404 Not Found"
        className="w-1/2 max-w-sm rounded-3xl border-2 border-gray-500 shadow-2xl mb-10"
      />
      <h1 className="text-5xl font-bold text-red-700 mb-4 text-center">
        404 - Page Not Found
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 text-center max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
      >
        Go to Home
      </button>
    </div>
  );
};

export default Error;
