import { Suspense, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import SingleAssignment from "./SingleAssignment";

const Assignments = () => {

    const [assignments, setAssignments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/assignments")
            .then(res => res.json())
            .then(data => {
                setAssignments(data)
                setLoading(false)
            })


    }, [])
    if (loading) {
      return <div className="text-center py-10">
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-primary"></span>
        </div>
    }
    return (
        <div>
            <div className="w-full flex px-10 my-10 gap-3">
                <input type="text" placeholder="Search assignments..." className="input input-bordered w-full" />
                <button type="submit" className="btn btn-primary">Search</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-10">
                {
                    assignments.map(singleAssignmentData => <SingleAssignment
                        key={singleAssignmentData._id}
                        singleAssignmentData={singleAssignmentData}
                        assignments={assignments}
                        setAssignments={setAssignments}
                    ></SingleAssignment>)
                }
            </div>

        </div>
    );
};

export default Assignments;