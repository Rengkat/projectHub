import React from "react";

const HireWriter = () => {
  return (
    <div className="w-[80%] mx-auto my-10">
      <h1 className=" text-[#db1e00] font-semibold text-[14px] lg:text-xl">
        KINDLY FILL THE FORM AND CHECK YOUR E-MAIL IMMEDIATELY!
      </h1>
      <p className=" font-semibold">Or call/ WhatsApp: +23480453836</p>
      <div className="lg:flex mt-5">
        <div className="border-3 w-full lg:w-[50%]">
          <aside>
            <label
              className="block text-xl mt-3 font-light pb-1"
              htmlFor="full name">
              Name:
            </label>
            <input
              className="w-full lg:w-[90%] p-3 border-[1px] border-gray-700"
              type="text"
              placeholder="Enter full name"
            />
          </aside>
          <aside>
            <label
              className="block text-xl mt-3 font-light pb-1"
              htmlFor="email">
              Email:
            </label>
            <input
              className="w-full lg:w-[90%] p-3 border-[1px] border-gray-700"
              type="email"
              placeholder="Enter email"
            />
          </aside>
          <aside>
            <label
              className="block text-xl mt-3 font-light pb-1"
              htmlFor="phone">
              Phone:
            </label>
            <input
              className="w-full lg:w-[90%] p-3 border-[1px] border-gray-700"
              type="text"
              placeholder="Enter phone number"
            />
          </aside>
          <aside>
            <label
              className="block text-xl mt-3 font-light pb-1"
              htmlFor="topic">
              Project Topic:
            </label>
            <input
              className="w-full lg:w-[90%] p-3 border-[1px] border-gray-700"
              type="text"
              placeholder="Enter project topic"
            />
          </aside>
          <aside>
            <label
              className="block text-xl mt-3 font-light pb-1"
              htmlFor="qualification">
              Education Level
            </label>
            <select
              className="w-full lg:w-[90%] p-3 border-[1px] border-gray-700"
              name="qualification"
              id="qualification">
              <option value="nce">NCE</option>
              <option value="diploma">OND (Diploma)</option>
              <option value="hnd">HND</option>
              <option value="bsc">BSc</option>
              <option value="">MSc/PGD/MBA</option>
            </select>
          </aside>
        </div>
        <div className="border-3 w-full lg:w-[50%] ">
          <label htmlFor="" className="block text-xl font-light pb-1 mt-3">
            Provide any information that will be helpful (e.g Department,
            format)
          </label>
          <textarea
            placeholder="Write something"
            className="w-full h-[40vh] p-3 border-[1px] border-gray-700"
          />
          <button className="w-full p-3 my-2 text-white text-xl font-semibold rounded shadow bg-[#db1e00]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default HireWriter;
