import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="headerStyle ">
        <Link href={"/"} className="hidden lg:flex gap-1 items-center">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <p className="logo">ProjectHub</p>
        </Link>
        <Link href={"/"} className="header-link">
          <FaPhoneAlt className="header-icon" />
          <p className=" text-sm md:text-xl">+2348063909226</p>
        </Link>
        <Link href={"/"} className="header-link">
          <FaPhoneAlt className="header-icon" />
          <p className=" text-sm md:text-xl">+2347011377154</p>
        </Link>
        <Link href={"/"} className="header-link hidden md:flex">
          <AiOutlineMail className="header-icon" />
          <p className=" text-sm md:text-xl">nyinkasamuel@gmail.com</p>
        </Link>
      </div>
    </>
  );
};

export default Header;
