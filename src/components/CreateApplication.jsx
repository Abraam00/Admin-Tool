import React, { useState } from "react";
import "../styles/bootstrap.min.css";
import "../styles/CreateApplication.css";
import Navbar from "./NavBar";

const CreateApplication = () => {
    // Use state to manage input values
    const [appId, setAppId] = useState("");
    const [appName, setAppName] = useState("");
    const [description, setDescription] = useState("");
    const [isBetaEnabled, setIsBetaEnabled] = useState("");
    const [betaReleaseGroupId, setBetaReleaseGroupId] = useState("");
    const [betaStartDate, setBetaStartDate] = useState(""); // New field 1
    const [betaEndDate, setBetaEndDate] = useState("");     // New field 2

    const handleSubmitButtonClick = () => {
        alert("App Created Successfully");
        // Clear all input fields and selections
        setAppId("");
        setAppName("");
        setDescription("");
        setIsBetaEnabled("");
        setBetaReleaseGroupId("");
        setBetaStartDate("");
        setBetaEndDate("");
    };

    return (
        <>
            <Navbar />
            <div id="createApplicationDiv">
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
                    <label className="col-form-label col-form-label-lg mt-4" htmlFor="appName">
                        App Name
                    </label>
                    <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="App Name"
                        id="appName"
                        value={appName}
                        onChange={(e) => setAppName(e.target.value)}
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
                    <label className="col-form-label col-form-label-lg mt-4" htmlFor="isBetaEnabled">
                        Is Beta Enabled
                    </label>
                    <select
                        className="form-control form-control-lg"
                        id="isBetaEnabled"
                        value={isBetaEnabled}
                        onChange={(e) => setIsBetaEnabled(e.target.value)}
                    >
                        <option value="">Is Beta Enabled</option>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>

                {/* Conditionally render beta fields when isBetaEnabled is true */}
                {isBetaEnabled === "true" && (
                    <>
                        <div>
                            <label className="col-form-label col-form-label-lg mt-4" htmlFor="betaReleaseGroupId">
                                Beta Release Group Id
                            </label>
                            <input
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="Beta Release Group Id"
                                id="betaReleaseGroupId"
                                value={betaReleaseGroupId}
                                onChange={(e) => setBetaReleaseGroupId(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="col-form-label col-form-label-lg mt-4" htmlFor="betaStartDate">
                                Beta Start Date
                            </label>
                            <input
                                className="form-control form-control-lg"
                                type="date"
                                id="betaStartDate"
                                value={betaStartDate}
                                onChange={(e) => setBetaStartDate(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="col-form-label col-form-label-lg mt-4" htmlFor="betaEndDate">
                                Beta End Date
                            </label>
                            <input
                                className="form-control form-control-lg"
                                type="date"
                                id="betaEndDate"
                                value={betaEndDate}
                                onChange={(e) => setBetaEndDate(e.target.value)}
                            />
                        </div>
                    </>
                )}

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

export default CreateApplication;
