import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero1 from "../public/images/hero/1.jpg";
import FloatingButton from "../components/FloatingButton";

export default function sectors() {
  return (
    <div className="relative">
      <div className="py-3" style={{ background: "#908f8f" }}>
        <Header />
      </div>
      <section
        className=" px-8 relative"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          minHeight:"88vh"
        }}
      >
        <div
          className="font-bold text-black text-3xl pt-20 md:pb-8 font-heading text-center"
          style={{
            textDecoration: "underline",
            textDecorationColor: "#dbc07c",
          }}
        >
          OTHER SECTORS
        </div>
        {/* <div className="flex flex-col md:flex-row gap-8"> */}
        <div class="flex flex-wrap justify-center md:mb-8">
          {/* <div class="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-4/12 md:px-3 lg:px-6 font-semibold text-black">
            Content for Our venture
          </div> */}
          <div class=" w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-4/12 md:px-3 lg:px-6 md:border-r">
            <p class="flex flex-col items-center mb-6 text-black dark:text-neutral-300 text-center">
              <img
                src={"/parslogo.webp"}
                alt="logo"
                style={{
                  objectFit: "cover",
                  height: "150px",
                  width: "150px",
                  // background: "#ffffff",
                }}
              ></img>
              <span className="font-bold font-heading">PARS Engineering Pvt Ltd</span>
            </p>
            <p class="mb-2 text-black dark:text-neutral-300 text-xs md:text-sm font-body">
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
          <div class=" w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-4/12 md:px-3 lg:px-6">
            <p class="flex flex-col items-center mb-6 text-black dark:text-neutral-300">
              <img
                src={"/kanchilogo.png"}
                alt="logo"
                className={"text-center"}
                style={{
                  objectFit: "cover",
                  height: "150px",
                  width: "150px",
                  // background: "#ffffff",
                }}
              ></img>
              <span className="font-bold font-heading">Kanchi Mining Projects</span>
            </p>
            <p class="mb-2 text-black dark:text-neutral-300 text-xs md:text-sm font-body">
              Kanchi Mining Projects Private Limited was incorporated in the
              year 2018 with its mining and processing facility located at
              Uthiramerur Taluk of Kanchipuram District. Currently, Kanchi
              Mining Projects is one among the major suppliers of Blue metals in
              Tamilnadu. Its outstanding production capacity of 350 Metric
              Tonnes per hour enables to deliver the product best in Quality,
              Quantity and Time. The good reputation for the company among the
              clients makes it a preferred supplier for Blue metals for various
              mega infrastructure projects such roads, irrigation
              infrastructure, buildings, bridges etc.
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
