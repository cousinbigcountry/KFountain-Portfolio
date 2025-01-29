import React from "react";

const About = () => {
  return (
    <section className="about-section">
      <div className="mt-16">
        <div className=" h-full mt-10 grid grid-cols-2 gap-3">
          <div className="">
            {/* TODO GET A BETTER PICTURE*/}
            <img
              src="about.png"
              alt="portrait"
              className="w-[300px] md:w-[400px] xl:w-[500px]"
            />
          </div>
          <div className="text-center space-y-4">
            <h2 className="about-head text-2xl sm:text-3xl md:text-5xl">
              About Me
            </h2>
            <ul className="text-md normal-case grid space-y-3">
              <li className="normal-case">
                Explanation number 1 goes here and right here only
              </li>
              <li>Explanation number 2 goes here and right here only</li>
              <li>Explanation number 3 goes here and right here only</li>
              <li>Explanation number 4 goes here and right here only</li>
              <li>Explanation number 5 goes here and right here only</li>
              <li>Explanation number 5 goes here and right here only</li>
              <li>Explanation number 5 goes here and right here only</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
