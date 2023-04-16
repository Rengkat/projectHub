import Image from "next/image";
import { Inter } from "next/font/google";
import { cards } from "@/components/assets";
import InfoCard from "@/components/InfoCard";
import SubTopics from "@/components/SubTopics";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="  ">
      <div className=" lg:h-[80vh] flex flex-col lg:flex-row ">
        <div className="hero lg:w-[65%] h-[60vh] lg:h-[80vh]">
          <div className="w-[90%] lg:w-[80%] absolute z-[2] mt-[8rem]  ml-6 lg:ml-12">
            <div className="flex items-center gap-2">
              <div>
                <h4 className="text-[#db1e00] font-bold text-xl">GET YOUR</h4>
              </div>
              <div>
                <div className="h-[2px] bg-[#db1e00] w-[5rem] "></div>
                <div className="h-[2.5px] bg-[#db1e00] w-[3rem] mt-[5px]"></div>
              </div>
            </div>
            <div className=" text-3xl lg:text-5xl uppercase font-light text-white">
              <h1>Project topics and material</h1>
              <h1 className="py-1">for your research</h1>
            </div>
            <p className="py-2 w-[70%] font-light lg:font-semibold lg:text-[20px] text-white">
              Find complete project topics and and research materials for all
              field and levels and Hire expert data analyst to put you through.
            </p>
            <button className="py-1 px-2 lg:py-2 lg:px-5 rounded shadow bg-[#db1e00] lg:font-semibold mt-2 text-white hover:bg-[#fb3416]">
              Check it Out
            </button>
          </div>
        </div>
        <div className=" topics w-full lg:w-[35%] lg:overflow-auto p-5">
          <SubTopics />
        </div>
      </div>
      {/* info cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-[80%] mx-auto gap-5 my-[5rem] h-[50vh] ">
        {cards.map((card) => {
          return (
            <>
              <div className="border-2 border-black ">
                <InfoCard card={card} />
              </div>
            </>
          );
        })}
      </div>
    </main>
  );
}
