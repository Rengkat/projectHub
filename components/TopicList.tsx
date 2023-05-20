import { FaUserGraduate } from "react-icons/fa";
interface SanityPost {
  _id: string;
  title: string;
}
type topics = {
  title: string;
  id: number;
};
interface TopicProp {
  topic: SanityPost;
}
const TopicList = ({ topic }: TopicProp) => {
  // console.log(topic);
  return (
    <div className="border-[1px] p-4 even:bg-slate-400 flex gap-2 items-start cursor-pointer hover:bg-[#ff030327] hover:opacity-70">
      <FaUserGraduate
        fontSize={20}
        className="text-slate-600 mt-1 w-[10%] lg:w-[5%]"
      />
      <h4 className=" uppercase text-[16px] text-slate-600">{topic.title}</h4>
    </div>
  );
};

export default TopicList;
