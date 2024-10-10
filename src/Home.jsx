import React, { useState } from "react";
import "./Homepage.css";

const Home = () => {
    const [inputText, setInputText] = useState("");

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    return (
        <div className="homepage-container">
            <h2>3D Text Generator</h2>
            <input
                type="text"
                placeholder="Enter text"
                value={inputText}
                onChange={handleInputChange}
            />
            <div className="three-d-text">{inputText || "Your 3D text will appear here"}</div>
        </div>
    );
};

export default Home;
