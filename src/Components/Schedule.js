import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Schedule.css";
const Schedule = () => {
  return (
    <div className="Schedule">
      <Navbar />
      <div>
        <h1>Book a Slot</h1>
      </div>
      <div className="time-date">
      <input type="date" name="date" id="date" value="2023-12-31" />
      <input type="time" name="time" id="time" value='12:00:00'/>
      </div>
      <Link to="/thanks">
        <button className="schedule-btn">Book</button>
      </Link>
    </div>
  );
};

export default Schedule;
