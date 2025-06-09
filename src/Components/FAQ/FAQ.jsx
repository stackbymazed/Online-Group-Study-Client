import React from 'react';

const FAQ = () => {
    return (
        <div className='bg-gray-100 pt-5 rounded-2xl pb-20'>
            <h1 className='text-2xl font-semibold my-4 justify-center flex items-center'>
                Frequently Asked Questions
            </h1>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title font-semibold">How do I join a study group?</div>
                <div className="collapse-content text-sm">
                    After signing in, navigate to the "Groups" section and request to join an existing group or create a new one.
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title font-semibold">Is the platform free to use?</div>
                <div className="collapse-content text-sm">
                    Yes, joining and creating study groups is completely free. However, premium features may be available in the future.
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title font-semibold">Can I host a live session with my group?</div>
                <div className="collapse-content text-sm">
                    Yes, group admins can schedule live sessions using integrated video tools or by sharing third-party meeting links.
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title font-semibold">How do I share study materials?</div>
                <div className="collapse-content text-sm">
                    Go to your group dashboard and upload files or share notes in the "Resources" section accessible by all members.
                </div>
            </div>

        </div>
    );
};

export default FAQ;
