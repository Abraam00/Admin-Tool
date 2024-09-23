import "../styles/bootstrap.min.css";
import "../styles/CreateRelease.css";
import React, { useState } from "react";

const CreateRelease = () => {
    const [showReleaseGroupFields, setShowReleaseGroupFields] = useState(false); // State to track visibility

    const handleSubmitButtonClick = () => {
        alert("Build Created Successfully");
    };

    const addReleaseGroup = () => {
        setShowReleaseGroupFields(true); // Show input fields when button is clicked
    };

    return (
        <div id="buildDiv">
            <div>
                <label className="col-form-label col-form-label-lg mt-4" htmlFor="buildId">
                    Build Id
                </label>
                <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Build Id"
                    id="buildId"
                />
            </div>
            <div>
                <label className="col-form-label col-form-label-lg mt-4" htmlFor="appId">
                    App Id
                </label>
                <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="App Id"
                    id="appId"
                />
            </div>
            <div>
                <label className="col-form-label col-form-label-lg mt-4" htmlFor="version">
                    Version
                </label>
                <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Version"
                    id="version"
                />
            </div>
            <div>
                <label className="col-form-label col-form-label-lg mt-4" htmlFor="CHG">
                    CHG
                </label>
                <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="CHG"
                    id="CHG"
                />
            </div>
            <div>
                <button id="addReleaseGroup" type="button" className="btn btn-primary btn-lg" onClick={addReleaseGroup}>
                    Add Release Group
                </button>
            </div>

            {/* Conditionally render the release group input fields */}
            {showReleaseGroupFields && (
                <div className="mt-4">
                    <div>
                        <label className="col-form-label col-form-label-lg" htmlFor="releaseGroupId">
                            Release Group ID 
                        </label>
                        <input
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="Release Group ID"
                            id="releaseGroupId"
                        />
                    </div>
                    <div>
                        <label className="col-form-label col-form-label-lg" htmlFor="releaseGroupName">
                            Release Group Name
                        </label>
                        <input
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="Release Group Name"
                            id="releaseGroupName"
                        />
                    </div>
                </div>
            )}

            <button id="submitButton" type="button" className="btn btn-primary btn-lg" onClick={handleSubmitButtonClick}>
                Submit
            </button>
        </div>
    );
};

export default CreateRelease;
