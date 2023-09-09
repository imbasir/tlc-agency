import React from "react";
import background from "../assets/images/test.jpg";
import contentbg from "../assets/images/bg1.jpg";
import jobseekers from "../assets/images/icon1.png";
import employers from "../assets/images/icon2.png";
import news from "../assets/images/icon3.png";
import contact from "../assets/images/icon4.png";
import { HiPhone } from "react-icons/hi";

const Home = () => {
  const backgroundMain = {
    backgroundImage: `url(${background})`,
  };

  return (
    <div>
      <div className="border main-container pt-28 ">
        {/* bg main */}
        <div
          style={backgroundMain}
          className="md:h-3/4 md:bg-center  bg-cover  bg-center  w-100% "
        >
          <div className="  font-bold ">
            <div className="lg:px-72 lg:py-36 px-2 py-16 ">
              <p className=" text-blue-700  text-normal">
                Welcome to TLC staffing agency LLC
              </p>
              <p className=" text-5xl">Trust Us! We </p>
              <p className="text-5xl">Will Build Your</p>
              <p className="text-5xl">Success</p>
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
      </div>
      {/* container content */}
      <div className="content-container max-w-7xl mx-auto py-20 px-5">
        <div className="  gap-20 md:grid grid-cols-2">
          <div className="">
            <h1 className="font-bold text-blue-700 text-3xl ">
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
            <button className="border border-black rounded-md hover:bg-blue-700 hover:text-white duration-500  flex py-1 px-1 items-center justify-center ">
              Upload Resume
            </button>
          </div>
          <div className="mt-5 md:mt-0">
            {/* bg content */}
            <img src={contentbg} className="h-96 w-full" />
          </div>
        </div>
      </div>

      {/* jobs listing */}

      <div className="border bg-gray-100 my-10">jobs here</div>

      {/* icon-links */}
      <div className=" ">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 place-items-center   space-y-10 py-7 text-xl text-center ">
          <div className="">
            <img src={jobseekers} className="" />
            <p>Jobseekers</p>
          </div>
          <div>
            <img src={employers} className="" />
            <p>Employers</p>
          </div>
          <div>
            <img src={news} className="" />
            <p>News</p>
          </div>
          <div>
            <img src={contact} className="" />
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
