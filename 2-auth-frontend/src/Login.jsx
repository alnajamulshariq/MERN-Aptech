import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
    const [user, setUser] = useState({
        email: "",
        pass: ""
    });

    const handleRequest = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const nav = useNavigate();

    const loginUser = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/login", user).then((res) => {
            if(res.data){
                nav('/home');
            }
        } )
    };
  return (
    <>
        <div className="container mt-5">
            <div className="row mt-5">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h1 className='text-center'>Login Form</h1>
                    <form onSubmit={loginUser}>
                        <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                    name="email"
                    onChange={handleRequest}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                    name="pass"
                    onChange={handleRequest}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
                    </form>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    </>
  )
}

export default Login