import { Suspense, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import SingleAssignment from "./SingleAssignment";
import axios from "axios";

const Assignments = () => {

    const [assignments, setAssignments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState('');


    // const fetchAssignments = async () => {
    //     const res = await axios.get(`http://localhost:3000/assignments?search=${searchText}`);
    //     setAssignments(res.data);
    // };

    const handleSearch = (e) => {
        e.preventDefault();
        // console.log(searchText)

    }




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
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
                <div className="px-10 mb-6 my-6 flex-1 w-full">
                    <label htmlFor="difficulty" className="mr-2 font-semibold">Filter by Difficulty:</label>
                    <select
                        id="difficulty"
                        className="select select-bordered "
                    >
                        <option value="">All</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <form onSubmit={handleSearch} className="w-full flex px-10 my-10 gap-3">
                    <input type="text" placeholder="Search assignments..." className="input input-bordered w-full" value={searchText}
                        onChange={(e) => setSearchText(e.target.value)} />
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
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