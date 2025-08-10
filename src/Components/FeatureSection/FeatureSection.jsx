import { FaTasks, FaUserFriends, FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const FeatureSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-12">
          Awesome Features You'll Love!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {/* Feature 1 */}
          <Slide triggerOnce>
            <div className="bg-base-100 p-6 rounded-2xl shadow hover:shadow-xl hover:scale-105 transition duration-300 flex flex-col min-h-[320px] cursor-pointer">
              <div className="text-4xl text-indigo-600 mb-4 mx-auto flex justify-center items-center">
                <FaTasks />
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Assignments</h3>
              <p className="text-gray-500 flex-grow">
                Quickly create assignments with difficulty, due date & share with friends.
              </p>
            </div>
          </Slide>

          {/* Feature 2 */}
          <Slide triggerOnce>
            <div className="bg-base-100 p-6 rounded-2xl shadow hover:shadow-xl hover:scale-105 transition duration-300 flex flex-col min-h-[320px] cursor-pointer">
              <div className="text-4xl text-indigo-600 mb-4 mx-auto flex justify-center items-center">
                <FaUserFriends />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaborate Easily</h3>
              <p className="text-gray-500 flex-grow">
                All users are connected. Submit, review, and learn together.
              </p>
            </div>
          </Slide>

          {/* Feature 3 */}
          <Slide triggerOnce>
            <div className="bg-base-100 p-6 rounded-2xl shadow hover:shadow-xl hover:scale-105 transition duration-300 flex flex-col min-h-[320px] cursor-pointer">
              <div className="text-4xl text-indigo-600 mb-4 mx-auto flex justify-center items-center">
                <FaCheckCircle />
              </div>
              <h3 className="text-xl font-semibold mb-2">Grade & Feedback</h3>
              <p className="text-gray-500 flex-grow">
                Evaluate assignments and leave helpful feedback for your friends.
              </p>
            </div>
          </Slide>

          {/* Feature 4 */}
          <Slide triggerOnce>
            <div className="bg-base-100 p-6 rounded-2xl shadow hover:shadow-xl hover:scale-105 transition duration-300 flex flex-col min-h-[320px] cursor-pointer">
              <div className="text-4xl text-indigo-600 mb-4 mx-auto flex justify-center items-center">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-gray-500 flex-grow">
                Enjoy secure login with JWT protection on private routes.
              </p>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
