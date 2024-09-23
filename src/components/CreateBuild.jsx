import "../styles/bootstrap.min.css";
import "../styles/CreateBuild.css";
import React from "react";

const CreateBuild = () => {
    const handleSubmitButtonClick = () =>{
        alert("Build Created Successfully")
    }
    return (
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
                <label className="col-form-label col-form-label-lg mt-4" htmlFor="type">
                    Type
                </label>
                <select className="form-control form-control-lg" id="type">
                    <option value="">Select Type</option>
                    <option value="zip">zip</option>
                    <option value="local">local</option>
                </select>
            </div>
            <div>
                <label className="col-form-label col-form-label-lg mt-4" htmlFor="path">
                    Path
                </label>
                <select className="form-control form-control-lg" id="path">
                    <option value="">Select Path</option>
                    <option value=".zip">.zip</option>
                    <option value="null">null</option>
                </select>
            </div>
            <button id="submitButton" type="button" class="btn btn-primary btn-lg" onClick={handleSubmitButtonClick}>Submit</button>
        </div>
    );
};

export default CreateBuild;
