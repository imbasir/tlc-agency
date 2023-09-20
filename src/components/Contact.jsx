import React from "react";
import { FaTwitter, FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import ContactMessage from "./ContactMessage";
import Background from "../assets/images/test.jpg";

const Contact = () => {
  const style = { fontSize: "1.7em" };
  const mainBg = {
    backgroundImage: `url(${Background})`,
  };

  return (
    <div id="logo" className="">
      <div className="py-20  ">
        {/* background  */}
        <div
          style={mainBg}
          className="bg-cover bg-center py-40 md:py-42 lg:py-72 w-100% "
        >
          <h1 className="text-blue-600 text-center font-bold text-4xl py-10">
            Contact Us
          </h1>
        </div>
      </div>
      {/* contact us content */}
      <div className=" max-w-7xl mx-auto mb-12">
        {/* contact links */}

        <div className="ml-2">
          <div className=" md:grid grid-cols-2 w-100%  ">
            <div className="contact-links  md:grid justify-items-center content-center mb-8  py-3 px-1 w-full  ">
              <ul className="space-y-4 font-bold">
                <li>
                  <div className=" flex items-center">
                    <HiLocationMarker
                      style={style}
                      className="text-blue-600 my-22 mr-2"
                    />
                    <span>8523 Lindley Ave Northrige CA. 91325</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <HiPhone
                      style={style}
                      className="text-blue-600 my-2 mr-2"
                    />
                    <span>+123 456 789</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <HiMail style={style} className="text-blue-600 my-2 mr-2" />
                    <span>Business@gmail.com</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <FaFacebookF
                      style={style}
                      className="text-blue-600 my-2 mr-2"
                    />
                    <span>www.facebook.com</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <FaTwitter
                      style={style}
                      className="text-blue-600 my-2 mr-2"
                    />
                    <span>www.twitter.com</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <FaInstagramSquare
                      style={style}
                      className="text-blue-600 my-2 mr-2"
                    />
                    <span>www.instagram.com</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* message inputs */}
            <div className="border  mr-4">
              <ContactMessage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
