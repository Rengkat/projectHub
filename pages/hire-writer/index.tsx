import Head from "next/head";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
interface Comment {
  surname: string;
  firstName: string;
  comment: string;
  institution: string;
  _id: string;
}
type Comments = Comment[];

interface Props {
  comments: Comments;
}
const HireWriter = () => {
  const form: any = useRef(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectTopic, setProjectTopic] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [detailInfo, setDetailInfo] = useState("");
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // get the form info
    const template = {
      fullName,
      email,
      phone,
      projectTopic,
      qualification: educationLevel,
      detailInfo,
    };
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      template &&
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_USER_ID
    ) {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          template,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_USER_ID
        )
        .then(
          function () {
            setTimeout(() => {
              setSuccess(false);
            }, 4000);
            setSuccess(true);
          },
          function (error) {
            setTimeout(() => {
              setErr(false);
            }, 4000);
            setErr(true);
          }
        );
    }
    setDetailInfo("");
    setEducationLevel("");
    setEmail("");
    setFullName("");
    setPhone("");
    setProjectTopic("");
  };
  return (
    <>
      <Head>
        <title>Hire a writer</title>
        <meta
          name="description"
          content="Hire a writer for your project research and analysis in all fields of study and level of education."
        />
      </Head>
      <div className="w-[80%] mx-auto my-10">
        <h1 className=" text-[#db1e00] font-semibold text-[14px] lg:text-xl">
          KINDLY FILL THE FORM AND CHECK YOUR E-MAIL IMMEDIATELY!
        </h1>
        <p className=" font-semibold">Or call/ WhatsApp: +23480453836</p>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="lg:flex mt-5">
            <div className="border-3 w-full lg:w-[50%]">
              <aside>
                <label
                  className="block text-xl mt-3 font-light pb-1"
                  htmlFor="full name">
                  Name:
                </label>
                <input
                  required
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                  name="fullName"
                  className="w-full lg:w-[90%] p-3 border-[1px] border-gray-700"
                  type="text"
                  placeholder="Enter full name"
                />
              </aside>
              <aside>
                <label
                  className="block text-xl mt-3 font-light pb-1"
                  htmlFor="email">
                  Email:
                </label>
                <input
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  name="email"
                  className="w-full lg:w-[90%] p-3 border-[1px] border-gray-700"
                  type="email"
                  placeholder="Enter email"
                />
              </aside>
              <aside>
                <label
                  className="block text-xl mt-3 font-light pb-1"
                  htmlFor="phone">
                  Phone:
                </label>
                <input
                  required
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  className="w-full lg:w-[90%] p-3 border-[1px] border-gray-700"
                  type="text"
                  placeholder="Enter phone number"
                />
              </aside>
              <aside>
                <label
                  className="block text-xl mt-3 font-light pb-1"
                  htmlFor="topic">
                  Project Topic:
                </label>
                <input
                  required
                  name="projectTopic"
                  onChange={(e) => setProjectTopic(e.target.value)}
                  value={projectTopic}
                  className="w-full lg:w-[90%] p-3 border-[1px] border-gray-700"
                  type="text"
                  placeholder="Enter project topic"
                />
              </aside>
              <aside>
                <label
                  className="block text-xl mt-3 font-light pb-1"
                  htmlFor="qualification">
                  Education Level
                </label>
                <select
                  required
                  onChange={(e) => setEducationLevel(e.target.value)}
                  value={educationLevel}
                  className="w-full lg:w-[90%] p-3 border-[1px] border-gray-700"
                  name="qualification"
                  id="qualification">
                  <option value="NCE">NCE</option>
                  <option value="Diploma">OND (Diploma)</option>
                  <option value="HND">HND</option>
                  <option value="BSc">BSc</option>
                  <option value="MSc/PGD/MBA">MSc/PGD/MBA</option>
                </select>
              </aside>
            </div>
            <div className="border-3 w-full lg:w-[50%] ">
              <label htmlFor="" className="block text-xl font-light pb-1 mt-3">
                Provide any information that will be helpful (e.g Department,
                format)
              </label>
              <textarea
                required
                name="detailInfo"
                onChange={(e) => setDetailInfo(e.target.value)}
                value={detailInfo}
                placeholder="Write something"
                className="w-full h-[40vh] p-3 border-[1px] border-gray-700"
              />
              <button
                type="submit"
                className="w-full p-3 my-2 text-white text-xl font-semibold rounded shadow bg-[#db1e00]">
                Submit
              </button>
              {success ? (
                <p className="text-green-600 text-[18px] bg-green-200 p-2">
                  Request submitted successful{" "}
                </p>
              ) : err ? (
                <p className="text-red-600 text-[18px] bg-red-200 p-2">
                  Oops! Something went wrong
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default HireWriter;
