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
   <input type='text' id='name' placeholder='Full Name' required   />
   <input type='email' placeholder='Email' required  />
   <input type='number' className='phone' placeholder='Phone No.' required maxLength='10'  onInput = {(e) =>{
    e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
  }}  />
   </div>
   <Link to='/schedule' ><button className='book-a-call-btn btn'>Schedule A Call</button></Link>
    </div>
  )
}

export default Form