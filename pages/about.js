import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero1 from "../public/images/projects/about.jpg";
import Image from "next/image";
import FloatingButton from "../components/FloatingButton";

export default function about() {
  return (
    <div>
      <div className="py-3" style={{ background: "#838383e2" }}>
        <Header />
      </div>
      <section
        className="px-8 relative"
        style={{
          backgroundImage: "url(/pattern.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <div
          className="font-bold text-black text-3xl pt-20 pb-8 font-heading"
          style={{
            textDecoration: "underline",
            textDecorationColor: "#dbc07c",
          }}
        >
          About INTERMONT LIVING
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="text-left text-sm  text-black font-body">
            Intermont Living is the brand of Pars Engineering India Pvt Ltd for
            its housing sector ventures. Intermont Living is established with
            the goal of upgrading people’s way of living through property
            development. The brand is jointly ventured by Pars Engineering India
            Private Limited and ASHCON Developers Private Limited whose
            promoters had completed their business education from the United
            Kingdom. Their education from the west has motivated them to cater
            customers with projects carrying high quality and feel-good
            experience. ​ The promoters had already joint ventured and handed
            over two high profile residential projects in the prime locations of
            Chennai. The promoters had earned trust in the market as the result
            of their approach with the stakeholders and supportive nature
            towards customers after sales.
          </div>
          <div className="">
            <Image
              src={Hero1}
              alt="Picture of the artist"
              placeholder="blur"
              className="mb-8 md:mb-24 rounded-md"
              style={{
                height: "100%",
                width: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>
      <Footer />
      <FloatingButton />
    </div>
  );
}
