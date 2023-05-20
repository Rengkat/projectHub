import { Inter } from "next/font/google";
import { cards } from "@/components/assets";
import InfoCard from "@/components/InfoCard";
import SubTopics from "@/components/SubTopics";
import { faq } from "@/components/assets";
import Faq from "@/components/Faq";
import Link from "next/link";
import { client } from "@/sanity";

const inter = Inter({ subsets: ["latin"] });
interface Category {
  _id: string;
  category: string;
}
interface Props {
  category: Category[];
}
export default function Home({ category }: Props) {
  // create a new object to store the category count
  const categoryCount: any = {};

  // iterate through the array and count the number of occurrences for each category
  category.forEach((category) => {
    categoryCount[category.category] =
      (categoryCount[category.category] || 0) + 1;
  });

  // extract unique categories
  const uniqueCategories = Array.from(
    new Set(category.map((category) => category.category))
  );

  return (
    <main className="  ">
      <div className=" lg:h-[80vh] flex flex-col lg:flex-row ">
        <div className="hero lg:w-[65%] h-[60vh] lg:h-[80vh]">
          <div className="w-[90%] lg:w-[80%] absolute z-[2] mt-[4rem] lg:mt-[8rem]  ml-6 lg:ml-12">
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
              <h1>Project topics and materials</h1>
              <h1 className="py-1">for your research</h1>
            </div>
            <p className="py-2 w-[70%] font-light lg:font-semibold lg:text-[20px] text-white">
              Find complete project topics and and research materials for all
              field and levels.
            </p>
            <Link href={"/topics"} className=" hidden lg:block">
              <button className="py-1 px-2 lg:py-2 lg:px-5 rounded shadow bg-[#db1e00] lg:font-semibold mt-2 text-white hover:bg-[#fb3416]">
                Check it Out
              </button>
            </Link>
          </div>
        </div>
        <div className=" topics w-full lg:w-[35%] lg:overflow-auto p-5">
          <SubTopics
            category={uniqueCategories}
            categoryCount={categoryCount}
          />
        </div>
      </div>
      {/* info cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-[80%] mx-auto gap-5 my-[5rem] lg:h-[50vh] ">
        {cards.map((card) => {
          return (
            <>
              <div key={card.id} className="border-2 border-black ">
                <InfoCard card={card} />
              </div>
            </>
          );
        })}
      </div>
      {/* faq */}
      <div className="bg-[#fceeed] py-20 ">
        <div className="w-[80%] mx-auto">
          <h1 className="text-center font-bold text-xl lg:text-3xl mb-10">
            Frequent Asked Questions (FAQ)
          </h1>
          <div>
            {faq.map((ques) => {
              return (
                <>
                  <Faq key={ques.id + ques.question} question={ques} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
export const getStaticProps = async () => {
  const query = `*[_type == "post"]{
  category, _id
}`;
  const category = await client.fetch(query);

  // console.log(category);
  return {
    props: {
      category,
    },
  };
};
