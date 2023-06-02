import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero1 from "../public/images/hero/1.jpg";
import Image from "next/image";
import FloatingButton from "../components/FloatingButton";

export default function about() {
  return (
    <div>
      <Header />
      <section
        className="md:h-screen px-4 relative"
        style={{
          backgroundImage: "url(/pattern.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <div
          className="font-bold text-black text-3xl pt-20 pb-8"
          style={{
            textDecoration: "underline",
            textDecorationColor: "#e7a646",
          }}
        >
          About PARS
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="text-left text-sm font-semibold text-black">
            Intermont Living is the brand of Pars Engineering India Pvt Ltd for
            its housing sector ventures. Intermont Living is established with
            the goal of upgrading people’s way of living through property
            development. The brand is jointly ventured by PARS ENGINEERING INDIA
            PVT LTD and ASHCON DEVELOPERS PVT LTD whose promoters had completed
            their business education from the United Kingdom. Their education
            from the west has motivated them to cater customers with projects
            carrying high quality and feel-good experience. The promoters had
            already joint ventured and handed over two high profile residential
            projects in the prime locations of Chennai. The promoters had earned
            trust in the market as the result of their approach with the
            stakeholders and supportive nature towards customers after sales.
          </div>
          <Image
            src={Hero1}
            alt="Picture of the artist"
            placeholder="blur"
            style={{
              // height: "100vh",
              // width:"100vw",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              objectFit: "cover",
            }}
          />
        </div>
      </section>
      <Footer />
      <FloatingButton />
    </div>
  );
}
