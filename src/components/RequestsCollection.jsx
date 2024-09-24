import "../styles/bootstrap.min.css";
import "../styles/HomePage.css";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners"; // Import the spinner
import buttonNames from "../utils/Constants";
import Navbar from "./NavBar";

const RequestsCollection = () => {
    const [loading, setLoading] = useState(false); // Loading state
    const navigate = useNavigate(); // Use the navigate hook

    const handleButtonClick = (name) => {
        setLoading(true); // Set loading to true before navigation
        const href = `/${name.replace(/\s+/g, '-').toLowerCase()}`;
        
        // Simulate loading time (you can replace this with actual logic if needed)
        setTimeout(() => {
            navigate(href); // Navigate to the new route
        }, 1000); // Adjust the timeout duration as necessary
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <ClipLoader color="#007bff" loading={loading} size={50} />
            </div>
        );
    }

    return (
        <>
        <Navbar/>
        
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="row">
                {buttonNames.map((name, index) => (
                    <div className="col-4" key={index}>
                        <button 
                            type="button"
                            onClick={() => handleButtonClick(name)} // Call handleButtonClick on button click
                            className="btn btn-primary btn-lg w-100 mb-3"
                        >
                            {name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default RequestsCollection;
