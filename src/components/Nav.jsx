import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      {/*  navbar goes here */}
      <nav className="fixed z-10 top-0 w-full bg-gray-300 ">
        <div className="max-w-7xl mx-auto ">
          <div className="flex justify-between ">
            <div className="flex space-x-4">
              {/* Logo */}
              <div>
                <a
                  href="#"
                  className="flex items-center py-5 px-2 text-gray-700"
                >
                  <span className="font-bold text-2xl border-2 border-black p-5 rounded-full ">
                    TLC
                  </span>
                </a>
              </div>
            </div>

            {/* Secondary nav */}

            <div className="hidden md:flex items-center space-x-1">
              <a href="" className="py-5 px-3 font-bold">
                Home
              </a>
              <a href="" className="py-5 px-3 font-bold">
                About us
              </a>
              <a href="" className="py-5 px-3 font-bold">
                Jobseekers
              </a>
              <a href="" className="py-5 px-3 font-bold">
                Employers
              </a>
              <a
                href=""
                className="py-2 px-3 bg-gray-700 hover:bg-blue-700 text-white transition duration-500 rounded-full font-bold"
              >
                Contact us
              </a>
            </div>
            {/* mobile responsive hamburger */}
            <div className="md:hidden flex items-center mr-2">
              <button onClick={() => setNavbarOpen(!navbarOpen)}>
                <GiHamburgerMenu size={23} />
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div className={navbarOpen ? " md:hidden " : " hidden "}>
          <a
            href="#"
            className="border font-bold block py-2 px-4 text-sm hover:bg-gray-200"
          >
            Home
          </a>
          <a
            href="#"
            className="border font-bold block py-2 px-4 text-sm hover:bg-gray-200"
          >
            About
          </a>
          <a
            href="#"
            className="border font-bold block py-2 px-4 text-sm hover:bg-gray-200"
          >
            Services
          </a>
          <a
            href="#"
            className="border font-bold block py-2 px-4 text-sm hover:bg-gray-200"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
