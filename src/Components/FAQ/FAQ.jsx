import React from 'react';

const FAQ = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 pt-5 rounded-2xl pb-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold my-4 justify-center flex items-center text-gray-900 dark:text-gray-100">
        Frequently Asked Questions
      </h1>

      <div className="collapse collapse-arrow bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg mb-4">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold text-gray-900 dark:text-gray-100">
          How do I join a study group?
        </div>
        <div className="collapse-content text-sm text-gray-700 dark:text-gray-300">
          After signing in, navigate to the "Groups" section and request to join an existing group or create a new one.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg mb-4">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold text-gray-900 dark:text-gray-100">
          Is the platform free to use?
        </div>
        <div className="collapse-content text-sm text-gray-700 dark:text-gray-300">
          Yes, joining and creating study groups is completely free. However, premium features may be available in the future.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg mb-4">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold text-gray-900 dark:text-gray-100">
          Can I host a live session with my group?
        </div>
        <div className="collapse-content text-sm text-gray-700 dark:text-gray-300">
          Yes, group admins can schedule live sessions using integrated video tools or by sharing third-party meeting links.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg mb-4">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold text-gray-900 dark:text-gray-100">
          How do I share study materials?
        </div>
        <div className="collapse-content text-sm text-gray-700 dark:text-gray-300">
          Go to your group dashboard and upload files or share notes in the "Resources" section accessible by all members.
        </div>
      </div>
    </div>
  );
};

export default FAQ;
