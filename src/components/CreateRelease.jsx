import "../styles/bootstrap.min.css";
import "../styles/CreateRelease.css";
import Navbar from "./NavBar";
import React, { useState } from "react";

const CreateRelease = () => {
    // Use state to manage input values
    const [buildId, setBuildId] = useState("");
    const [appId, setAppId] = useState("");
    const [version, setVersion] = useState("");
    const [chg, setChg] = useState("");
    const [releaseGroupId, setReleaseGroupId] = useState("");
    const [releaseGroupName, setReleaseGroupName] = useState("");
    const [showReleaseGroupFields, setShowReleaseGroupFields] = useState(false);

    const handleSubmitButtonClick = () => {
        alert("Build Created Successfully");
        // Clear all fields after submission
        setBuildId("");
        setAppId("");
        setVersion("");
        setChg("");
        setReleaseGroupId("");
        setReleaseGroupName("");
        setShowReleaseGroupFields(false); // Optionally hide the release group fields
    };

    const addReleaseGroup = () => {
        setShowReleaseGroupFields(true); // Show input fields when button is clicked
    };

    return (
        <>
            <Navbar />
            <div id="releaseDiv">
                <div>
                    <label className="col-form-label col-form-label-lg mt-4" htmlFor="buildId">
                        Build Id
                    </label>
                    <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Build Id"
                        id="buildId"
                        value={buildId}
                        onChange={(e) => setBuildId(e.target.value)}
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
                        value={appId}
                        onChange={(e) => setAppId(e.target.value)}
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
                        value={version}
                        onChange={(e) => setVersion(e.target.value)}
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
                        value={chg}
                        onChange={(e) => setChg(e.target.value)}
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
                                value={releaseGroupId}
                                onChange={(e) => setReleaseGroupId(e.target.value)}
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
                                value={releaseGroupName}
                                onChange={(e) => setReleaseGroupName(e.target.value)}
                            />
                        </div>
                    </div>
                )}

                <button id="submitButton" type="button" className="btn btn-primary btn-lg" onClick={handleSubmitButtonClick}>
                    Submit
                </button>
            </div>
        </>
    );
};

export default CreateRelease;
