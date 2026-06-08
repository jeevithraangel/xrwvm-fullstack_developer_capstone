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
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Register Data:", formData);

        alert("Registration Successful!");
    };

    return (
        <div className="container mt-5">

            <h2 className="text-center">Register</h2>

            <form onSubmit={handleSubmit} className="mt-4">

                {/* USERNAME */}
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* FIRST NAME */}
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* LAST NAME */}
                <div className="form-group">
                    <label>Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* EMAIL */}
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* PASSWORD */}
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* REGISTER BUTTON */}
                <button type="submit" className="btn btn-primary btn-block mt-3">
                    Register
                </button>

            </form>

        </div>
    );
};

export default Register;