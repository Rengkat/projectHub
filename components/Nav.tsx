import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      {/* ==========Desktop nav ================ */}
      <nav className=" hidden lg:block py-3 sticky top-0 z-10 bg-[#db1e00] ">
        <div className="desktop-links">
          <Link className="links" href={"/"}>
            Home
          </Link>
          <Link className="links" href={"/topics"}>
            Project Topics
          </Link>
          <Link className="links" href={"/hire-writer"}>
            Hire a Writer
          </Link>
          <Link className="links" href={"/services"}>
            Services
          </Link>
          <Link className="links" href={"/pricing"}>
            Pricing
          </Link>
          <Link className="links" href={"/"}>
            Contact
          </Link>
        </div>
      </nav>
      {/*============ Mobile nav================= */}
      <div className="mobile-nav">
        <Link href={"/"} className=" flex gap-1 items-center">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <p className="logo">ProjectHub</p>
        </Link>
        <BsFillMenuButtonWideFill
          onClick={handleClick}
          fontSize={30}
          className=" w-10 h-10 text-red-500 cursor-pointer text-right"
        />
        {/* Hidden nav */}

        <nav
          className={`${
            isOpen ? "right-0" : "-right-full hidden"
          } mobile-links `}>
          <GrClose fontSize={30} onClick={handleClick} className="text-white" />

          <li className="py-2 text-white text-xl font-semibold pl-6">
            <Link href={"/"}>Home</Link>
          </li>
          <li className=" text-white text-xl font-semibold pl-6">
            <Link className="" href={"/topics"}>
              Project Topics
            </Link>
          </li>
          <li className="py-2 text-white text-xl font-semibold pl-6">
            <Link href={"/"}>Hire a Writer</Link>
          </li>
          <li className="py-2 text-white text-xl font-semibold pl-6">
            <Link href={"/"}>Services</Link>
          </li>
          <li className="py-2 text-white text-xl font-semibold pl-6">
            <Link href={"/"}>Pricing</Link>
          </li>
          <li className="py-2 text-white text-xl font-semibold pl-6">
            <Link href={"/"}>Contact</Link>
          </li>
        </nav>
      </div>
    </>
  );
};

export default Nav;
