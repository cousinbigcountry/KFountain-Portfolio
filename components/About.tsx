import React from "react";

const About = () => {
  return (
    <section className="about-section w-[100%] h-[100%] border border-solid border-green-500">
      <div className="w-[100%] h-[100%] border border-solid border-indigo-600 mt-10">
        <div className="w-[100%] h-[100%] border border-solid border-white p-2 grid grid-cols-2 gap-7">
          <div className="w-[100%] h-[100%] border border-solid border-orange-500 ">
            {/* TODO GET A BETTER PICTURE*/}
            <img
              src="/images/about.png"
              alt="portrait"
              className="w-[300px] md:w-[400px] xl:w-[500px]"
            />
          </div>
          <div className="w-[100%] h-[100%] border border-solid border-yellow-500 text-center">
            <h2 className="about-head uppercase text-2xl sm:text-3xl md:text-5xl">
              About Me
            </h2>
            <ul className="">
              <li>Explanation number 1 goes here and right here only</li>
              <li>Explanation number 2 goes here and right here only</li>
              <li>Explanation number 3 goes here and right here only</li>
              <li>Explanation number 4 goes here and right here only</li>
              <li>Explanation number 5 goes here and right here only</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
