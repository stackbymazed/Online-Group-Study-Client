import React from "react";

const FAQ = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12 px-6 max-w-4xl mx-auto rounded-3xl shadow-md">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {[{
          question: "How do I join a study group?",
          answer: "After signing in, navigate to the 'Groups' section and request to join an existing group or create a new one."
        },
        {
          question: "Is the platform free to use?",
          answer: "Yes, joining and creating study groups is completely free. However, premium features may be available in the future."
        },
        {
          question: "Can I host a live session with my group?",
          answer: "Yes, group admins can schedule live sessions using integrated video tools or by sharing third-party meeting links."
        },
        {
          question: "How do I share study materials?",
          answer: "Go to your group dashboard and upload files or share notes in the 'Resources' section accessible by all members."
        }].map(({ question, answer }, i) => (
          <details
            key={i}
            className="group bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-5 cursor-pointer hover:shadow-lg transition-shadow duration-300"
          >
            <summary className="font-semibold text-gray-900 dark:text-gray-100 list-none">
              {question}
              <span className="float-right transition-transform duration-300 group-open:rotate-180">
                ▼
              </span>
            </summary>
            <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
