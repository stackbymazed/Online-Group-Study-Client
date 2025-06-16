import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';

const MyAttemptedAssignments = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const [assignments, setAssignments] = useState([]);
    const [myAssignments, setMyAssignments] = useState([]);

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
        const filtered = assignments.filter(a => a.email === userEmail);
        setMyAssignments(filtered);
    }, [assignments, userEmail]);


    if (loading) {
        return <div className="text-center py-10">
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-primary"></span>
        </div>
    }
    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4 flex justify-center items-center">My Submitted Assignments</h2>

            {myAssignments.length === 0 ? (
                <p>No submitted assignments found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border p-2">Title</th>
                                <th className="border p-2">Status</th>
                                <th className="border p-2">Total Marks</th>
                                <th className="border p-2">Obtained Marks</th>
                                <th className="border p-2">Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myAssignments.map((assignment) => (
                                <tr key={assignment._id}>
                                    <td className="border p-2">{assignment.title}</td>
                                    <td className="border p-2 capitalize">{assignment.status ?? 'stutus nai mama'}</td>
                                    <td className="border p-2">{assignment.marks}</td>
                                    <td className="border p-2">
                                        {assignment.obtainedMarks ?? 'Not graded yet'}
                                    </td>
                                    <td className="border p-2">
                                        {assignment.feedback || 'No feedback yet'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyAttemptedAssignments;
