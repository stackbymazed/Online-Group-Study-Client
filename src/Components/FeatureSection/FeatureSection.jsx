import { FaTasks, FaUserFriends, FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

const FeatureSection = () => {
  return (
    <section className="bg-base-200 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-12">
          Awesome Features You'll Love!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <Slide triggerOnce >
            <Fade cascade>
              <div className="bg-base-100 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
                <div className="text-4xl text-primary mb-4 mx-auto flex justify-center items-center">
                  <FaTasks />
                </div>
                <h3 className="text-xl font-semibold mb-2">Create Assignments</h3>
                <p className="text-gray-500">
                  Quickly create assignments with difficulty, due date & share with friends.
                </p>
              </div>
            </Fade>
          </Slide>

          {/* Feature 2 */}
          <Slide triggerOnce>
            <Fade cascade>
              <div className="bg-base-100 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
                <div className="text-4xl text-secondary mb-4 mx-auto flex justify-center items-center">
                  <FaUserFriends />
                </div>
                <h3 className="text-xl font-semibold mb-2">Collaborate Easily</h3>
                <p className="text-gray-500">
                  All users are connected. Submit, review, and learn together.
                </p>
              </div>
            </Fade>
          </Slide>
          {/* Feature 3 */}
          <Slide triggerOnce>
            <Fade cascade>
              <div className="bg-base-100 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
                <div className="text-4xl text-accent mb-4 mx-auto flex justify-center items-center">
                  <FaCheckCircle />
                </div>
                <h3 className="text-xl font-semibold mb-2">Grade & Feedback</h3>
                <p className="text-gray-500">
                  Evaluate assignments and leave helpful feedback for your friends.
                </p>
              </div>
            </Fade>
          </Slide>

          {/* Feature 4 */}
          <Slide triggerOnce>
            <Fade cascade>
              <div className="bg-base-100 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
                <div className="text-4xl text-success mb-4 mx-auto flex justify-center items-center">
                  <FaShieldAlt />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
                <p className="text-gray-500 ">
                  Enjoy secure login with JWT protection on private routes.
                </p>
              </div>
            </Fade>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
