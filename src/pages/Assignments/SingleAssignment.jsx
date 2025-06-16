import React, { use, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Contexts/AuthContext';
import { Link } from 'react-router';

const SingleAssignment = ({ singleAssignmentData, setAssignments, assignments }) => {

    const { _id, marks, title, image, difficulty, email } = singleAssignmentData
    const { user } = use(AuthContext)

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            // console.log(result.isConfirmed)
            if (result.isConfirmed) {
                if (user?.email == email) {
                    fetch(`${import.meta.env.VITE_API_BASE_URL}/assignments/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data.deletedCount)
                            if (data.deletedCount) {
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Your work has been saved",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                const remainingAssignments = assignments.filter(singleAssignment => singleAssignment._id !== id);
                                setAssignments(remainingAssignments)
                            }
                        })
                }
                else {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "You can't delete this assignment",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    return
                }

            }

        });
    }




    return (
        <div className="card p-4 border rounded shadow">
            <img src={image} alt={title} className="h-40 w-full object-cover rounded" />
            <h2 className="text-xl font-bold mt-2">{title}</h2>
            <p>Marks: {marks}</p>
            <p>Level: {difficulty}</p>
            <div className="flex gap-2 mt-3">
                <button
                    onClick={() => handleDelete(_id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                >
                    Delete
                </button>
                <Link to={`/assignments/${_id}`} ><button className="bg-green-500 text-white px-2 py-1 rounded">Update</button></Link>
                <Link to={`/assignments/view/${_id}`}><button className="bg-green-500 text-white px-2 py-1 rounded">View</button></Link>
            </div>
        </div>
    );
};

export default SingleAssignment;


