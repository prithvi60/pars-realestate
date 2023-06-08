import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import { TestimonialCarousal } from "../components/TestimonialCarousal";

export default function clients() {
  return (
    <>
    <div className="relative">
      <div className="py-3" style={{ background: "#838383e2" }}>
        <Header />
      </div>
      <section
        className="px-8"
        style={{
          backgroundImage: "url(/pattern.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <div
          className="font-bold text-black text-3xl pt-20 pb-8 font-heading text-center"
          style={{
            textDecoration: "underline",
            textDecorationColor: "#dbc07c",
          }}
        >
          Our Clients Say
        </div>
        <div className="w-full mr-2" style={{ height: "400px" }}>
          <TestimonialCarousal />
        </div>
      </section>
      <FloatingButton />
    </div>
      <Footer />
      </>

  );
}
