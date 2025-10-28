import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    
    const [user, setUser] = useState({
        email: "",
        pass: ""
    });

    const nav = useNavigate();

    const handleRequest = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    
    const handleLoginUser = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3000/login`, user).then((res)=>{
            console.log(res.data);
            if(res.data.role==="admin"){
                nav('/dashboard');
            }
            if(res.data.role==="user"){
                nav('/home');
            }
        })
    }
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <h1 className='text-center'>Login Form</h1>
                <form onSubmit={handleLoginUser}>
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
                        <button className='btn btn-primary w-100' type="submit">Login</button>
                </form>
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>
    </>
  )
}

export default Login