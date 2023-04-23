import React from "react";

const Comments = () => {
  return (
    <div className="w-[80%] mx-auto my-[2rem]">
      <h1 className="text-3xl font-light py-2 lg:py-5">Leave a comment</h1>
      <form className="flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-[40%]">
          <label htmlFor="firstName">First name:</label>
          <input
            className="w-full lg:w-full block px-2 py-3 lg:mb-5 border-slate-500 border-[1px]"
            type="text"
            placeholder="Enter first name"
          />
          <label htmlFor="surname">Surname:</label>
          <input
            className="w-full lg:w-full block px-2 py-3 lg:mb-5 border-slate-500 border-[1px]"
            type="text"
            placeholder="Enter surname"
          />
          <label htmlFor="institutionName">Institution name:</label>
          <input
            className="w-full lg:w-full block px-2 py-3 border-slate-500 border-[1px]"
            type="text"
            placeholder="Enter institution name"
          />
        </div>
        <div className="w-full lg:w-[60%]">
          <label htmlFor="comment" className="block">
            Comment:
          </label>
          <textarea
            placeholder="Write something..."
            className="border-[1px] p-2 block w-full border-slate-500 h-[20vh] lg:h-[26vh]"
            name="comment"
          />

          <div className="flex">
            <button className="w-full lg:w-[20%] py-3 px-10 text-white font-semibold my-3 lg:my-1 rounded shadow bg-[#db1e00]">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Comments;
