import { useEffect, useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import MainComments from "./MainComments";
import Footer from "./Footer";
import CommentForm from "./CommentForm";
import Image from "next/image";
import Link from "next/link";
interface Props {
  children: React.ReactNode;
}
interface Comment {
  _id: string;
  _type: string;
  surname: string;
  firstName: string;
  institution: string;
  comment: string;
}

const Layout = ({ children }: Props) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    async function fetchComments() {
      const res = await fetch("/api/getComment");
      const data = await res.json();
      setComments(data.data);
    }

    fetchComments();
  }, []);

  return (
    <div className="relative">
      <Header />
      <Nav />
      {children}
      <MainComments comments={comments} />
      <CommentForm />
      <Footer />
      <Link href={"https://wa.me/+2348063909226"}>
        <Image
          src="/whatsapp.png"
          alt="+2348063909226"
          height={40}
          width={40}
          className="fixed bottom-[10%] right-8"
        />
      </Link>
    </div>
  );
};

export default Layout;
