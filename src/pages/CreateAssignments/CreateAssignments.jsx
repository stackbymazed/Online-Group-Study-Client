import axios from "axios";
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/AuthContext";

const CreateAssignments = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    data.email = user.email;
    data.status = "pending";
    data.submittedBy = user.email;
    data.date = startDate;

    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/assignments`, data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Assignment created successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          setStartDate(new Date());
        }
      })
      .catch((error) => {
        console.error("Error creating assignment:", error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200 flex items-center justify-center px-4 py-8">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-5xl p-10">
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-8">
          Create Assignment
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Assignment Title
            </label>
            <input
              type="text"
              name="title"
              required
              placeholder="Enter title"
              className="w-full h-12 rounded-xl border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Thumbnail Image URL
            </label>
            <input
              type="url"
              name="image"
              required
              placeholder="https://example.com/image.jpg"
              className="w-full h-12 rounded-xl border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Deadline Date</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy-MM-dd"
              className="lg:w-4xl h-12 rounded-xl border border-gray-300 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Marks</label>
            <input
              type="number"
              name="marks"
              required
              placeholder="e.g. 100"
              className="w-full h-12 rounded-xl border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Difficulty</label>
            <select
              name="difficulty"
              required
              className="w-full h-12 rounded-xl border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              defaultValue=""
            >
              <option disabled value="">
                Choose difficulty
              </option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <div className="lg:col-span-1 md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">
              Assignment Description
            </label>
            <textarea
              name="description"
              required
              minLength={30}
              placeholder="Describe the assignment clearly (min 30 characters)..."
              className="w-full h-32 rounded-xl border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>

          <div className="lg:col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold h-12 rounded-xl transition duration-300"
            >
              🚀 Add Assignment
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default CreateAssignments;
