import React, { useState } from "react";
import "../styles/CreateReleaseGroup.css";
import Navbar from "./NavBar";

const CreateReleaseGroup = () => {
  // Use state to manage input values
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmitButtonClick = () => {
    alert("Release group created with id of: XXXXX-XXXXX-XXXXXXX-XXXXXXX");
    // Clear the input fields
    setGroupName("");
    setDescription("");
  };

  return (
    <>
      <Navbar />
      <div id="releaseGroupDiv">
        <div>
          <label className="col-form-label col-form-label-lg mt-4" htmlFor="groupName">
            Group Name
          </label>
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Group Name"
            id="groupName"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </div>
        <div>
          <label className="col-form-label col-form-label-lg mt-4" htmlFor="description">
            Description
          </label>
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          id="submitButton"
          type="button"
          className="btn btn-primary btn-lg"
          onClick={handleSubmitButtonClick}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default CreateReleaseGroup;
