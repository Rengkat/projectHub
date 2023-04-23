import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { useRouter } from "next/router";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const routes = useRouter();
  const pathName = routes.pathname;
  // console.log(pathName);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      {/* ==========Desktop nav ================ */}
      <nav className=" hidden lg:block py-3 sticky top-0 z-10 bg-[#db1e00] ">
        <div className="desktop-links">
          <Link
            className={`links ${
              pathName === "/" ? "bg-white text-[#db1e00]" : ""
            }`}
            href={"/"}>
            Home
          </Link>
          <Link
            className={`links ${
              pathName === "/topics" ? "bg-white text-[#db1e00]" : ""
            }`}
            href={"/topics"}>
            Project Topics
          </Link>
          <Link
            className={`links ${
              pathName === "/hire-writer" ? "bg-white text-[#db1e00]" : ""
            }`}
            href={"/hire-writer"}>
            Hire a Writer
          </Link>
          <Link className="links" href={"/"}>
            Services
          </Link>
          <Link
            className={`links ${
              pathName === "/pricing" ? "bg-white text-[#db1e00]" : ""
            }`}
            href={"/pricing"}>
            Pricing
          </Link>
          <Link
            className="links"
            href={"https://wa.me/+2348067581175"}
            target="_blank">
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
          className={`${isOpen ? "block right-0" : " hidden "} mobile-links `}>
          <div className="text-white">
            <BsFillMenuButtonWideFill
              onClick={handleClick}
              fontSize={30}
              className=" w-12 h-12 text-white cursor-pointer pl-6"
            />
          </div>

          <li className="py-2 text-white text-xl font-semibold pl-6">
            <Link href={"/"}>Home</Link>
          </li>
          <li className=" text-white text-xl font-semibold pl-6">
            <Link className="" href={"/topics"}>
              Project Topics
            </Link>
          </li>
          <li className="py-2 text-white text-xl font-semibold pl-6">
            <Link href={"/hire-writer"}>Hire a Writer</Link>
          </li>
          <li className="py-2 text-white text-xl font-semibold pl-6">
            <Link href={"/"}>Services</Link>
          </li>
          <li className="py-2 text-white text-xl font-semibold pl-6">
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li className="py-2 text-white text-xl font-semibold pl-6">
            <Link href={"https://wa.me/+2348067581175"}>Contact</Link>
          </li>
        </nav>
      </div>
    </>
  );
};

export default Nav;
