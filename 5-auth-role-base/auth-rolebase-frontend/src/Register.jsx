import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        pass: "",
        role: ""
    });

    const nav = useNavigate();

    const handleRequest = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleRegisterUser = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3000/register`, user)
            .then(() => {
                console.log("User registered successfully");
                // Reset form fields
                setUser({
                    name: "",
                    email: "",
                    pass: "",
                    role: ""
                });
                nav('/login');
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h1 className='text-center mb-4'>Register Form</h1>
                    <form onSubmit={handleRegisterUser}>
                        <input
                            className='form-control mb-2'
                            type="text"
                            name="name"
                            placeholder='Enter Your Name'
                            onChange={handleRequest}
                            value={user.name}
                        />
                        <input
                            className='form-control mb-2'
                            type="email"
                            name="email"
                            placeholder='Enter Your Email'
                            onChange={handleRequest}
                            value={user.email}
                        />
                        <input
                            className='form-control mb-2'
                            type="password"
                            name="pass"
                            placeholder='Enter Your Password'
                            onChange={handleRequest}
                            value={user.pass}
                        />
                        <select
                            className='form-control mb-2'
                            name="role"
                            onChange={handleRequest}
                            value={user.role}
                        >
                            <option hidden value="">Select Role</option>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                        <button className='btn btn-primary w-100' type="submit">Register</button>
                    </form>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
}

export default Register;