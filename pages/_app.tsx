import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppProvider, { AppContext } from "../Context/appContext";
import Layout from "@/components/Layout";
import Head from "next/head";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ProjectHub</title>
      </Head>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </>
  );
}
