import { useState, useEffect } from "react";

const CommentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurName] = useState("");
  const [institution, setInstitution] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (
      firstName.trim() === "" ||
      surname.trim() === "" ||
      institution.trim() === "" ||
      comment.trim()
    ) {
      // message disappear after 2 seconds
      setErr("Please enter all fields");
    }
    event.preventDefault();
    setLoading(true);
    const request = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ surname, firstName, institution, comment }),
    });
    const data = await request.json();
    setTimeout(() => {
      setSubmitted(false);
    }, 2000);
    setSubmitted(true);

    setFirstName("");
    setSurName("");
    setInstitution("");
    setComment("");
    setLoading(false);
  };
  return (
    <div className="w-[80%] mx-auto my-[2rem]">
      <h1 className="text-3xl font-light py-2 lg:py-5">Leave a comment</h1>

      {submitted && (
        <p className="text-green-500 font-semibold">
          Comment submitted! Thanks
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-[40%]">
          <label htmlFor="firstName">First name:</label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            required
            className="w-full lg:w-full block px-2 py-3 lg:mb-5 border-slate-500 border-[1px]"
            type="text"
            placeholder="Enter first name"
          />
          <label htmlFor="surname">Surname:</label>
          <input
            onChange={(e) => setSurName(e.target.value)}
            value={surname}
            required
            className="w-full lg:w-full block px-2 py-3 lg:mb-5 border-slate-500 border-[1px]"
            type="text"
            placeholder="Enter surname"
          />
          <label htmlFor="institutionName">Institution name:</label>
          <input
            onChange={(e) => setInstitution(e.target.value)}
            value={institution}
            required
            className="w-full lg:w-full block px-2 py-3 border-slate-500 border-[1px]"
            type="text"
            placeholder="Enter institution name"
          />
        </div>
        <div className="w-full lg:w-[60%]">
          <label htmlFor="comment" className="block">
            Comment:
          </label>
          <textarea
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            required
            placeholder="Write something..."
            className="border-[1px] p-2 block w-full border-slate-500 h-[20vh] lg:h-[26vh]"
            name="comment"
          />

          <div className="flex">
            <button
              type="submit"
              className="w-full lg:w-[20%] py-3 px-10 text-white font-semibold my-3 lg:my-1 rounded shadow bg-[#db1e00]">
              {loading ? "Loading..." : "Send"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
