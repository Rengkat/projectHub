import { GoSearch } from "react-icons/go";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
const me = [1, 2, 3, 6, 5, 3, 7, 3, 5, 6, 4, 3, 6, 7, 3, 2, 5, 7];
const SubTopics = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className=" flex border-2 border-[#db1e00] mx-auto ">
        <input
          placeholder="SEARCH PROJECT CATEGORY"
          type="text"
          className="w-[80%] py-2 px-5 border-none outline-none"
        />
        <button className="bg-[#db1e00] text-white w-[calc(100%-80%)] flex justify-center items-center">
          <GoSearch />
        </button>
      </div>
      <div className="py-5">
        {me.map((m: any, i: number) => {
          return (
            <>
              <div
                key={i}
                className=" uppercase flex gap-3 items-center text-[16px] md:text-[20px] py-[5px] border-b-[1px] border-[#db1e00]">
                <aside>
                  <BsFillJournalBookmarkFill className="text-[#db1e00] " />
                </aside>
                <aside>Lorem ipsum dolor sit amet.</aside>
                <aside className="bg-[#db1e00] p-[4px] rounded-md text-white ml-auto">
                  120
                </aside>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SubTopics;
