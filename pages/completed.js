import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import Card from "../components/Card";

import R1 from "../public/images/hero/1.jpg";
import R2 from "../public/images/projects/imperial.png";

export default function completedprojects() {
  //
  const residential = [
    {
      image: R1,

      title: "OPAL",
      des: `
      6 Flats  3BHK  2026 Sq.ft. 
      Srinagar Colony, Saidapet, Chennai.

       `,
      link: `/projects/opal`,
    },
    {
      image: R2,
      title: `IMPERIAL`,

      des: `12 Flats  3 BHK 1227-1551 Sq.ft. 
      Norton Street, Mandaveli,
      Chennai.`,
      link: `/projects/imperial`,
    },
  ];

  return (
    <div>
      <div className="py-3" style={{ background: "#908f8f" }}>
        <Header />
      </div>
      <section
        className="px-4 font-body"
        style={{
          // backgroundImage: "url(/pattern.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          minHeight:"88vh"
        }}
      >
        <div
          className="font-bold text-black text-2xl md:text-3xl pt-20 pb-8 font-heading flex w-full justify-center text-center"
          style={{
            textDecoration: "underline",
            textDecorationColor: "#dbc07c",
          }}
        >
          COMPLETED PROJECTS
        </div>
        {/* <h3
          className=" font-heading font-bold py-2 md:flex w-screen justify-center"
          style={{ color: "orange" }}
        >
          Contract portfolio
        </h3>
        <div className="flex flex-col md:flex-row gap-8 flex-wrap pb-4 justify-center border-b">
          {contract.map((item, idx) => {
            return (
              <Card
                image={item.image}
                index={idx}
                title={item.title}
                des={item.des}
              />
            );
          })}
        </div> */}
        {/* <h3
          className="font-heading py-2 font-bold md:flex w-screen justify-center"
          style={{ color: "orange" }}
        >
          Residential Portfolio
        </h3> */}
        <div className="flex flex-col md:flex-row gap-8 flex-wrap pb-4 justify-center">
          {residential.map((item, idx) => {
            return (
              <Card
                image={item.image.src}
                index={idx}
                title={item.title}
                des={item.des}
                link={item.link}
              />
            );
          })}
        </div>
      </section>
      <Footer />
      <FloatingButton />
    </div>
  );
}
