import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <title>Services</title>
      </Head>
      <div className="w-full lg:w-[80%] mx-auto lg:my-[15rem]">
        <section className="flex flex-col-reverse lg:flex-row mt-[3rem] lg:mt-[8rem]">
          <aside className="lg:w-1/2 px-5 lg:px-[6rem] text-center pt-5 lg:pt-0">
            <h1 className="font-normal text-2xl lg:text-4xl lg:py-3">
              Get Your Project Materials
            </h1>
            <p className="lg:text-xl font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              beatae eum nemo aliquid neque delectus quae illum nobis qui ab.
            </p>
            <Link href={"/topics"}>
              <button className="py-1 lg:py-2 px-2 lg:px-5 my-3 bg-[#db1e00] text-white rounded">
                Check it Out
              </button>
            </Link>
          </aside>
          <aside className="w-full lg:w-1/2">
            <Image
              src={"/search.svg"}
              alt="Get material"
              width={100}
              height={100}
              className="w-[60%] mx-auto lg:w-full object-cover"
            />
          </aside>
        </section>
        <section className="flex flex-col lg:flex-row mt-[6rem] lg:mt-[15rem]">
          <aside className="lg:w-1/2">
            <Image
              src={"/hire.svg"}
              alt="Get material"
              width={60}
              height={100}
              className="w-[60%] lg:w-[70%] mx-auto lg:mx-0 object-cover"
            />
          </aside>
          <aside className="lg:w-1/2 px-5 lg:px-0 text-center lg:text-start ">
            <h1 className="font-normal text-2xl lg:text-4xl lg:py-3 mt-5 lg:mt-0 pb-5">
              Hire a Writer for your Research
            </h1>
            <p className="lg:text-xl font-light lg:pr-[6rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              beatae eum nemo aliquid neque delectus quae illum nobis qui ab.
            </p>
            <Link href={"/hire-writer"}>
              <button className="py-1 lg:py-2 px-2 lg:px-5 my-3 bg-[#db1e00] text-white rounded">
                Hire a writer
              </button>
            </Link>
          </aside>
        </section>
        <section className="flex flex-col-reverse lg:flex-row mt-[6rem] lg:mt-[15rem] lg:mb-[8rem]">
          <aside className="lg:w-1/2 px-5 lg:px-0 text-center lg:text-start  lg:pr-[5rem]">
            <h1 className="font-normal text-2xl lg:text-4xl lg:py-3 py-3 ">
              Let us Analyze your Research Data
            </h1>
            <p className="lg:text-xl font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              beatae eum nemo aliquid neque delectus quae illum nobis qui ab.
            </p>
            <Link href={"/hire-writer"}>
              <button className="py-1 lg:py-2 px-2 lg:px-5 my-3 bg-[#db1e00] text-white rounded">
                Submit your Data
              </button>
            </Link>
          </aside>
          <aside className="lg:w-1/2">
            <Image
              src={"/analyse.svg"}
              alt="Get material"
              width={60}
              height={100}
              className="w-[60%] mx-auto lg:w-[70%] lg:mx-0 object-cover"
            />
          </aside>
        </section>
      </div>
    </>
  );
};

export default index;
