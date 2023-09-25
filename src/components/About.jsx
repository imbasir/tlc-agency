import React from "react";
import Background from "../assets/images/test.jpg";
import person from "../assets/images/person.jpg";
import person1 from "../assets/images/person2.jpg";

const About = () => {
  const mainBg = {
    backgroundImage: `url(${Background})`,
  };

  return (
    <div id="logo" className="">
      <div className="py-20  ">
        {/* background  */}
        <div
          style={mainBg}
          className="bg-cover bg-center py-40 md:py-42 lg:py-72 w-100% h-5/6 "
        >
          <h1 className="text-black text-center font-bold text-6xl py-10">
            About us
          </h1>
        </div>
      </div>

      {/* content about us */}

      <section className="block">
        <div className="px-5 md:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <div className="py-12 md:py-16 lg:py-20">
              <div className="flex items-stretch max-[991px]:min-h-[auto] max-[991px]:w-full max-[991px]:flex-col grid-cols-1 lg:grid-cols-[65%_30%] gap-8 lg:gap-20">
                <div className="flex-col flex-1 flex justify-center gap-8">
                  <div className="flex-col flex gap-8">
                    <h2
                      data-aos="zoom-out"
                      data-aos-duration="2000"
                      className="font-bold text-3xl md:text-5xl"
                    >
                      About us
                    </h2>
                    <p
                      data-aos="slide-right"
                      data-aos-duration="2000"
                      className="max-[479px]:text-sm"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Proin fermentum leo vel orci. Dui faucibus in
                      ornare quam viverra orci sagittis eu. Viverra nam libero
                      justo laoreet sit amet. Vulputate odio ut enim blandit
                      volutpat maecenas volutpat blandit. A lacus vestibulum sed
                      arcu non odio euismod. Feugiat pretium nibh ipsum
                      consequat. Cum sociis natoque penatibus et. Leo in vitae
                      turpis massa sed. Neque aliquam vestibulum morbi blandit
                      cursus. Facilisis sed odio morbi quis. A pellentesque sit
                      amet porttitor eget.
                    </p>
                  </div>
                  <div className="flex items-center justify-start gap-4 flex-wrap">
                    <a
                      href="#"
                      className="inline-block cursor-pointer items-center bg-blue-700 px-6 py-3 text-center font-semibold text-white"
                    >
                      Learn More
                    </a>
                  </div>
                  <div className="mb-8 mt-8 h-px w-full bg-black"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
                    <div
                      data-aos="slide-up"
                      data-aos-duration="2000"
                      className="flex-col flex w-full items-start justify-between gap-4 border border-solid bg-[#f2f2f7] rounded-md p-6 md:p-4"
                    >
                      <div className="text-sm sm:text-sm">
                        I have been using the Business Solution services for the
                        past year, and I am extremely satisfied with the
                        results. Their innovative solutions and expertise have
                        transformed my business operations.
                      </div>
                      <div className="flex items-center gap-x-4 text-left max-[767px]:w-full max-[479px]:gap-[8px]">
                        <div className="flex items-center gap-x-2">
                          <img
                            src={person1}
                            alt=""
                            className="flex h-12 min-h-[48px] w-12 min-w-[48px] max-w-full items-center rounded-[100%] object-cover"
                          />
                          <p className="font-semibold max-[479px]:text-sm">
                            Adam
                          </p>
                        </div>
                        <div className="w-px bg-[#636262] h-5"></div>
                        <div className="flex items-center gap-x-2">
                          <p className="font-semibold max-[479px]:text-sm">
                            5.0
                          </p>
                          <div className="flex text-[#f6ad1b]">
                            <div className="flex-col flex h-4 w-4 items-center justify-center"></div>
                            <div className="flex-col flex h-4 w-4 items-center justify-center"></div>
                            <div className="flex-col flex h-4 w-4 items-center justify-center"></div>
                            <div className="flex-col flex h-4 w-4 items-center justify-center"></div>
                            <div className="flex-col flex h-4 w-4 items-center justify-center"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-aos="slide-down"
                      data-aos-duration="2000"
                      className="flex-col flex w-full items-start justify-between gap-4 border border-solid bg-[#f2f2f7] rounded-md p-6 md:p-4"
                    >
                      <div className="text-sm sm:text-sm">
                        I have been using the Business Solution services for the
                        past year, and I am extremely satisfied with the
                        results. Their innovative solutions and expertise have
                        transformed my business operations.
                      </div>
                      <div className="flex items-center gap-x-4 text-left max-[767px]:w-full max-[479px]:gap-[8px]">
                        <div className="flex items-center gap-x-2">
                          <img
                            src={person}
                            alt=""
                            className="flex h-12 min-h-[48px] w-12 min-w-[48px] max-w-full items-center rounded-[100%] object-cover"
                          />
                          <p className="font-semibold max-[479px]:text-sm">
                            Alleyah
                          </p>
                        </div>
                        <div className="w-px bg-[#636262] h-5"></div>
                        <div className="flex items-center gap-x-2">
                          <p className="font-semibold max-[479px]:text-sm">
                            5.0
                          </p>
                          <div className="flex text-[#f6ad1b]">
                            <div className="flex-col flex h-4 w-4 items-center justify-center"></div>
                            <div className="flex-col flex h-4 w-4 items-center justify-center"></div>
                            <div className="flex-col flex h-4 w-4 items-center justify-center"></div>
                            <div className="flex-col flex h-4 w-4 items-center justify-center"></div>
                            <div className="flex-col flex h-4 w-4 items-center justify-center"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block overflow-hidden bg-[#f2f2f7] max-[991px]:h-[475px] rounded-md w-full lg:w-[30%]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
