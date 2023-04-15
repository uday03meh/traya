import React from 'react'
import './Form.css'
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom'
import Navbar from './Navbar'
const Form = () => {
  return (
    <div className='Form'>
    <Navbar />
    <h1>Book a doctor consultant</h1>
    <h3>Please Share your Details</h3>
        <div className='fields'>
   <input type='text' id='name' placeholder='Full Name' required maxLength={10}  />
   <input type='email' placeholder='Email' required  />
   <input type='number' className='phone' placeholder='Phone No.' required  />
   </div>
   <Link to='/schedule' ><button className='book-a-call-btn btn'>Schedule A Call</button></Link>
    </div>
  )
}

export default Form