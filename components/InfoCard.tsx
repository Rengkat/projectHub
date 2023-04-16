import Image from "next/image";
import { Card } from "./assets";
type CardProps = {
  card: Card;
};
const InfoCard = ({ card }: CardProps) => {
  return (
    <div className=" h-full flex justify-center items-center text-center p-5">
      <div>
        <Image
          src={card.logo}
          alt={card.title}
          width={60}
          height={60}
          className="mx-auto"
        />
        <h3 className="font-bold md:text-xl lg:px-[4rem]">{card.title}</h3>
        <button className="bg-[#db1e00] py-2 px-5 my-3 rounded-md shadow font-semibold text-white hover:bg-[#fb3416]">
          Check it Out
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
