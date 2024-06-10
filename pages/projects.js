import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import Card from "../components/Card";

import R2 from "../public/images/projects/hero1.jpg";
import R3 from "../public/images/projects/yara.jpg";

export default function projects() {
  const residential = [

    {
      image: R2,
      title: `INTERMONT W-413`,

      des: `5 Flats 3BHK 1,490 Sq.ft.
      West Extension, Anna Nagar, Chennai. `,
      link: `/projects/w-413`,
    },
    {
      image: R3,
      title: `YARA EAST COAST`,

      des: `Villa, East Facing , 4,500 Sq.ft, G+2, 3 Car parking,
      Sandeep Avenue, Palavakkam, Chennai. `,
      link: `/projects/yara`,
    },
  ];

  return (
    <div className="relative">
      <div className="py-3" style={{ background: "#908f8f" }}>
        <Header />
      </div>
      <section
        className="px-4 font-body"
        style={{
          // backgroundImage: "url(/pattern.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          minHeight: "88vh",
        }}
      >
        <div
          className="font-bold text-black text-2xl md:text-3xl pt-20 pb-8 font-heading flex w-full justify-center"
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
