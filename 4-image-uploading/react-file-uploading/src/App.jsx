import 'bootstrap//dist/css/bootstrap.min.css'
import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
      name: "",
      email: "",
      age: "",
      image: ""
    });

    const handleImage = (e) => {
      setUser({...user, image: e.target.files[0]});
    }

    const addUser = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3000/upload', user, {
        headers: {'Content-Type': 'multipart/form-data'}
      })
    }
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1 className='text-center'>Image Uploading In React</h1>
            <form onSubmit={addUser}>
              <input type="text" name="name" placeholder='Enter Your Name' className='form-control mb-2' onChange={(e)=> setUser({...user, name:e.target.value})} />
              <input type="email" name="email" placeholder='Enter Your Email' className='form-control mb-2' onChange={(e)=> setUser({...user, email:e.target.value})} />
              <input type="number" name="age" placeholder='Enter Your Age' className='form-control mb-2' onChange={(e)=> setUser({...user, age:e.target.value})} />
              <input type="file" name="image" className='form-control mb-2' onChange={handleImage} />
              <div className='d-grid gap-2'>
                 <button className='btn btn-primary' type='submit'>Submit</button>
              </div>
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  )
}

export default App