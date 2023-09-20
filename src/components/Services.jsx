import React from "react";
import Background from "../assets/images/test.jpg";
import Automotive from "../assets/images/work.jpg";
import { BsArrowRightShort } from "react-icons/bs";

const Services = () => {
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
          <h1 className="text-blue-600 text-center font-bold text-4xl py-10 ">
            Our Services
          </h1>
        </div>
      </div>
      {/* content services */}
      <div className="max-w-7xl mx-auto ">
        <div className="text-start ml-2 md:text-center leading-8">
          <div className="text-4xl font-bold text-blue-600 ">
            <h1>TLC staffing agency</h1>
          </div>
          <div>
            <p className="font-normal my-4 max-w-5xl mx-auto ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              accusamus placeat saepe, magni aspernatur deleniti repudiandae
              odit exercitationem quas possimus doloremque ex rem inventore
              dolorum vel necessitatibus aliquam, illum adipisci. Possimus
              necessitatibus placeat itaque ex temporibus consequatur maxime
              laborum omnis, libero corrupti cumque quos quae reprehenderit
              dolor enim praesentium molestiae expedita in sequi! Minus
              voluptas, repellendus maiores vel blanditiis temporibus! Nostrum,
              ullam soluta eos excepturi, corrupti ipsa facilis laudantium
              deleniti odio temporibus itaque nulla distinctio perferendis est
              enim, voluptas odit? Sed consequatur possimus illum ducimus
              quibusdam corporis obcaecati odit tempora?
            </p>
          </div>
        </div>

        {/* Featured content */}
        <div className="py-10">
          <div className="md:text-center">
            <h1 className="text-xl font-bold text-blue-600">FEATURED</h1>
            <h1 className="text-4xl font-bold pb-7 ">
              The industries covered <br />
              include the following:
            </h1>
          </div>

          {/* Listing jobs */}
          <div className="border grid md:grid-cols-2 lg:grid-cols-3 justify-items-center ">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  my-4">
              <a href="#">
                <img className="rounded-t-lg" src={Automotive} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Automotive
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read more <BsArrowRightShort size={24} />
                </a>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  my-4">
              <a href="#">
                <img className="rounded-t-lg" src={Background} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Admin & Finance
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read more <BsArrowRightShort size={24} />
                </a>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  my-4">
              <a href="#">
                <img className="rounded-t-lg" src={Automotive} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Hospitality
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read more <BsArrowRightShort size={24} />
                </a>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  my-4">
              <a href="#">
                <img className="rounded-t-lg" src={Automotive} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Healthcare
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read more <BsArrowRightShort size={24} />
                </a>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  my-4">
              <a href="#">
                <img className="rounded-t-lg" src={Automotive} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Engineering & Construction
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read more <BsArrowRightShort size={24} />
                </a>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  my-4">
              <a href="#">
                <img className="rounded-t-lg" src={Automotive} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Retail & Other Services
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read more <BsArrowRightShort size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
