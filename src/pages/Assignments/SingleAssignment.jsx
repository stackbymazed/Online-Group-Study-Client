import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Contexts/AuthContext';
import { Link } from 'react-router'; // assuming you're using react-router core

const SingleAssignment = ({ singleAssignmentData, setAssignments, assignments }) => {
  const { _id, marks, title, image, difficulty, email } = singleAssignmentData;
  const { user } = useContext(AuthContext);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6366F1", // indigo
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (user?.email === email) {
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
                });
                const remaining = assignments.filter((a) => a._id !== id);
                setAssignments(remaining);
              }
            });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "You can't delete this assignment",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div className="bg-base-100 shadow-xl rounded-2xl border-4 border-indigo-100 overflow-hidden flex flex-col justify-between min-h-[420px] transition-all hover:shadow-2xl hover:scale-[1.01] duration-300">
      <figure>
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body flex-grow flex flex-col justify-between">
        <div>
          <h2 className="card-title">{title}</h2>
          <p>🎯 <span className="font-semibold">Marks:</span> {marks}</p>
          <p>🚀 <span className="font-semibold">Difficulty:</span> {difficulty}</p>
        </div>
        <div className="card-actions justify-start mt-4">
          <button onClick={() => handleDelete(_id)} className="btn btn-error btn-sm">
            Delete
          </button>
          <Link to={`/assignments/${_id}`}>
            <button className="btn btn-warning btn-sm">Update</button>
          </Link>
          <Link to={`/assignments/view/${_id}`}>
            <button className="btn btn-primary btn-sm">View</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleAssignment;
