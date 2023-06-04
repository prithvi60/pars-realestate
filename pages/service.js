import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function service() {
  return (
    <div>
      <div className="py-3" style={{ background: "#000000e2" }}>
        <Header />
      </div>
      <section
        className="h-screen px-4 font-body"
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
          What we do
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="text-left text-sm font-semibold text-black">
            • Residential Buildings <br />• Institutional Buildings <br />•
            Factory Buildings
            <br /> • Irrigation Infrastructures
            <br /> • Water Management Infrastructures
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
