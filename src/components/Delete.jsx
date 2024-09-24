import React, { useState } from "react";
import "../styles/bootstrap.min.css";
import "../styles/Delete.css";

const Delete = ({ fieldName }) => {
    // State to manage input field values
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");

    const handleSubmitButtonClick = () => {
        alert("deleted successfully")
        // Clear all input fields
        setInput1("");
        setInput2("");
    };

    return (
        <>
            <div id="deleteDiv">
                <div>
                    <label className="col-form-label col-form-label-lg mt-4" htmlFor="input1">
                        {fieldName}
                    </label>
                    <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder={fieldName}
                        id="input1"
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}
                    />
                </div>
                <div>
                    <label className="col-form-label col-form-label-lg mt-4" htmlFor="input2">
                        CHG
                    </label>
                    <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="CHG"
                        id="input2"
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)}
                    />
                </div>
                <button
                    id="submitButton"
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={handleSubmitButtonClick}
                >
                    Delete
                </button>
            </div>
        </>
    );
};

export default Delete;
