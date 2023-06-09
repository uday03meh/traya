import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <a href="https://traya.health/" className="logo" target="_blank" rel="noreferrer" >
        <img
          src="https://form.traya.health/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftraya.a5a9cff0.png&w=128&q=75"
          alt="Traya-Logo"
        />
      </a>
      <a href="https://traya.health/" target="_blank" rel="noreferrer" >
        <span className="exit">Exit</span>
      </a>
    </div>
  );
};

export default Navbar;
