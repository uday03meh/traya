import React from 'react'
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom'
import Navbar from './Navbar'

const Schedule = () => {
  return (
    <div className='Schedule'>
    <Navbar />
    <div>
        <h1>Book a Slot</h1>
    </div>
        <Link to='/thanks' ><button>Schedule</button></Link>
    </div>
  )
}

export default Schedule