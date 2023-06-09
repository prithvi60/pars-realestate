import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero1 from "../public/images/projects/opal/gallery5.jpg";
import FloatingButton from "../components/FloatingButton";

export default function about() {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    // window is accessible here.
    setWidth(window.innerWidth);
  }, []);
  return (
    <div className="relative">
      <div className="py-3" style={{ background: "#908f8f" }}>
        <Header />
      </div>
      <section
        className="md:ml-8 relative"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          minHeight:"88vh"
        }}
      >
        <div
          className="font-bold text-black text-3xl pt-20 pb-8 font-heading mx-8 
        text-center shrink-0 grow-0 basis-auto  md:w-7/12 
        "
          style={{
            textDecoration: "underline",
            textDecorationColor: "#dbc07c",
          }}
        >
          ABOUT INTERMONT LIFE
        </div>
        <div class="flex flex-wrap">
          <div class="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-8/12 md:px-3 lg:px-6">
            <div className="text-left text-sm  text-black font-body mx-8">
              Intermont Life is the brand of {" "}
              <span className="uppercase">Pars Engineering India Pvt Ltd </span>
              for its housing sector ventures. Intermont Living is
              established with the goal of upgrading people’s way of living
              through property development. The brand is jointly ventured by{" "}
            {" "}
              <span className="uppercase">
               Pars Engineering India Pvt Ltd {" "}
              </span>{" "}
               and ASHCON Developers Private Limited whose promoters had 
              completed their business education from the United Kingdom. Their
               education from the west has motivated them to cater customers
              with  projects carrying high quality and feel-good experience. ​
              The  promoters had already joint ventured and handed over two
              high  profile residential projects in the prime locations of
              Chennai.  The promoters had earned trust in the market as the
              result of  their approach with the stakeholders and supportive
              nature towards  customers after sales.
            </div>
          </div>

          <div class="w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-4/12">
            <img
              src={Hero1.src}
              alt="Picture of the artist"
              placeholder="blur"
              className="md:mb-24  md:absolute top-0 w-auto md:w-96"
              style={{
                height: width > 600 ? "100%" : "280px",
                width: width > 600 ? "inherit" : "100%",
                objectFit: "cover",
                // overflow: "hidden",
                objectPosition: "80% 0",
              }}
            />
          </div>
        </div>
      </section>
      <Footer />
      <FloatingButton />
    </div>
     );
}
