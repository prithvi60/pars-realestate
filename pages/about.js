import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero1 from "../public/images/hero/1.jpg";
import Image from "next/image";
import FloatingButton from "../components/FloatingButton";

export default function about() {
  return (
    <div>
      <div className="py-3" style={{ background: "#000000e2" }}>
        <Header />
      </div>
      <section
        className="md:h-screen px-8 relative"
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
          About PARS
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="text-left text-sm font-semibold text-black font-body">
            PARS Engineering India Pvt Ltd was incorporated in the year 2013,
            head quartered at Salem, Tamilnadu and having its corporate office
            at Chennai, Tamilnadu. The company holds the primary goal of
            upgrading nation's infrastructure joining hands with government,
            public and private stakeholders. Over the years, the company has
            gained tremendous experience in the field of construction.
            Currently, it managed to diversify technical and managerial
            knowledge in various divisions of construction like buildings,
            irrigations and water management infrastructures. The company never
            fails to incorporate the management of time, quality and cost for
            the benefits of its stake holders.
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
