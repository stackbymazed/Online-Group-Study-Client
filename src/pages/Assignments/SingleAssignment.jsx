import React from 'react';
import Swal from 'sweetalert2';

const SingleAssignment = ({ singleAssignmentData ,setAssignments ,assignments }) => {

    const { _id, marks, title, thumbnail, difficulty } = singleAssignmentData

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/assignments/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data.deletedCount)
                        if (data.deletedCount) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your work has been saved",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            const remainingAssignments = assignments.filter(singleAssignment => singleAssignment._id !== _id);
                            setAssignments(remainingAssignments)
                        }
                    })
            }
        });

    }

    return (
        <div className="card p-4 border rounded shadow">
            <img src={thumbnail} alt={title} className="h-40 w-full object-cover rounded" />
            <h2 className="text-xl font-bold mt-2">{title}</h2>
            <p>Marks: {marks}</p>
            <p>Level: {difficulty}</p>
            <div className="flex gap-2 mt-3">
                <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-2 py-1 rounded"                         >
                    Delete
                </button>
                <button className="bg-blue-500 text-white px-2 py-1 rounded">Update</button>
                <button className="bg-green-500 text-white px-2 py-1 rounded">View</button>
            </div>
        </div>
    );
};

export default SingleAssignment;


