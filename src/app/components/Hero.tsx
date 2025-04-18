import React from "react";

const Hero = () => {
  return (
    <section className="hero-section mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="inner.container space-y-5 flex flex-col justify-center items-center text-center sm:text-left py-20 px-10 md:pr-24  md:px-0 md:items-start md:mx-5 md:mt-16">
            <h1 className="text-4xl xl:text-5xl font-bold uppercase">
              Kyle <span className="text-[#7791d6]">Fountain</span>
            </h1>
            <p>
              {/* TODO*/}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              quibusdam ipsum fuga deserunt deleniti omnis eligendi quaerat
              possimus ab perferendis similique, voluptate, laudantium
              reprehenderit laborum cumque aspernatur assumenda obcaecati velit?
            </p>
            <div className="btn-group grid grid-cols-1 gap-5 md:grid-cols-3  ">
              <button className="primary-btn bg-inherit hover:bg-[#00000063] ">
                <a href="https://github.com/cousinbigcountry?tab=repositories">
                  <img
                    src="github-icon.png"
                    alt="github logo"
                    height={100}
                    width={100}
                  />
                </a>
              </button>
              <button className="primary-btn bg-inherit hover:bg-[#00000063] ">
                <a href="https://www.linkedin.com/in/kyle-fountain-89a6b4136/">
                  <img
                    src="linkedin-icon.png"
                    alt="linkedin logo"
                    height={100}
                    width={100}
                  />
                </a>
              </button>
              <button className="primary-btn bg-inherit hover:bg-[#00000063] ">
                <a href="resume.pdf" download="Kyle Fountain Resume">
                  <img
                    src="resume-icon.png"
                    alt="resume"
                    height={60}
                    width={60}
                  />
                </a>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="hero.png"
              alt="hero image"
              className="w-[400px] md:w-[500px] xl:w-[600px] mr-9 s-"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
