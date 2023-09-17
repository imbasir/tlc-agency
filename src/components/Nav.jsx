import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      {/*  navbar goes here */}
      <nav className="fixed  z-10 top-0 w-full bg-gray-300 ">
        <div className="max-w-7xl mx-auto ">
          <div className="flex justify-between ">
            <div className="flex space-x-4">
              {/* Logo */}
              <div>
                <a
                  href="#"
                  className="flex items-center py-5 px-2 text-gray-700"
                >
                  <span className="flex-wrap font-bold text-2xl border-2 border-black p-5 rounded-full ">
                    TLC
                  </span>
                </a>
              </div>
            </div>

            {/* Secondary nav */}

            <div className="px-3 hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className="py-2 px-3 bg-gray-700 hover:bg-blue-700 text-white transition duration-500 rounded-full font-bold"
              >
                Home
              </Link>
              <Link to="/about" className="py-5 px-3 text-normal font-bold">
                About us
              </Link>
              <Link
                to="/jobseekers"
                className="py-5 px-3 text-normal font-bold"
              >
                Jobseekers
              </Link>
              <Link to="/employers" className="py-5 px-3 text-normal font-bold">
                Employers
              </Link>
              <Link
                to="/contact"
                className="py-2 px-3 bg-gray-700 hover:bg-blue-700 text-white transition duration-500 rounded-full font-bold"
              >
                Contact us
              </Link>
            </div>
            {/* mobile responsive hamburger */}
            <div className="md:hidden  flex items-center mr-2">
              <button onClick={() => setNavbarOpen(!navbarOpen)}>
                <GiHamburgerMenu size={23} />
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={navbarOpen ? " md:hidden bg-white border  " : " hidden "}
        >
          <Link
            to="/"
            className="font-bold block py-2 px-4 text-sm hover:bg-gray-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-bold block py-2 px-4 text-sm hover:bg-gray-200"
          >
            About Us
          </Link>
          <a
            href="#"
            className="font-bold block py-2 px-4 text-sm hover:bg-gray-200"
          >
            Jobseekers
          </a>
          <a
            href="#"
            className="font-bold block py-2 px-4 text-sm hover:bg-gray-200"
          >
            Employers
          </a>
          <Link
            to="/contact"
            className="font-bold block py-2 px-4 text-sm hover:bg-gray-200"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
