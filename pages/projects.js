import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import Card from "../components/Card";
import C1 from "../public/images/projects/cauvery.png";
import C2 from "../public/images/projects/fivestar.png";
import C3 from "../public/images/projects/sliveranklet.jpg";
import C4 from "../public/images/projects/labourcomm.png";
import C5 from "../public/images/projects/underground.png";

import R1 from "../public/images/hero/1.jpg";
import R2 from "../public/images/hero/2.jpg";

export default function projects() {
  const contract = [
    {
      image: C1,
      title: "MODERNISATION OF CAUVERY BASIN THROUGH MAYILADUTHURAI DISTRICT",
      des: "Extension, Renovation and Modernising of Cauvery basin that runs through Mayiladuthurai districts. This project aids in effective irrigation of its ayacuts through the means of proper water storage and discharges mechanism with widened and strengthen river bed.",
    },
    {
      image: C2,

      title: "LUXURY 5-STAR BEACH RESORT HOTEL @ MAHABALIPURAM",
      des: `This is one of the exciting project we are working on. Constructing a exotic
       beach resort hotel with 155-keys located within the close proximity of
       Shore-Temple at Mahabalipuram. We are striving to provide at most built
       quality as “Hilton Hotels” could be the potential brand tie-up with the
       owners.`,
    },
    {
      image: C3,
      title: "SILVER ANKLET COMPLEX @ SALEM, TAMILNADU",
      des: `
       102 unit production facility for the Silver Anklet manufactures. This production
facility consist of 3 floors and ground floor having exhibition hall combined
with parking facility
       `,
    },
    {
      image: C4,

      title: `LABOUR COMMISSIONER OFFICE AT ANNA NAGAR, CHENNAI`,
      des: `Upcoming Head Office of Labour department of Tamilnadu which facilitates
      the complete operation of the department like court halls, conference halls,
      commissioner and deputy commissioner chambers, file store rooms, office
      and staff rooms etc. `,
    },
    {
      image: C5,

      title: `
      
    UNDERGROUND WATER CHANNEL AT PORUR, CHENNAI
    `,
      des: `This project connect two major water sources of Greater Chennai Corporation
      namely Porur tank and Adayar River. The water body is connected through
      the underground channel for the length of 3.3 Kms. Execution of this project is highly challenging as we work in highly traffic proximity. We are proud to
      execute this project as we are time boundly working with the government
      as this project mitigates the flooding of nearby town during monsoon and
      avoids major disaster.`,
    },
  ];
  const residential = [
    {
      image: R1,

      title: "OPAL",
      des: `
       6 Flats 3 BHK Stilt + 3 Floors 12,156 Sq.ft
Srinagar Colony,
Saidapet, Chennai

       `,
    },
    {
      image: R2,
      title: `INTERMONT W-413`,

      des: `5 Flats 3BHK Stilt + 5 Floors 6,600 Sq.ft
    W Extension,
    Anna Nagar, Chennai`,
    },
  ];

  return (
    <div>
      <div className="py-3" style={{ background: "#000000e2" }}>
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
          Projects
        </div>
        <h3
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
        </div>
        <h3
          className="font-heading py-2 font-bold md:flex w-screen justify-center"
          style={{ color: "orange" }}
        >
          Residential Portfolio
        </h3>
        <div className="flex flex-col md:flex-row gap-8 flex-wrap pb-4 justify-center">
          {residential.map((item, idx) => {
            return (
              <Card
                image={item.image}
                index={idx}
                title={item.title}
                des={item.des}
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
