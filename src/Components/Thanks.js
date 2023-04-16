import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Thanks.css";
const Thanks = () => {
  return (
    <div className="Thanks">
      <Navbar />
      <div className="thanks-page">
        <h1>Thank You For Booking With Us!</h1>
        <p>
          We have received your request and will get back to you as soon as
          possible to confirm your booking.
        </p>
        <Link to="/">
          <button className="thanks-btn">Back To Homepage</button>
        </Link>
      </div>
    </div>
  );
};

export default Thanks;
