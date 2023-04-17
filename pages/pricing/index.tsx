import React from "react";

const Pricing = () => {
  return (
    <div className="w-[80%] mx-auto my-[5rem]">
      <div className="text-center text-4xl font-light capitalize my-[5rem] lg:my-[8rem]">
        <h1>Pricing depends on service needed. </h1>
        <p className="text-xl">Below are the price table</p>
      </div>
      <div className=" lg:h-[70vh] flex flex-col lg:flex-row lg:justify-center gap-5 mt-[5rem]">
        <div className="pricing">
          <div className="pricing-inner">
            <h1>Project Material Chapter 1-5</h1>
          </div>
          <h1 className="px-5 pt-[2rem] lg:pt-[8rem] text-center text-xl font-light text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
            laboriosam?
          </h1>
        </div>
        <div className="pricing">
          <div className="pricing-inner">
            <h1>Hire a Writer</h1>
          </div>
          <h1 className="px-5 pt-[2rem] lg:pt-[8rem] text-center text-xl font-light text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, id.
            Lorem ipsum dolor sit amet.
          </h1>
        </div>
        <div className="pricing">
          <div className="pricing-inner">
            <h1>Data Analysis</h1>
          </div>
          <h1 className="px-5 pt-[2rem] lg:pt-[8rem] text-center text-xl font-light text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            repellendus.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
