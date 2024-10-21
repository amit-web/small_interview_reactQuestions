import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <div className="flex justify-evenly border border-black h-10 w-full">
        <Link to="/home">
          <p>Home</p>
        </Link>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
        <Link to="/register">
          <p>Register</p>
        </Link>
        <Link to="/about">
          <p>About Us</p>
        </Link>
      </div>
    </>
  );
};

export default Head;
