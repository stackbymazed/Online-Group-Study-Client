import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import Swal from 'sweetalert2';

const PendingAssignments = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;

    const [assignments, setAssignments] = useState([]);
    const [pendingAssignments, setPendingAssignments] = useState([]);

    const [selectedAssignment, setSelectedAssignment] = useState(null);

    const [mark, setMark] = useState('');
    const [feedback, setFeedback] = useState('');

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/assignments`)
            .then(res => res.json())
            .then(data => {
                setAssignments(data)
                setLoading(false)
            });
    }, []);

    useEffect(() => {
        const filtered = assignments.filter(
            a => a.status === 'pending'
        );
        setPendingAssignments(filtered);
    }, [assignments, userEmail]);

    const handleGiveMark = (assignment) => {
        setSelectedAssignment(assignment);
        setMark('');
        setFeedback('');
        document.getElementById('my_modal_5').showModal();
    };

    const handleSubmit = () => {
        const { _id, ...rest } = selectedAssignment;
        const updatedAssignment = {
            ...rest,
            status: 'completed',
            obtainedMarks: parseInt(mark),
            feedback: feedback
        };

        if (selectedAssignment.marks >= parseInt(mark) && feedback.length > 10) {
            fetch(`${import.meta.env.VITE_API_BASE_URL}/assignments/${selectedAssignment._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedAssignment)
            })
                .then(res => res.json())
                .then(() => {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Assignment mark submitted Successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setSelectedAssignment(null);
                    document.getElementById('my_modal_5').close();


                    // Refresh the assignments
                    fetch(`${import.meta.env.VITE_API_BASE_URL}/assignments`)
                        .then(res => res.json())
                        .then(data => setAssignments(data));
                    document.getElementById('my_modal_5').close();
                });
        }
        else {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `submit the marks is less than ${selectedAssignment.marks} and  feedback minLength 10`,
                showConfirmButton: false,
                timer: 1500
            });
        }


    };


    // console.log(selectedAssignment)


    if (loading) {
        return <div className="text-center py-10">
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-primary"></span>
        </div>
    }
    return (
        <div className="p-4 lg:mb-40">
            <h2 className="text-2xl font-semibold mb-4 flex justify-center items-center">Pending Assignments</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Total Marks</th>
                            <th>Examinee</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pendingAssignments.length > 0 ? (
                            pendingAssignments.map((assignment) => (
                                <tr key={assignment._id}>
                                    <td>{assignment.title}</td>
                                    <td>{assignment.marks}</td>
                                    <td>{assignment.submittedBy}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={() => handleGiveMark(assignment)}
                                        >
                                            Give Mark
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">No pending assignments</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Mark Assignment</h3>
                    {selectedAssignment && (
                        <>
                            <p className="mt-2"><strong>Title:</strong> {selectedAssignment.title}</p>
                            <p className="mt-1">
                                <strong>Doc:</strong>{' '}
                                <a
                                    href={selectedAssignment.docLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-blue-600 underline"
                                >
                                    View Google Doc
                                </a>
                            </p>
                            <p className="mt-2"><strong>Notes:</strong></p>
                            <p className="bg-gray-100 p-2 rounded text-sm">
                                {selectedAssignment.notes}
                            </p>

                            <div className="mt-4">
                                <label className="label font-semibold">Marks</label>
                                <input
                                    type="number"
                                    required
                                    value={mark}
                                    onChange={(e) => setMark(e.target.value)}
                                    className="input input-bordered w-full"
                                    placeholder={`Out of ${selectedAssignment.marks}`}
                                />
                            </div>
                            <div className="mt-2">
                                <label className="label font-semibold">Feedback</label>
                                <textarea
                                    required
                                    value={feedback}
                                    minLength={15}
                                    onChange={(e) => setFeedback(e.target.value)}
                                    className="textarea textarea-bordered w-full"
                                    rows="3"
                                />
                            </div>
                            <div className="modal-action">
                                <form method="dialog" className="flex gap-2">
                                    <button className="btn">Cancel</button>
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        className="btn btn-success"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </>
                    )}
                </div>
            </dialog>
        </div>
    );
};

export default PendingAssignments;
