// Form with Validation
// Build a form (e.g., user registration) with validation.
// Validate inputs (e.g., email, password) and display appropriate error messages.


import React, { useState } from "react";
const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formData, setFormData] = useState([]);

    const [error, setError] = useState({});
    const [valid, setValid] = useState(false);

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        // First Name validation
        if (!firstName.trim()) {
            errors.firstName = "First name should not be empty";
            isValid = false;
        }

        // Last Name validation
        if (!lastName.trim()) {
            errors.lastName = "Last name should not be empty";
            isValid = false;
        }

        // Email validation
        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!email.trim()) {
            errors.email = "Email should not be empty";
            isValid = false;
        } else if (!regexEmail.test(email)) {
            errors.email = "Please enter a valid email address";
            isValid = false;
        }

        // Password validation
        if (!password.trim()) {
            errors.password = "Password should not be empty";
            isValid = false;
        } else if (password.length < 6) {
            errors.password = "Password should be at least 6 characters long";
            isValid = false;
        }

        setError(errors);
        setValid(isValid);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formIsValid = validateForm();

        if (!formIsValid) {
            return;
        }

        const data = {
            firstName,
            lastName,
            email,
            password,
        };

        setFormData([...formData, data]);

        // Clear form fields after successful submission
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign Up</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                            type="text"
                            placeholder="Enter your first name"
                        />
                        {error.firstName && <p className="text-red-500 text-sm mt-1">{error.firstName}</p>}
                    </div>

                    <div>
                        <input
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            type="text"
                            placeholder="Enter your last name"
                        />
                        {error.lastName && <p className="text-red-500 text-sm mt-1">{error.lastName}</p>}
                    </div>

                    <div>
                        <input
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            placeholder="Enter a valid email"
                        />
                        {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
                    </div>

                    <div>
                        <input
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            placeholder="Enter your password"
                        />
                        {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
                    </div>

                    <button
                        className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="mt-4">
                    {!valid && <p className="text-red-500 text-center">Please fix the errors above and try again.</p>}
                </div>
            </div>
        </div>
    );
};

export default SignUp;
