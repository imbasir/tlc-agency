import React from "react";

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
          className="bg-cover bg-center py-40 md:py-42 lg:py-72 w-100% h-5/6"
        >
          <h1 className="text-black text-center font-bold text-6xl py-10">
            Contact Us
          </h1>
        </div>
      </div>
      {/* contact us content */}
      <div className=" max-w-7xl mx-auto mb-12">
        {/* contact links */}

        <section className="block">
          <div className="px-5 md:px-10">
            <div className="mx-auto w-full max-w-7xl">
              <div className="py-16 md:py-24 lg:py-32">
                <div className="grid items-center max-[991px]:justify-items-start grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
                  <div className="max-[991px]:max-w-[720px]">
                    <h2 className="font-bold mb-2 text-3xl md:text-5xl">
                      Let's build something exciting together!
                    </h2>

                    <div className="ml-0 mr-0 mt-4 max-w-[528px] mb-5 md:mb-6 lg:mb-8 pb-4">
                      <p className="text-[#636262] max-[479px]:text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                      </p>
                    </div>

                    <div className="mb-4 flex items-center max-[991px]:mb-px">
                      <img
                        src="https://assets.website-files.com/6344564e41b7185978bcb175/6344ae2b569e53cbca3db723_star.svg"
                        alt=""
                        className="inline-block max-w-full mr-1 w-5 pl-0"
                      />
                      <img
                        src="https://assets.website-files.com/6344564e41b7185978bcb175/6344ae2b569e53cbca3db723_star.svg"
                        alt=""
                        className="inline-block max-w-full mr-1 w-5 pl-0"
                      />
                      <img
                        src="https://assets.website-files.com/6344564e41b7185978bcb175/6344ae2b569e53cbca3db723_star.svg"
                        alt=""
                        className="inline-block max-w-full mr-1 w-5 pl-0"
                      />
                      <img
                        src="https://assets.website-files.com/6344564e41b7185978bcb175/6344ae2b569e53cbca3db723_star.svg"
                        alt=""
                        className="inline-block max-w-full mr-1 w-5 pl-0"
                      />
                      <img
                        src="https://assets.website-files.com/6344564e41b7185978bcb175/6344ae2b569e53cbca3db723_star.svg"
                        alt=""
                        className="inline-block max-w-full mr-1 w-5 pl-0"
                      />
                    </div>
                    <div className="mb-8 max-w-[480px]">
                      <p className="text-[#636262] max-[479px]:text-sm">
                        Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus
                        sit amet luctus venenatis elit ut aliquam, purus sit
                        amet luctus venenatis
                      </p>
                    </div>
                  </div>

                  {/* send message */}
                  <div className="mx-auto w-full rounded-3xl max-w-[608px] bg-[#f2f2f7] px-8 max-[991px]:ml-0 max-[991px]:mr-0 pt-[2em] pb-8">
                    <div className="text-center">
                      <h3 className="font-bold text-2xl md:text-3xl">
                        GET IN TOUCH
                      </h3>
                      <div className="mx-auto mt-4 max-w-[480px] mb-5 md:mb-6 lg:mb-8">
                        <div className="text-[#636262] text-sm sm:text-sm">
                          Have any questions?We'd love to hear from you.
                        </div>
                      </div>

                      <div className="mx-auto w-full max-w-[400px]">
                        <div className="mx-auto max-w-[400px] text-left mb-4">
                          <form name="wf-form-password" method="get">
                            <div className="relative">
                              <label for="name-2" className="mb-1 font-medium">
                                Your Name
                              </label>
                              <input
                                type="text"
                                className="m-0 mb-4 block w-full border border-solid border-black align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 rounded-md h-9 py-6 pl-4"
                                maxlength="256"
                                name="name-2"
                                placeholder=""
                                required=""
                              />
                            </div>
                            <div className="relative mb-2">
                              <label for="name-2" className="mb-1 font-medium">
                                Email Address
                              </label>
                              <input
                                type="email"
                                className="m-0 mb-4 block w-full border border-solid border-black align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 rounded-md h-9 py-6 pl-4"
                                maxlength="256"
                                name="name-2"
                                placeholder=""
                                required=""
                              />
                            </div>

                            <div className="relative mb-5 md:mb-6 lg:mb-8">
                              <label for="field-3" className="mb-1 font-medium">
                                Message
                              </label>
                              <textarea
                                placeholder=""
                                maxlength="5000"
                                name="field"
                                className="m-0 block h-auto min-h-[128px] w-full overflow-auto border border-solid border-black bg-white align-middle text-[#333333] focus:border-[#3898ec] text-sm mb-2.5 px-3 py-2 rounded-md pl-4"
                              >
                                {" "}
                              </textarea>
                            </div>

                            <input
                              type="submit"
                              value="Send Message"
                              className="m-0 inline-block w-full cursor-pointer items-center bg-blue-700 px-6 py-3 text-center font-semibold text-white"
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
