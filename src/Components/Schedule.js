import React from 'react'
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom'
import Navbar from './Navbar'
import './Schedule.css'
const Schedule = () => {
  return (
    <div className='Schedule'>
    <Navbar />
    <div>
        <h1>Book a Slot</h1>
    </div>
        <Link to='/thanks' ><button className='schedule-btn'>Book</button></Link>
    </div>
  )
}

export default Schedule