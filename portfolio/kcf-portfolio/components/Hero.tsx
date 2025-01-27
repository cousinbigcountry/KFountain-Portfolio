import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="inner.container space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-24 md:py-0 md:px-0 md:items-start">
            <h1 className="text-4xl xl:text-5xl font-bold uppercase">
              Kyle <span className="text-[#7791d6]">Fountain</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              quibusdam ipsum fuga deserunt deleniti omnis eligendi quaerat
              possimus ab perferendis similique, voluptate, laudantium
              reprehenderit laborum cumque aspernatur assumenda obcaecati velit?
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/images/hero.png"
              alt="hero image"
              className="w-[80%] md:w-[500px] xl:w-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
