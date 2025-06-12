import React, { useState } from "react";
import { useLoaderData } from "react-router";

const ViewAssignment = () => {

  const data = useLoaderData();
  const { _id,title,image,date,marks,difficulty,description,email} = data || {};


  const [showModal, setShowModal] = useState(false);
  const [docLink, setDocLink] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissionData = {assignmentId: _id,docLink,note,status: "pending",submittedBy: email};
    console.log("Submitted Data:", submissionData);
    setShowModal(false);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 lg:p-4 px-14">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={
              image || "https://i.ibb.co/PG8ZnnQy/images-13.jpg"
            }
            alt={title}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{title}</h2>
          <p className="text-gray-600">{description}</p>
          <div className="flex flex-wrap gap-2 text-sm mt-2">
            <span className="badge badge-info">Difficulty: {difficulty}</span>
            <span className="badge badge-success">Marks: {marks}</span>
            <span className="badge badge-warning">Due: {date}</span>
          </div>
          <div className="card-actions justify-end mt-4">
            <button
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
              Take Assignment
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <>
          <input type="checkbox" id="take-assignment-modal" className="modal-toggle" checked readOnly />
          <div className="modal modal-open px-14 lg:px-0">
            <div className="modal-box">
              <h3 className="font-bold text-lg mb-4">Submit Assignment</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="url"
                  placeholder="Google Docs Link"
                  className="input input-bordered w-full"
                  value={docLink}
                  onChange={(e) => setDocLink(e.target.value)}
                  required
                />
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Quick Note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                ></textarea>
                <div className="modal-action">
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ViewAssignment;
