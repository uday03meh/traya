import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const Form = () => {
  return (
    <div className="Form">
      <Navbar />
      <h1>Book A Doctor Consultant</h1>
      <h3>Please share your details</h3>
      <div className="fields">
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            required='required'
            autoFocus
          />
          <input type="email" placeholder="Email" required='required' autoFocus />
          <input
            type="number"
            className="phone"
            placeholder="Phone No."
            required='required'
            autoFocus
            maxLength="10"
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 10);
            }}
          />
      </div>
      <Link to="/schedule">
        <button className="book-a-call-btn btn">Schedule A Call</button>
      </Link>
    </div>
  );
};

export default Form;
