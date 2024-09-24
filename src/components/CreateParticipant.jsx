import React, { useState } from "react";
import "../styles/CreateParticipant.css";
import Navbar from "./NavBar";

const CreateReleaseGroup = () => {
  // Use state to manage input values
  const [participantName, setParticipantName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [releaseGroupId, setReleaseGroupId] = useState("")

  const handleSubmitButtonClick = () => {
    alert("Participant created with id of: XXXXX-XXXXX-XXXXXXX-XXXXXXX");
    // Clear the input fields
    setParticipantName("");
    setDescription("");
    setType("");
    setReleaseGroupId("");
  };

  return (
    <>
      <Navbar />
      <div id="participantDiv">
        <div>
          <label className="col-form-label col-form-label-lg mt-4" htmlFor="participantName">
            Participant Name
          </label>
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Participant Name"
            id="participantName"
            value={participantName}
            onChange={(e) => setParticipantName(e.target.value)}
          />
        </div>
        <div>
          <label className="col-form-label col-form-label-lg mt-4" htmlFor="releaseGroupId">
            Release Group Id
          </label>
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Release Group Id"
            id="releaseGroupId"
            value={releaseGroupId}
            onChange={(e) => setReleaseGroupId(e.target.value)}
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
        <div>
            <label className="col-form-label col-form-label-lg mt-4" htmlFor="Type">
                Type
            </label>
            <select
                className="form-control form-control-lg"
                id="path"
                value={type}
                onChange={(e) => setType(e.target.value)}
            >
                <option value="">Select Type</option>
                <option value=".zip">AD Group</option>
                <option value="null">Other</option>
            </select>
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
