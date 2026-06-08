import React, { useState } from "react";

const Register = () => {

    const [formData, setFormData] = useState({
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Register Data:", formData);
    };

    return (
        <div className="container mt-5">

            <h2>User Registration</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="userName"
                    placeholder="Username"
                    className="form-control mb-2"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="form-control mb-2"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="form-control mb-2"
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control mb-2"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control mb-2"
                    onChange={handleChange}
                />

                <button type="submit" className="btn btn-primary">
                    Register
                </button>

            </form>

        </div>
    );
};

export default Register;