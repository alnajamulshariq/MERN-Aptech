import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    pass: "",
    city: "",
  });

  const handleRequest = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerUser = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/register", user);
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-md-2"></div>
          <div className="col-md-8 mt-5">
            <h1>Register Form</h1>
            <form onSubmit={registerUser}>
              <div className="mb-3">
                <label htmlFor="exampleInputText1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                    name="name"
                    onChange={handleRequest}
                />
              </div>
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
              <div className="mb-3">
                <label htmlFor="exampleInputText1" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                    name="city"
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
  );
}

export default Register;
