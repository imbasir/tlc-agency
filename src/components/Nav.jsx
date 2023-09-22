import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import company from "../assets/images/company.png";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  /*   const Logo = {
    backgroundImage: `url(${company})`,
  }; */
  return (
    <div>
      {/*  navbar goes here */}
      <nav className="shadow-md fixed  z-10 top-0 w-full bg-white">
        <div className="max-w-7xl mx-auto ">
          <div className="flex justify-between ">
            <div className="  self-center mr-2">
              {/* Logo */}
              <a href="#logo" className="flex items-center">
                <img
                  src={company}
                  className="w-[95px] h-[95px] bg-no-repeat  "
                  alt="TLC logo"
                />
                <span className=" self-center text-1xl font-semibold whitespace-nowrap">
                  STAFFING
                  <br />
                  AGENCY
                </span>
              </a>
            </div>

            {/* Secondary nav */}

            <div className="px-3 hidden text-blue-600 md:flex items-center space-x-8">
              <Link to="/" className="py-5 px-3 text-normal font-bold">
                Home
              </Link>
              <Link to="/about" className="py-5 px-3 text-normal font-bold">
                About
              </Link>
              <Link to="/services" className="py-5 px-3 text-normal font-bold">
                Services
              </Link>
              <Link
                to="/contact"
                className="py-2 px-3 bg-gray-700 hover:bg-blue-700 text-white transition duration-500 rounded-full font-bold"
              >
                Contact us
              </Link>
            </div>

            {/* mobile responsive hamburger */}
            <div className="transition-all ease-in-out duration-300 md:hidden flex items-center mr-2">
              <button onClick={() => setNavbarOpen(!navbarOpen)}>
                {!navbarOpen ? (
                  <GiHamburgerMenu size={23} />
                ) : (
                  <AiOutlineClose size={23} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`border-y text-center transition-all delay-300 duration-300 ease-in-out  ${
            navbarOpen ? "opacity-100 md:hidden " : "opacity-0 hidden "
          }`}
        >
          <Link
            to="/"
            /* onClick={() => (this.setNavbarOpen = false)} */
            className="font-bold block py-4 px-4 text-sm hover:bg-gray-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            /* onClick={() => (this.setNavbarOpen = false)} */
            className="font-bold block py-4 px-4 text-sm hover:bg-gray-200"
          >
            About Us
          </Link>
          <Link
            to="/services"
            /* onClick={() => (this.setNavbarOpen = false)} */
            className="font-bold block py-4 px-4 text-sm hover:bg-gray-200"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={() => (this.setNavbarOpen = false)}
            className="font-bold block py-4 px-4 text-sm hover:bg-gray-200"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
