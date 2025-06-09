import { useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import SingleAssignment from "./SingleAssignment";

const Assignments = () => {

    const [assignments, setAssignments] = useState([]);

    fetch("http://localhost:3000/assignments")
        .then(res => res.json())
        .then(data => setAssignments(data))

    return (
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
    );
};

export default Assignments;