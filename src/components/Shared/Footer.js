import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-auto mb-0 hidden md:block">
      <div className="bg-gray-200 text-center">
        <h2>Copyright © 2023 - Paul Harding</h2>
        <Link to="https://swagdials.com/">
          <p className="font-bold">
            <span>Visit </span>
            <span>
              <i className="fa-solid fa-store"></i>
            </span>
            <span> Shop</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
