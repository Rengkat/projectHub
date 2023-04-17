import { BsPlusLg } from "react-icons/bs";
import { useState } from "react";
interface FAQ {
  question: string;
  answer: string;
  id: number;
}
interface QuestionProps {
  question: FAQ;
}
const Faq = ({ question }: QuestionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
      <div className="bg-[#db1e00] flex justify-between items-center p-2 lg:p-5 text-white border-y-[1px] border-white">
        <h1 className="font-bold text-[14px] lg:text-xl">
          {question.question}
        </h1>
        <BsPlusLg
          className="cursor-pointer text-[20px] lg:text-[40px]"
          onClick={handleToggle}
        />
      </div>
      <aside
        className={`bg-white p-2 lg:p-5 text-[13px] lg:text-xl ${
          isOpen ? "block" : "hidden"
        } `}>
        {question.answer}
      </aside>
    </div>
  );
};

export default Faq;
