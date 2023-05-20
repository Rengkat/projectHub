import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" bg-[#db1e00] h-[20vh] flex justify-between px-10">
      <Link href={"/"} className=" flex gap-1 items-center">
        <Image src="/logo.png" alt="logo" width={35} height={35} />
        <p className="logo">ProjectHub</p>
      </Link>
      <nav className="hidden lg:flex list-none items-center gap-3 ">
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
      </nav>
      <div className="flex text-white font-[20px] gap-3 items-center">
        <Link
          href="https://www.facebook.com/nennyinkaposh.samuel"
          target="_blank">
          <Image
            src={"/connection-82.png"}
            width={30}
            height={30}
            alt="facebook"
          />
        </Link>
        <Link href="https://instagram.com/sharpboynyinkasamuel" target="_blank">
          <Image
            src={"/instagram.png"}
            width={30}
            height={30}
            alt="instagram"
          />
        </Link>
        <Link href="https://twitter.com/Nyinka_Sharpboy" target="_blank">
          <Image src={"/twitter.png"} width={30} height={30} alt="twitter" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
