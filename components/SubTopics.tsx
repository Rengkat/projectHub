import { GoSearch } from "react-icons/go";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import React, { useState } from "react";
import Link from "next/link";
import { v4 as uuid } from "uuid";
type Category = string;
interface Props {
  category: Category[];
  categoryCount: any;
}
const SubTopics = ({ category, categoryCount }: Props) => {
  const id = uuid();

  const [inputFilteredValue, setInputFilteredValue] = useState("");

  const filterInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputFilteredValue(e.target.value);
  };
  const filteredCategories = category.filter((item) =>
    item.toLocaleLowerCase().includes(inputFilteredValue.toLocaleLowerCase())
  );

  return (
    <div className="w-[90%] mx-auto">
      <div className=" flex border-2 border-[#db1e00] mx-auto ">
        <input
          onChange={filterInput}
          placeholder="SEARCH PROJECT CATEGORY"
          type="text"
          className="w-[80%] py-2 px-5 border-none outline-none"
        />
        <button className="bg-[#db1e00] text-white w-[calc(100%-80%)] flex justify-center items-center">
          <GoSearch />
        </button>
      </div>
      <div className="py-5 ">
        {filteredCategories.map((cat) => {
          return (
            <>
              <Link href={"/topics"} key={id + cat}>
                <div
                  // key={cat}
                  className="hover:bg-[#f1bbb3] uppercase flex gap-3 items-center text-[16px] md:text-[20px] py-[5px] border-b-[1px] border-[#db1e00]">
                  <aside>
                    <BsFillJournalBookmarkFill className="text-[#db1e00] " />
                  </aside>
                  <aside>{cat}</aside>
                  <aside className="bg-[#db1e00] py-2 px-4 rounded-md text-white ml-auto">
                    {categoryCount[cat]}
                  </aside>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SubTopics;
