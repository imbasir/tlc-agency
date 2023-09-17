import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Sliides = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG51cnNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://media.istockphoto.com/id/1589933604/photo/asian-chinese-nurses-walking-in-hospital-corridor-on-the-move.webp?b=1&s=170667a&w=0&k=20&c=TrkEV2Dls78NztDgTnv6cmrd05HBWrIKz4N_E02oqpk=",
    },
    {
      url: "https://media.istockphoto.com/id/1461280039/photo/smiling-young-asian-woman-nurse-wearing-blue-uniform-with-stethoscope-holding-hands-in.webp?b=1&s=170667a&w=0&k=20&c=-rbN1O7bGkBoGJKzHLHcOTvryjjJv9WrF9srlVqtwmc=",
    },

    {
      url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG51cnNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://media.istockphoto.com/id/1392605355/photo/senior-woman-in-hospital-bed.webp?b=1&s=170667a&w=0&k=20&c=b7H1m3ndxUWYIX4UISzEZ3JKgIhIHgAnf57RmEKvVdA=",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1260px]  h-[420px] md:h-[450px]  w-full mx-auto pt-12 pb-20 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full   rounded-md bg-center md:bg-cover bg-contain bg-no-repeat duration-500"
      ></div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center mt-6">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sliides;
