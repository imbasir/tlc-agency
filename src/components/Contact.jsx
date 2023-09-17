import React from "react";

import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import ContactMessage from "./ContactMessage";
import Background from "../assets/images/test.jpg";

const Contact = () => {
  const style = { color: "black", fontSize: "1.5em" };
  const mainBg = {
    backgroundImage: `url(${Background})`,
  };

  return (
    <div className="">
      <div className="py-20  ">
        {/* background  */}
        <div
          style={mainBg}
          className=" bg-cover bg-center py-40 md:py-72 w-100% "
        ></div>
        {/* contact us content */}
        <div className=" max-w-7xl mx-auto ">
          <h1 className="text-blue-600 text-center font-bold text-4xl py-10">
            Contact Us!
          </h1>

          {/* contact links */}
          <div className="">
            <div className=" md:grid grid-cols-2">
              <div className="contact-links  py-3 px-1 mx-auto ">
                <ul className="">
                  <li>
                    <div className=" flex items-center">
                      <HiLocationMarker style={style} className="my-22 mr-2" />
                      <span>8523 Lindley Ave Northrige CA. 91325</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <HiPhone style={style} className="my-2 mr-2" />
                      <span>+123 456 789</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <HiMail style={style} className="my-2 mr-2" />
                      <span>Business@gmail.com</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* message inputs */}
              <div className="border md:mx-16">
                <ContactMessage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
