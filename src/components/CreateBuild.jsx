import "../styles/bootstrap.min.css";
import "../styles/CreateBuild.css";
import Navbar from "./NavBar";
import React, { useState } from "react";

const CreateBuild = () => {
    // Use state to manage input values
    const [artifactId, setArtifactId] = useState("");
    const [appId, setAppId] = useState("");
    const [version, setVersion] = useState("");
    const [type, setType] = useState("");
    const [path, setPath] = useState("");

    const handleSubmitButtonClick = () => {
        alert("Build Created Successfully");
        // Clear all input fields and selections
        setArtifactId("");
        setAppId("");
        setVersion("");
        setType("");
        setPath("");
    };

    return (
        <>
            <Navbar />
            <div id="buildDiv">
                <div>
                    <label className="col-form-label col-form-label-lg mt-4" htmlFor="artifactId">
                        Build Artifact Id
                    </label>
                    <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Build Artifact Id"
                        id="artifactId"
                        value={artifactId}
                        onChange={(e) => setArtifactId(e.target.value)}
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
                    <label className="col-form-label col-form-label-lg mt-4" htmlFor="type">
                        Type
                    </label>
                    <select
                        className="form-control form-control-lg"
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="">Select Type</option>
                        <option value="zip">zip</option>
                        <option value="local">local</option>
                    </select>
                </div>
                <div>
                    <label className="col-form-label col-form-label-lg mt-4" htmlFor="path">
                        Path
                    </label>
                    <select
                        className="form-control form-control-lg"
                        id="path"
                        value={path}
                        onChange={(e) => setPath(e.target.value)}
                    >
                        <option value="">Select Path</option>
                        <option value=".zip">.zip</option>
                        <option value="null">null</option>
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

export default CreateBuild;
