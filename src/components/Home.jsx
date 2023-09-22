import React from "react";
import background from "../assets/images/test.jpg";
import contentbg from "../assets/images/bg2.jpg";
import jobseekers from "../assets/images/icon1.png";
import employers from "../assets/images/icon2.png";
import news from "../assets/images/icon3.png";
import contact from "../assets/images/icon4.png";
import { HiPhone } from "react-icons/hi";
import Slides from "./Slides";
import Jobpost from "./Jobpost";

const Home = () => {
  const backgroundMain = {
    backgroundImage: `url(${background})`,
  };

  return (
    <div id="logo" className="">
      <div className="py-12 ">
        {/* background  */}
        <div
          style={backgroundMain}
          className="bg-cover bg-center py-40 md:py-42 lg:py-72 w-100% h-5/6 "
        >
          <div className="max-w-5xl md:mx-auto m-2 font-bold">
            <p className=" text-blue-700  text-2sm md:text-xl">
              Welcome to TLC staffing agency LLC
            </p>
            <p className=" text-3xl md:text-5xl">Trust Us! We </p>
            <p className="text-3xl md:text-5xl">Will Build Your</p>
            <p className="text-3xl md:text-5xl">Success</p>
            <div className="flex space-x-2 ">
              <button className=" py-1 px-1 bg-black hover:bg-blue-700 text-white transition duration-500 rounded-md font-bold">
                Apply Now!
              </button>
              <button className="border border-black rounded-md hover:bg-blue-700 hover:text-white duration-500  flex py-1 px-1 items-center justify-center">
                <HiPhone />
                <span className="px-1 py-1">Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* container content */}

      <div className="content-container max-w-7xl mx-auto py-10 ">
        <div className="   md:grid grid-cols-2">
          <div className="px-2 py-10">
            <h1 className="font-bold  text-2xl md:text-3xl">
              We are your staffing agency
            </h1>
            <div className="text-normal">
              <p className="py-2">
                We have been a staffing agency for many years and match supply
                and demand the traditional way.
              </p>
              <p className="py-2">
                We are mainly active in London and the surrounding areas and
                specialise in placing Nurses and Healthcare assistants within
                the Health and Social Care sector.
              </p>
              <p className="py-2">
                We are an excellent resource for anyone looking for work that is
                not advertised on the open market, and are an ideal broker of
                your individual qualifications.
              </p>
            </div>
            <button className=" py-2 px-2 bg-blue-700 text-white transition duration-500 rounded-md font-bold">
              About Us
            </button>
          </div>

          {/* bg content */}
          <div className="">
            <Slides />
          </div>
          {/* <div className="mt-5 md:mt-0">
            <img src={contentbg} className=" rounded-2xl h-96 w-full" />
          </div> */}
        </div>
      </div>

      {/* jobs listing */}

      <div className="bg-gray-300 py-20 px-1">
        <Jobpost className="py-10" />
      </div>

      {/* icon-links */}
      <div className=" py-10 ">
        <div className=" max-w-7xl mx-auto content grid md:grid-cols-4  text-center justify-items-center text-xl py-10 ">
          <div className="my-4 ">
            <img src={jobseekers} className="" />
            <p>Jobseekers</p>
          </div>
          <div className=" my-4">
            <img src={employers} className="" />
            <p>Employers</p>
          </div>
          <div className="my-4">
            <img src={news} className="" />
            <p>News</p>
          </div>
          <div className=" my-4">
            <img src={contact} className="" />
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
