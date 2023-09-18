import React from "react";

const ContactMessage = () => {
  return (
    <div className="my-3 mx-3">
      <div className="">
        <form action="" className="form bg-white  relative">
          <h3 className="text-2xl text-gray-900 font-semibold">
            Send a Message!
          </h3>
          <p className="text-gray-600"> So we can assist you.</p>

          <div className="flex space-x-5 mt-3">
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Name"
              className="border p-2  w-1/2"
            />
            <input
              type="tel"
              name=""
              id=""
              placeholder="Your Number"
              className="border p-2 w-1/2"
            />
          </div>
          <input
            type="email"
            name=""
            id=""
            placeholder="Your Email"
            className="border p-2 w-full mt-3"
          />
          <textarea
            name=""
            id=""
            cols="10"
            rows="3"
            placeholder="Message"
            className="border p-2 mt-3 w-full"
          ></textarea>
          <p className="font-bold text-sm mt-3">GDPR Agreement *</p>
          <div className="flex items-baseline space-x-2 mt-2">
            <input type="checkbox" name="" id="" className="inline-block" />
            <p className="text-gray-600 text-sm">
              I consent to having this website store my submitted information so
              they can respond to my inquiry.
            </p>
          </div>
          <div className=" ">
            <input
              type="submit"
              value="Submit"
              className="w-full mt-6 bg-blue-600 rounded-md hover:bg-blue-500 text-white font-semibold p-3"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMessage;
