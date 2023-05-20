import TopicList from "@/components/TopicList";
import { GoSearch } from "react-icons/go";
import { useRouter } from "next/router";
import { client } from "@/sanity";
import Link from "next/link";

type topics = {
  title: string;
  id: number;
};
interface postProps {
  posts: SanityPost[];
}
interface SanityPost {
  _id: string;
  title: string;
}

type Topics = topics[];
const Topics = ({ posts }: postProps) => {
  const routers = useRouter();
  const { params } = routers.query;

  return (
    <>
      <div className="w-[80%] mx-auto my-10 flex">
        <div className="w-full lg:w-[100%]  ">
          <div className=" flex border-2 border-[#db1e00] mx-auto ">
            <input
              placeholder="SEARCH PROJECT TOPIC"
              type="text"
              className="w-[80%] py-4 px-5 border-none outline-none"
            />
            <button className="bg-[#db1e00] text-white w-[calc(100%-80%)] flex justify-center items-center">
              <GoSearch />
            </button>
          </div>

          <h1 className="bg-[#db1e00] mt-5 py-3 text-center text-white text-[14px] lg:text-xl">
            ACTUARIAL SCIENCE PROJECT TOPICS AND MATERIALS
          </h1>
          <div>
            {posts.map((topic: SanityPost) => {
              return (
                <>
                  <Link href={`/topics/${topic._id}`}>
                    <TopicList key={topic._id} topic={topic} />
                  </Link>
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

export async function getStaticProps() {
  const query = `*[_type == "post"] {
    _id,
    title,
  }`;
  const posts = await client.fetch<SanityPost[]>(query);
  return {
    props: {
      posts,
    },
  };
}
