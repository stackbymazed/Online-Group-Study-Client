import { useEffect, useState } from "react";
import SingleAssignment from "./SingleAssignment";
import axios from "axios";

const Assignments = () => {
    const [assignments, setAssignments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState('');
    const [difficulty, setDifficulty] = useState('');

    const fetchAssignments = async (search = '', level = '') => {
        setLoading(true);
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/assignments`, {
                params: {
                    search: search,
                    difficulty: level
                }
            });
            setAssignments(res.data);
        } catch (error) {
            console.error('Error fetching assignments:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchAssignments(searchText, difficulty);
    };

    const handleDifficultyChange = (e) => {
        const selectedLevel = e.target.value;
        setDifficulty(selectedLevel);
        fetchAssignments(searchText, selectedLevel);
    };

    useEffect(() => {
        fetchAssignments();
    }, []);

    if (loading) {
        return (
            <div className="text-center py-10">
                <span className="loading loading-spinner text-primary"></span>
            </div>
        );
    }

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
                <div className="px-10 mb-6 my-6 flex-1 w-full">
                    <label htmlFor="difficulty" className="mr-2 font-semibold">Filter by Difficulty:</label>
                    <select
                        id="difficulty"
                        className="select select-bordered"
                        value={difficulty}
                        onChange={handleDifficultyChange}
                    >
                        <option value="">All</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>

                <form onSubmit={handleSearch} className="w-full flex px-10 my-10 gap-3">
                    <input
                        type="text"
                        placeholder="Search assignments..."
                        className="input input-bordered w-full"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-10">
                {
                    assignments.map(singleAssignmentData => (
                        <SingleAssignment
                            key={singleAssignmentData._id}
                            singleAssignmentData={singleAssignmentData}
                            assignments={assignments}
                            setAssignments={setAssignments}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Assignments;
