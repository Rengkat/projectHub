import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { AppContext } from "@/Context/appContext";
const Nav = () => {
  const { openMobileMenu, isMenuOpen } = useContext(AppContext);
  const routes = useRouter();
  const pathName = routes.pathname;

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
          <Link
            className={`links ${
              pathName === "/services" ? "bg-white text-[#db1e00]" : ""
            }`}
            href={"/services"}>
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
            href={"https://wa.me/+2348063909226"}
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
          onClick={() => openMobileMenu()}
          fontSize={30}
          className=" w-10 h-10 text-red-500 cursor-pointer z-[3] text-right absolute right-5 top-[4rem]"
        />
        {/* Hidden nav */}
        <div
          onClick={() => openMobileMenu()}
          className={`${
            isMenuOpen ? "block" : "hidden "
          } overlay bg-[#0606065a]`}>
          <nav className="mobile-links absolute right-0 top-[3rem]">
            <div className="text-white">
              <BsFillMenuButtonWideFill
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
              <Link href={"/services"}>Services</Link>
            </li>
            <li className="py-2 text-white text-xl font-semibold pl-6">
              <Link href={"/pricing"}>Pricing</Link>
            </li>
            <li className="py-2 text-white text-xl font-semibold pl-6">
              <Link href={"https://wa.me/+2348063909226"} target="_blank">
                Contact
              </Link>
            </li>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Nav;
