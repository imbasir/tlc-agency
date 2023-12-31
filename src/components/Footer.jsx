import React from "react";
import { FaTwitter, FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { CgCodeSlash } from "react-icons/cg";

const Footer = () => {
  const style = { fontSize: "1.5em" };

  return (
    <div className="footer bg-gray-800 text-white  pt-8 px-2 ">
      <div className="container max-w-7xl mx-auto   ">
        <div className="row  px-5 md:grid grid-cols-3">
          {/* Company Links */}

          <div
            data-aos="flip-up"
            data-aos-duration="2000"
            className="col py-3 px-1 mx-auto"
          >
            <h4 className="font-bold text-md">Company</h4>
            <div>
              <div>
                <a href="#" className="text-sm ">
                  Home
                </a>
              </div>
              <div>
                <a href="#" className="text-sm ">
                  About Us
                </a>
              </div>
              <div>
                <a href="#" className="text-sm ">
                  Jobseekers
                </a>
                <div>
                  <a href="#" className="text-sm ">
                    Employers
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div
            data-aos="flip-up"
            data-aos-duration="2000"
            className="col  py-3 px-1 mx-auto "
          >
            <h4 className="font-bold text-md">Contact Us</h4>
            <ul className="">
              <li className="">
                <a href="#" className=" flex items-center ">
                  <HiLocationMarker
                    style={style}
                    className="text-blue-600 my-22 mr-2"
                  />
                  <span>8523 Lindley Ave Northrige CA. 91325</span>
                </a>
              </li>
              <li className="">
                <a href="#" className="flex items-center ">
                  <HiPhone style={style} className="text-blue-600 my-2 mr-2" />
                  <span>+123 456 789</span>
                </a>
              </li>
              <li className="">
                <a href="#" className="flex items-center ">
                  <HiMail style={style} className="text-blue-600 my-2 mr-2" />
                  <span>Business@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div
            data-aos="flip-up"
            data-aos-duration="2000"
            className="col  py-3 px-1 mx-auto "
          >
            <h4 className="font-bold text-md">Follow Us</h4>
            <ul className="flex space-x-3 mt-1 ">
              <li className="border bg-white rounded-3xl p-2">
                <a href="#" className=" ">
                  <FaFacebookF style={style} className="text-blue-600" />
                </a>
              </li>
              <li className="border bg-white rounded-3xl p-2">
                <a href="#" className=" ">
                  <FaInstagramSquare style={style} className="text-blue-600" />
                </a>
              </li>
              <li className="border bg-white rounded-3xl p-2">
                <a href="#" className=" ">
                  <FaTwitter style={style} className="text-blue-600" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span className="mt-14 text-xs place-items-end justify-center items-center flex bottom-0">
        ©TLC staffing Services 2023 - TIGS{" "}
        <CgCodeSlash size={14} className="mx-1" />
      </span>
    </div>
  );
};

export default Footer;
