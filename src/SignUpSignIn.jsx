import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPaypal, FaGooglePay, FaCreditCard } from "react-icons/fa";
import "./common.css"; // Make sure to include your CSS file

const SignUpSignIn = () => {
    const [formState, setFormState] = useState("signup"); // Manage form states ('signup' or 'signin')
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        username: "",
        firstName: "",
        lastName: "",
        paymentMethod: "paypal", // Default payment method
    });
    const [signInData, setSignInData] = useState({
        email: "",
        password: "",
    });
    const [signInMessage, setSignInMessage] = useState("");
    const navigate = useNavigate();

    // Handle input changes for Sign-Up form
    const handleSignUpChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    // Handle input changes for Sign-In form
    const handleSignInChange = (e) => {
        const { name, value } = e.target;
        setSignInData({
            ...signInData,
            [name]: value,
        });
    };

    // Handle Sign-Up form submission
    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        setFormState("signin"); // Switch to Sign-In form after Sign-Up
        // Reset signInData to ensure fields are empty
        setSignInData({
            email: "",
            password: "",
        });
    };

    // Handle Sign-In form submission
    const handleSignInSubmit = (e) => {
        e.preventDefault();

        // Check if entered email and password match the ones entered during Sign-Up
        if (signInData.email === userData.email && signInData.password === userData.password) {
            setSignInMessage("Sign In Successful!");
            navigate('/homepage');
        } else {
            setSignInMessage("Email or password is incorrect.");
        }
    };

    return (
        <div className="form-container">
            {formState === "signup" ? (
                // Sign-Up Form
                <div>
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSignUpSubmit}>
                        <div className="input-container">
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Enter your First Name"
                                value={userData.firstName}
                                onChange={handleSignUpChange}
                                required
                            />
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Enter your Last Name"
                                value={userData.lastName}
                                onChange={handleSignUpChange}
                                required
                            />
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Enter your username"
                                value={userData.username}
                                onChange={handleSignUpChange}
                                required
                            />
                        </div>
                        <div className="input-container">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={userData.email}
                                onChange={handleSignUpChange}
                                required
                            />
                        </div>
                        <div className="input-container">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={userData.password}
                                onChange={handleSignUpChange}
                                required
                            />
                        </div>
                        <div className="input-container row">
                            <label>Payment Method</label>
                            <div className="payment-methods">
                                <div className="payment-option col-auto">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="paypal"
                                        checked={userData.paymentMethod === "paypal"}
                                        onChange={handleSignUpChange}
                                        required
                                    />
                                    <FaPaypal size={24} />
                                    PayPal
                                </div>
                                <div className="payment-option col-auto">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="googlepay"
                                        checked={userData.paymentMethod === "googlepay"}
                                        onChange={handleSignUpChange}
                                        required
                                    />
                                    <FaGooglePay size={24} className="pe-2" />
                                    Google Pay
                                </div>
                                <div className="payment-option col-auto">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="creditcard"
                                        checked={userData.paymentMethod === "creditcard"}
                                        onChange={handleSignUpChange}
                                        required
                                    />
                                    <FaCreditCard size={24} className="pe-2" />
                                    Credit Card
                                </div>
                            </div>
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            ) : formState === "signin" ? (
                // Sign-In Form
                <div>
                    <h2>Sign In</h2>
                    <form onSubmit={handleSignInSubmit}>
                        <div className="input-container">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={signInData.email}
                                onChange={handleSignInChange}
                                required
                            />
                        </div>
                        <div className="input-container">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={signInData.password}
                                onChange={handleSignInChange}
                                required
                            />
                        </div>
                        <button type="submit">Sign In</button>
                    </form>
                </div>
            ) : null}

            {signInMessage && <div className="sign-in-message">{signInMessage}</div>}
        </div>
    );
};

export default SignUpSignIn;
