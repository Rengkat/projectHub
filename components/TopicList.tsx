import { FaUserGraduate } from "react-icons/fa";
type topics = {
  title: string;
  id: number;
};
interface TopicProp {
  topic: topics;
}
const TopicList = ({ topic }: TopicProp) => {
  return (
    <div className="border-x-[1px] p-2 even:bg-slate-200 flex gap-2 items-start">
      <FaUserGraduate fontSize={20} className="text-slate-600" />
      <h4 className=" uppercase text-sm text-slate-600">{topic.title}</h4>
    </div>
  );
};

export default TopicList;
