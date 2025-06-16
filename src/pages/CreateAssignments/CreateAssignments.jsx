import axios from "axios";
import React, { use, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/AuthContext";

const CreateAssignments = () => {
    const {user} = use(AuthContext)
    const [startDate, setStartDate] = useState(new Date())

    const handleSubmit = (e) => {
        e.preventDefault();
        const from = e.target;
        const formData = new FormData(from);
        const newFromData = Object.fromEntries(formData.entries())
        newFromData.email = user.email
        newFromData.status = 'pending'
        newFromData.submittedBy = user.email
        // console.log(newFromData);

        axios.post(`${import.meta.env.VITE_API_BASE_URL}/assignments`, newFromData)
            .then(res => {
                // console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Assignment Create Successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    from.reset()
                }
            })
            .catch(error => {
                // console.log(error);
            })

    }
    return (
        <div>
            <h1 className='text-3xl font-bold justify-center flex my-10'>Create an Assignment</h1>
            <form className='grid grid-cols-1  mb-10 lg:px-20' onSubmit={handleSubmit}>
                <fieldset className="fieldset bg-base-200 p-4 mx-auto w-full">
                    <label className="label">Title</label>
                    <input type="text" name='title' required className="input w-full h-10" placeholder="Title" />
                </fieldset>
                <fieldset className="fieldset bg-base-200 p-4 mx-auto w-full">
                    <label className="label">Thumbnail Image URL</label>
                    <input type="url" name='image' required className="input  w-full h-10" placeholder="Thumbnail Image URL" />
                </fieldset>
                <fieldset className="fieldset bg-base-200 p-4 mx-auto w-full">
                    <label className="label"> Date </label>
                    <DatePicker name='date' className="border w-full h-10  bg-white border-gray-400 rounded-sm dark:text-white dark:bg-gray-900" selected={startDate} onChange={(date) => setStartDate(date)} />
                </fieldset>
                <fieldset className="fieldset bg-base-200 p-4 mx-auto w-full">
                    <label className="label">Marks</label>
                    <input type="number" required name='marks' className="input  w-full" placeholder="Marks" />
                </fieldset>

                <fieldset className="fieldset bg-base-200 p-4 mx-auto w-full flex-1">
                    <select defaultValue="Pick a color" name="difficulty" className="select w-full">
                        <option className="h-30 border-gray-400 w-full" disabled={true}>Pick a assignment difficulty</option>
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>
                </fieldset>
                <fieldset className="fieldset bg-base-200 p-4 mx-auto w-full flex-1">
                    <label className="label">Description</label>
                    <textarea name='description' required minLength="30" className="textarea h-10 w-full" placeholder="Description"></textarea>
                </fieldset>
                <input type="submit" className="btn btn-primary" value="Add Assignment" />
            </form>
        </div>
    );
};

export default CreateAssignments;