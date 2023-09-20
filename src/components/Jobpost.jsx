import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import post1 from "../assets/images/nurse.jpg";
import hiring1 from "../assets/images/jobpost1.jpg";
import hiring2 from "../assets/images/jobpost2.jpg";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const Jobpost = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,

    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="container max-w-7xl mx-auto">
      <h1 className="mx-2 text-xl font-bold text-blue-600">
        What we are Looking for:
      </h1>
      <Slider {...settings}>
        <div className="card  border">
          <img
            style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
            src={hiring1}
            alt=""
            className="w-100 "
          />
          <div className="card-body m-5">
            <h3 className="text-center my-2 text-blue-600 font-bold">
              Healthcare Assistant
            </h3>
            <h5>Salary: Salary Negotiable</h5>
            <h5>Location: California</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas</p>
            <button className=" py-1.5 px-3 bg-blue-700 text-white transition duration-500 rounded-md ">
              Apply Now
            </button>
          </div>
        </div>
        <div className="card border ">
          <img
            style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
            src={post1}
            alt=""
            className="w-100 "
          />
          <div className="card-body m-5">
            <h3 className="text-center my-2  text-blue-600 font-bold">
              Paedeatric Healthcare Assitant
            </h3>
            <h5>Salary: Salary Negotiable</h5>
            <h5>Location: California</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas</p>
            <button className=" py-1.5 px-3 bg-blue-700 text-white transition duration-500 rounded-md ">
              Apply Now
            </button>
          </div>
        </div>
        <div className="card border">
          <img
            style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
            src={post1}
            alt=""
            className="w-100 "
          />
          <div className="card-body m-5">
            <h3 className="text-center my-2  text-blue-600 font-bold">
              Registered Nurse
            </h3>
            <h5 className="">Salary: Salary Negotiable</h5>
            <h5 className="">Location: California</h5>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            </p>
            <button className="  py-1.5 px-3 bg-blue-700 text-white transition duration-500 rounded-md ">
              Apply Now
            </button>
          </div>
        </div>
        <div className="card border ">
          <img
            style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
            src={post1}
            alt=""
            className="w-100 "
          />
          <div className="card-body m-5">
            <h3 className="text-center  my-2  text-blue-600 font-bold">
              Registered Nurse
            </h3>
            <h5>Salary: Salary Negotiable</h5>
            <h5>Location: California</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas</p>
            <button className=" py-1.5 px-3 bg-blue-700 text-white transition duration-500 rounded-md ">
              Apply Now
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Jobpost;
