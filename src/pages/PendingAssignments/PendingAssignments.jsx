import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';

const PendingAssignments = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;

    const [assignments, setAssignments] = useState([]);
    const [pendingAssignments, setPendingAssignments] = useState([]);

    const [selectedAssignment, setSelectedAssignment] = useState(null);
    const [mark, setMark] = useState('');
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/assignments')
            .then(res => res.json())
            .then(data => setAssignments(data));
    }, []);

    useEffect(() => {
        const filtered = assignments.filter(
            a => a.status === 'pending' && a.submittedBy !== userEmail
        );
        setPendingAssignments(filtered);
    }, [assignments, userEmail]);

    const handleGiveMark = (assignment) => {
        setSelectedAssignment(assignment);
    };

    const handleSubmit = () => {
        const updatedAssignment = {
            ...selectedAssignment,
            status: 'completed',
            obtainedMarks: parseInt(mark),
            feedback: feedback
        };

        fetch(`http://localhost:3000/assignments/${selectedAssignment._id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedAssignment)
        })
            .then(res => res.json())
            .then(data => {
                alert('Marked successfully!');
                setSelectedAssignment(null);
                setMark('');
                setFeedback('');
                // Refresh assignments
                fetch('http://localhost:3000/assignments')
                    .then(res => res.json())
                    .then(data => setAssignments(data));
            });
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Pending Assignments</h2>

            <div className="overflow-x-auto">
                <table className="table-auto w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2 border">Title</th>
                            <th className="p-2 border">Total Marks</th>
                            <th className="p-2 border">Examinee</th>
                            <th className="p-2 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pendingAssignments.length > 0 ? (
                            pendingAssignments.map((assignment) => (
                                <tr key={assignment._id}>
                                    <td className="p-2 border">{assignment.title}</td>
                                    <td className="p-2 border">{assignment.marks}</td>
                                    <td className="p-2 border">{assignment.email}</td>
                                    <td className="p-2 border">
                                        <button
                                            onClick={() => handleGiveMark(assignment)}
                                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                                        >
                                            Give Mark
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center p-4 text-gray-500">
                                    No pending assignments to evaluate.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {selectedAssignment && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Mark Assignment</h3>
                        <p><strong>Title:</strong> {selectedAssignment.title}</p>
                        <p>
                            <strong>Document:</strong>{" "}
                            <a
                                href={selectedAssignment.docLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                View Google Doc
                            </a>
                        </p>
                        <p className="mt-2"><strong>Notes:</strong></p>
                        <p className="bg-gray-100 p-2 rounded text-sm">{selectedAssignment.notes}</p>

                        <div className="mt-4">
                            <label className="block mb-1 font-medium">Marks</label>
                            <input
                                type="number"
                                value={mark}
                                onChange={(e) => setMark(e.target.value)}
                                className="w-full border p-2 rounded"
                                placeholder={`Out of ${selectedAssignment.marks}`}
                            />
                        </div>
                        <div className="mt-2">
                            <label className="block mb-1 font-medium">Feedback</label>
                            <textarea
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                className="w-full border p-2 rounded"
                                rows="3"
                            />
                        </div>

                        <div className="flex justify-end mt-4 gap-2">
                            <button
                                onClick={() => setSelectedAssignment(null)}
                                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PendingAssignments;
