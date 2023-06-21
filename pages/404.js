import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Contact() {
  return (
    <div className="text-black bg-white">
      <NextSeo
        title="404: Intermont"
        description="404 page for all our missing pages"
        canonical="https://localhost:3000/404"
        openGraph={{
          url: "https://localhost:3000/404",
        }}
      />
      <Head>
        <title>Intermont</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="py-3" style={{ background: "#908f8f" }}>
        <Header />
      </div>
      <div
        className="flex flex-col justify-center mx-auto mt-32 text-center max-w-2x1"
        style={{
          minHeight: "88vh",
        }}
      >
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          404 – Unavailable
        </h1>
        <br />
        <a
          className="w-64 p-1 mx-auto font-bold text-center text-white border border-gray-500 rounded-lg sm:p-4"
          href="/"
        >
          Return Home
        </a>
      </div>
      <div className="mt-64"></div>
      <Footer />
    </div>
  );
}
