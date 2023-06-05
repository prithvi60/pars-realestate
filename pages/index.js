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
        title="PARS"
        description="PARS ENGINEERING INDIA PVT LTD"
        canonical="/"
        openGraph={{
          url: "/",
        }}
      />
      <Head>
        <title>Intermont</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Main />
      <FloatingButton />
    </div>
  );
}
