import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import Card from "../components/Card";

import R1 from "../public/images/hero/2.jpg";
import R2 from "../public/images/projects/whouse.png";

export default function projects() {
  const residential = [
    {
      image: R1,

      title: "ONE",
      des: `
       8 Flats 3 BHK 1,404 Sq.ft
Mandaveli, Chennai

       `,
      link: `/projects/one`,
    },
    {
      image: R2,
      title: `INTERMONT W-413`,

      des: `5 Flats 3BHK Stilt + 5 Floors 6,600 Sq.ft
    W Extension,
    Anna Nagar, Chennai`,
      link: `/projects/two`,
    },
  ];

  return (
    <div>
      <div className="py-3" style={{ background: "#838383e2" }}>
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
          Ongoing Projects
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
