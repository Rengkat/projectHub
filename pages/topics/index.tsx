import SubTopics from "@/components/SubTopics";
import TopicList from "@/components/TopicList";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { useRouter } from "next/router";
const topics = [
  {
    title:
      "Lorem ipsum dolor sit amet consectetur. Non, molestiae  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, minus!.",
    id: Math.random() * 400,
  },
  {
    title:
      "Lorem ipsum dolor sit amet .  dolor sit amet consectetur adipisicing elit. Est, minus!.",
    id: Math.random() * 400,
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur . Non, molestiae  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, minus!.",
    id: Math.random() * 400,
  },
  {
    title:
      "Lorem ipsum dolor sit amet . Non, molestiae  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, minus!.",
    id: Math.random() * 400,
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur . Non, molestiae  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, minus!.",
    id: Math.random() * 400,
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur . Non, molestiae  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, minus!.",
    id: Math.random() * 400,
  },
  {
    title:
      "Lorem ipsum dolor sit amet t. Non, molestiae  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, minus!.",
    id: Math.random() * 400,
  },
  {
    title:
      "Lorem ipsum dolor sit amet . Non, molestiae  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, minus!.",
    id: Math.random() * 400,
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, molestiae  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, minus!.",
    id: Math.random() * 400,
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, molestiae  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, minus!.",
    id: Math.random() * 400,
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, molestiaed  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, minus!.",
    id: Math.random() * 400,
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, molestiaed  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, minus!.",
    id: Math.random() * 400,
  },
];
type topics = {
  title: string;
  id: number;
};
type Topics = topics[];
const Topics = () => {
  const routers = useRouter();
  const { params } = routers.query;
  // console.log(params);
  return (
    <>
      <div className="w-[90%] mx-auto my-10 flex">
        <div className="w-[35%] hidden lg:block">
          <SubTopics />
        </div>
        <div className="w-full lg:w-[65%]  ">
          <div className=" flex border-2 border-[#db1e00] mx-auto ">
            <input
              placeholder="SEARCH PROJECT TOPIC"
              type="text"
              className="w-[80%] py-2 px-5 border-none outline-none"
            />
            <button className="bg-[#db1e00] text-white w-[calc(100%-80%)] flex justify-center items-center">
              <GoSearch />
            </button>
          </div>
          <h1 className="bg-[#db1e00] mt-5 py-3 text-center text-white text-[14px] lg:text-xl">
            ACTUARIAL SCIENCE PROJECT TOPICS AND MATERIALS
          </h1>
          <div>
            {topics.map((topic: topics) => {
              return (
                <>
                  <TopicList key={topic.id} topic={topic} />
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-[#fceeed] w-full">
        <div className="w-[80%] mx-auto text-center p-[2rem] lg:p-[5rem] font-light text-[18px] lg:text-2xl">
          <h1 className="text-2xl lg:text-5xl capitalize">
            Your project topic not in the list?
          </h1>
          <h1 className="py-1 lg:py-3">Don't worry, We got you cover</h1>
          <p>
            Hire a writer or submit your topic expert for the work or resources
          </p>
          <button className="px-3 py-2 lg:py-2 text-[14px] lg:px-5 font-semibold rounded shadow bg-[#db1e00] text-white my-2">
            Hire Writer
          </button>
        </div>
      </div>
    </>
  );
};

export default Topics;
// export async function fetStaticPath() {
//   return {
//     path: [{ params: { topicId: "1" } }],
//   };
// }
// export async function getStaticProps() {}
