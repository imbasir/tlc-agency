import React from "react";
import Background from "../assets/images/test.jpg";

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
        ></div>
      </div>
      {/* content services */}
      <div className="max-w-5xl mx-auto">
        <h1 className="text-center text-4xl text-blue-600 font-bold">
          Services
        </h1>
        <div className="text-2xl font-bold text-blue-600 text-center">
          <h1>TLC staffing agency</h1>
        </div>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, amet
            dolorum eaque tenetur, eveniet repudiandae aut adipisci excepturi
            deleniti ex in ab consequuntur praesentium iure quia ea rem ullam
            assumenda! Ipsa, sed! Corrupti, tenetur? Quod, nobis possimus
            deserunt perferendis nisi adipisci, hic temporibus quos architecto
            reiciendis itaque labore distinctio neque suscipit iusto voluptates
            facilis illum aut obcaecati sint ipsum dolores?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
