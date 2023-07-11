import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import FloatingButton from "../components/FloatingButton";


export default function Home() {
  return (
    <div className="text-black font-body">
      <NextSeo
        title="Intermont Life"
        description="Your home defines you"
        canonical="/"
        openGraph={{
          url: "/",
        }}
      />
      <Head>
        <title>Intermont | Your home defines you</title>
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <Main />
      <FloatingButton />
    </div>
  );
}
