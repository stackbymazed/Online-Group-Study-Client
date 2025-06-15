import axios from 'axios';
import React, { use, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { useLoaderData, useNavigate } from 'react-router';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';

const UpdateAssignment = () => {
    const singleAssignmentData = useLoaderData()
    // console.log(singleAssignmentData);


    const navigate = useNavigate()
    const { user } = use(AuthContext)
    const { _id, marks, title, date, thumbnail, image, description, difficulty, email } = singleAssignmentData

    const [startDate, setStartDate] = useState(new Date());
    const handleSubmit = (e) => {
        e.preventDefault()
        const from = e.target;
        const formData = new FormData(from);
        const newFromData = Object.fromEntries(formData.entries())
        newFromData.email = user.email
        // console.log(newFromData);




        if (user.email == email) {
            fetch(`http://localhost:3000/assignments/${_id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newFromData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {

                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your Post Update Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });

                        navigate("/assignments")
                    }
                })
        }
        else {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "You are not assignment owner! Can't update this assignment!",
                showConfirmButton: false,
                timer: 1500
            });
        }

    }
    return (
        <div>
            <h1 className='text-3xl font-bold justify-center flex my-10'>Update an Assignment</h1>
            <form className='grid grid-cols-1  mb-10 lg:px-20' onSubmit={handleSubmit}>
                <fieldset className="fieldset bg-base-200 p-4 mx-auto w-full">
                    <label className="label">Title</label>
                    <input type="text" name='title' required defaultValue={title} className="input w-full h-10" placeholder="Title" />
                </fieldset>
                <fieldset className="fieldset bg-base-200 p-4 mx-auto w-full">
                    <label className="label">Thumbnail Image URL</label>
                    <input type="url" name='image' required defaultValue={image} className="input  w-full h-10" placeholder="Thumbnail Image URL" />
                </fieldset>
                <fieldset className="fieldset bg-base-200 p-4 mx-auto w-full">
                    <label className="label">Date</label>
                    <DatePicker name='date' defaultValue={date} className="border w-full px-2 h-10  bg-white border-gray-400 rounded-sm" selected={startDate} onChange={(date) => setStartDate(date)} />
                </fieldset>
                <fieldset className="fieldset bg-base-200 p-4 mx-auto w-full">
                    <label className="label">Marks</label>
                    <input type="number" name='marks' required defaultValue={marks} className="input  w-full" placeholder="Marks" />
                </fieldset>

                <fieldset className="fieldset bg-base-200 p-4 mx-auto w-full flex-1">
                    <select defaultValue="Pick a color" name="difficulty" className="select w-full">
                        <option className="h-30 border-gray-400 w-full" defaultValue={difficulty} disabled={true}>Pick a assignment difficulty</option>
                        <option >Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>
                </fieldset>
                <fieldset className="fieldset bg-base-200 p-4 mx-auto w-full flex-1">
                    <label className="label">Description</label>
                    <textarea name='description' required minLength="30" defaultValue={description} className="textarea h-10 w-full" placeholder="Description"></textarea>
                </fieldset>
                <input type="submit" className="btn btn-primary" value="Update Assignment" />
            </form>
        </div>
    );
};

export default UpdateAssignment; 