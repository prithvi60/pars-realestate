import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero1 from "../public/images/hero/1.jpg";
import Image from "next/image";
import FloatingButton from "../components/FloatingButton";

export default function sectors() {
  return (
    <div>
      <div className="py-3" style={{ background: "#838383e2" }}>
        <Header />
      </div>
      <section
        className=" px-8 relative"
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
          Other Sectors
        </div>
        {/* <div className="flex flex-col md:flex-row gap-8"> */}
        <div class="flex flex-wrap justify-center mb-8">
          {/* <div class="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-4/12 md:px-3 lg:px-6 font-semibold text-black">
            Content for Our venture
          </div> */}
          <div class="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-4/12 md:px-3 lg:px-6 md:border-r">
            <p class="mb-6 text-black dark:text-neutral-300">
              <img
                src={"/parslogo.webp"}
                alt="logo"
                style={{
                  objectFit: "cover",
                  height: "150px",
                  width: "150px",
                  background: "#ffffff",
                }}
                className="shadow-md  md:block"
              ></img>
              <span className="font-bold">PARS Engineering Pvt Ltd</span>
            </p>
            <p class="mb-2 text-black dark:text-neutral-300 text-xs md:text-sm">
              PARS Engineering India Pvt Ltd was incorporated in the year 2013,
              head quartered at Salem, Tamilnadu and having its corporate office
              at Chennai, Tamilnadu. The company holds the primary goal of
              upgrading nation’s infrastructure joining hands with government,
              public and private stakeholders. Over the years, the company has
              gained tremendous experience in the field of construction.
              Currently, it managed to diversify technical and managerial
              knowledge in various divisions of construction like buildings,
              irrigations and water management infrastructures. The company
              never fails to incorporate the management of time, quality and
              cost for the benefits of its stake holders.
            </p>
          </div>
          <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-4/12 md:px-3 lg:px-6">
            <p class="mb-6 text-black dark:text-neutral-300">
              <img
                src={"/kanchilogo.jpg"}
                alt="logo"
                style={{
                  objectFit: "cover",
                  height: "150px",
                  width: "150px",
                  background: "#ffffff",
                }}
                className="shadow-md  md:block"
              ></img>
              <span className="font-bold">Kanchi Mining Projects</span>
            </p>
            <p class="mb-2 text-black dark:text-neutral-300 text-xs md:text-sm">
              Kanchi mining projects was incorporated in the year 2013, head
              quartered at Salem, Tamilnadu and having its corporate office at
              Chennai, Tamilnadu. The company holds the primary goal of
              upgrading nation’s infrastructure joining hands with government,
              public and private stakeholders. Over the years, the company has
              gained tremendous experience in the field of construction.
              Currently, it managed to diversify technical and managerial
              knowledge in various divisions of construction like buildings,
              irrigations and water management infrastructures. The company
              never fails to incorporate the management of time, quality and
              cost for the benefits of its stake holders.
            </p>
          </div>
        </div>
        {/* </div> */}
      </section>
      <Footer />
      <FloatingButton />
    </div>
  );
}
