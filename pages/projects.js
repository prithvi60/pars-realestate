import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import Card from "../components/Card";

export default function projects() {
  return (
    <div>
      <Header />
      <section
        className="px-4"
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
          Projects
        </div>
        <h3 className="text-red-600 font-mono">Ongoing</h3>
        <div className="flex flex-col md:flex-row gap-8 flex-wrap pb-4 justify-center border-b">
          {[...Array(6)].map((item, idx) => {
            return <Card image={item} index={idx} />;
          })}
        </div>
        <h3 className="text-green-600 font-mono pt-2">Completed</h3>
        <div className="flex flex-col md:flex-row gap-8 flex-wrap pb-4 justify-center">
          {[...Array(3)].map((item, idx) => {
            return <Card image={item} index={idx} />;
          })}
        </div>
      </section>
      <Footer />
      <FloatingButton />
    </div>
  );
}
