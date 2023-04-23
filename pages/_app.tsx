import Comments from "@/components/Comments";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainComments from "@/components/MainComments";
import Nav from "@/components/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="relative">
        <Header />
        <Nav />
        <Component {...pageProps} />
        <MainComments />
        <Comments />
        <Footer />
      </div>
    </>
  );
}
