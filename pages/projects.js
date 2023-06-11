import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import Card from "../components/Card";

import R1 from "../public/images/hero/hero2.jpg";
import R2 from "../public/images/projects/hero1.jpg";

export default function projects() {
  const residential = [
    {
      image: R1,

      title: "ONE",
      des: `
      8 Flats  3 BHK  1,404 Sq.ft. Devanathan Street, Mandaveli, Chennai

       `,
      link: `/projects/one`,
    },
    {
      image: R2,
      title: `INTERMONT W-413`,

      des: `5 Flats 3BHK 1,320 Sq.ft.
      West Extension, Anna Nagar, Chennai. `,
      link: `/projects/w-413`,
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
        }}
      >
        <div
          className="font-bold text-black text-3xl pt-20 pb-8 font-heading md:flex w-screen justify-center"
          style={{
            textDecoration: "underline",
            textDecorationColor: "#dbc07c",
          }}
        >
          ONGOING PROJECTS
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
                image={item.image}
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
