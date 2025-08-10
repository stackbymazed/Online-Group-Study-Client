import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/AuthContext";
import { Link } from "react-router";

const SingleAssignment = ({
  singleAssignmentData,
  setAssignments,
  assignments,
}) => {
  const { _id, marks, title, image, difficulty, email } = singleAssignmentData;
  const { user } = useContext(AuthContext);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4f46e5", // indigo-600
      cancelButtonColor: "#ef4444", // red-500
      confirmButtonText: "Yes, delete it!",
      customClass: {
        popup: "rounded-2xl",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        if (user?.email === email) {
          setDeleting(true);
          fetch(`${import.meta.env.VITE_API_BASE_URL}/assignments/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Assignment deleted successfully",
                  showConfirmButton: false,
                  timer: 1500,
                  customClass: { popup: "rounded-xl" },
                });
                const remaining = assignments.filter((a) => a._id !== id);
                setAssignments(remaining);
              }
            })
            .catch(() =>
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                customClass: { popup: "rounded-xl" },
              })
            )
            .finally(() => setDeleting(false));
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "You can't delete this assignment",
            showConfirmButton: false,
            timer: 1500,
            customClass: { popup: "rounded-xl" },
          });
        }
      }
    });
  };

  // Difficulty color logic
  const difficultyColors = {
    Easy: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Hard: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-indigo-200 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 overflow-hidden flex flex-col justify-between min-h-[420px]">
      <figure className="h-48 overflow-hidden rounded-t-3xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </figure>

      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-2xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-3">
          {title}
        </h2>

        <div className="flex flex-wrap gap-3 mb-4">
          <p className="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300 font-medium">
            🎯 Marks: <span className="font-semibold">{marks}</span>
          </p>
          <p
            className={`inline-block px-3 py-1 rounded-full font-semibold ${
              difficultyColors[difficulty] || "bg-gray-200 text-gray-700"
            }`}
          >
            🚀 {difficulty}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-3">
          <button
            onClick={() => handleDelete(_id)}
            disabled={deleting}
            className={`btn btn-error btn-sm px-5 py-2 rounded-xl font-semibold text-white transition-all duration-300 ${
              deleting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-red-600 bg-red-500"
            }`}
            aria-label={`Delete assignment ${title}`}
          >
            {deleting ? "Deleting..." : "Delete"}
          </button>

          <Link to={`/assignments/${_id}`}>
            <button
              className="btn btn-warning btn-sm px-5 py-2 rounded-xl font-semibold text-white hover:bg-yellow-600 bg-yellow-500 transition duration-300"
              aria-label={`Update assignment ${title}`}
            >
              Update
            </button>
          </Link>

          <Link to={`/assignments/view/${_id}`}>
            <button
              className="btn btn-primary btn-sm px-5 py-2 rounded-xl font-semibold text-white hover:bg-indigo-700 bg-indigo-600 transition duration-300"
              aria-label={`View assignment ${title}`}
            >
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleAssignment;
