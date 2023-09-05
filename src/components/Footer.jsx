import React from "react";
import { FaTwitter, FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";

const Footer = () => {
  const style = { color: "black", fontSize: "1.5em" };

  return (
    <div className="footer bg-gray-300  pt-8 px-8 fixed bottom-0 left-0 right-0">
      <div className="container max-w-7xl mx-auto   ">
        <div className="row  px-5 md:grid grid-cols-3">
          {/* Company Links */}

          <div className="col py-3 px-1 mx-auto">
            <h4 className="font-bold">Company</h4>
            <ul>
              <li>
                <a href="#" className="text-sm ">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm ">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm ">
                  Jobseekers
                </a>
                <li>
                  <a href="#" className="text-sm ">
                    Employers
                  </a>
                </li>
              </li>
            </ul>
          </div>

          {/* Company Details */}
          <div className="col  py-3 px-1 mx-auto ">
            <h4 className="font-bold">Contact Us</h4>
            <ul className="">
              <li>
                <a href="#" className=" flex items-center">
                  <HiLocationMarker style={style} className="my-22 mr-2" />
                  <span>:8523 Lindley Ave Northrige CA. 91325</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  <HiPhone style={style} className="my-2 mr-2" />
                  <span>+123 456 789</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  <HiMail style={style} className="my-2 mr-2" />
                  <span>Business@Email.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col  py-3 px-1 mx-auto ">
            <h4 className="font-bold">Follow Us</h4>
            <ul className="flex space-x-3 mt-1 ">
              <li>
                <a href="#" className=" ">
                  <FaFacebookF style={style} className="rounded-full" />
                </a>
              </li>
              <li>
                <a href="#" className=" ">
                  <FaInstagramSquare style={style} className="rounded-full" />
                </a>
              </li>
              <li>
                <a href="#" className=" ">
                  <FaTwitter style={style} className="rounded-full" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span className="mt-14 text-xs place-items-end justify-center flex bottom-0">
        ©TLC staffing agency LLC Services 2023 - TIGS
      </span>
    </div>
  );
};

export default Footer;
