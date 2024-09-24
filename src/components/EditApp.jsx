import React, { useState, useEffect } from "react";
import "../styles/EditApp.css";
import Navbar from "./NavBar";
import { getAppNames } from "../utils/Constants"; // Assuming getAppNames is a function that returns app names

const EditApp = () => {
    const [appNames, setAppNames] = useState([]); // State to store the app names
    const [selectedApp, setSelectedApp] = useState(""); // State to store the selected app

    // Fetch app names when component mounts
    useEffect(() => {
        const fetchAppNames = async () => {
            const names = await getAppNames(); // Assuming getAppNames returns a promise or an array
            setAppNames(names);
        };
        fetchAppNames();
    }, []);

    return (
        <>
            <Navbar />
            <div id="editAppDiv">
                <div>
                    <label className="col-form-label col-form-label-lg mt-4" htmlFor="appNames">
                        App Names
                    </label>
                    <select
                        className="form-control form-control-lg"
                        id="appNames"
                        value={selectedApp}
                        onChange={(e) => setSelectedApp(e.target.value)}
                    >
                        <option value="">Select App</option>
                        {appNames.map((appName, index) => (
                            <option key={index} value={appName}>
                                {appName}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    );
};

export default EditApp;
