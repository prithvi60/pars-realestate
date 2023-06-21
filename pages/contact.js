import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import Hero1 from "../public/images/projects/about.jpg";
export default function contact() {
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
      <div
        class=" md:pl-6 text-black relative"
        style={{
          // backgroundImage: "url(/pattern.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <section class=" font-body relative" style={{ minHeight:"88vh"}}>
          <div
            className="font-bold text-black text-3xl pt-20 font-heading px-8
          text-center shrink-0 grow-0 basis-auto  md:w-8/12 
          
          "
            style={{
              textDecoration: "underline",
              textDecorationColor: "#dbc07c",
            }}
          >
            CONTACT US
          </div>
          <div class="flex flex-wrap">
            <div className="md:w-8/12 justify-center">
              <div class="mt-8 mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0  md:px-3 lg:px-6 px-8">
                {/* <h2
                class="mb-6 text-3xl font-bold font-heading
                text-center
                "
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#dbc07c",
                }}
              >
                CONTACT US
              </h2> */}
                <p
                  class="mb-4
               text-black dark:text-neutral-300 font-heading text-center"
                >
                  REACH US AT
                </p>
                <p
                  class="mb-2 text-black dark:text-neutral-300 text-center"
                  style={{ background: "#dbc07c" }}
                >
                  No.13, Opal Apartments, North Mada Street, Srinagar Colony,
                  Saidapet, Intermontlife.com Chennai-600015
                </p>
                <p class="mb-2 text-black dark:text-neutral-300 bg-gray-200 text-center">
                  +91-9788058526
                </p>
                <p
                  class="mb-2 text-black dark:text-neutral-300 text-center"
                  style={{ background: "#dbc07c" }}
                >
                  sales@intermontlife.com
                </p>
              </div>
              <div class="mt-8 mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0  md:px-3 lg:px-6 px-8 text-center">
                <form
                  method="POST"
                  action="https://public.herotofu.com/v1/0b687a30-0e6b-11ee-8267-d3eb100789b4"
                  accept-charset="UTF-8"
                >
                  <label
                    class="block mb-2 md:mb-4
                "
                  >
                    <span class="text-gray-700">Your name</span>
                    <input
                      type="text"
                      name="name"
                      class="
                    h-10
            block
            w-full
         
            rounded-md
            shadow-sm
           
          "
                      placeholder="Akash"
                    />
                  </label>
                  <label
                    class="block mb-2 md:mb-4
                "
                  >
                    <span class="text-gray-700">Email address</span>
                    <input
                      name="email"
                      type="email"
                      class="
                    h-10
            block
            w-full
         
            rounded-md
            shadow-sm
          
          "
                      placeholder="akash.chandran@example.com"
                      required
                    />
                  </label>
                  <label class="block mb-2 md:mb-4">
                    <span className="text-gray-700">Message</span>
                    <textarea
                      name="message"
                      className="
                    input
            block
            w-full
         
            rounded-md
            shadow-sm
          "
                      rows="3"
                      placeholder="Tell us what you're thinking about..."
                    ></textarea>
                  </label>
                  <div class="mb-6 mt-6">
                    <button
                      type="submit"
                      // onClick={sendMail}
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white-100 bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-heading"
                    >
                      CONTACT US
                    </button>
                    <input
                      name="Form Page"
                      type="text"
                      class="
                      hidden
          "
                      value={"Contact"}
                    />
                  </div>
                  <div></div>
                </form>
              </div>
            </div>
            <div class="w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-4/12">
              <img
                src={Hero1.src}
                priority={true}
                alt="Picture of the artist"
                placeholder="blur"
                className=" md:mb-24  md:absolute top-0 w-auto md:w-96"
                style={{
                  height: width > 600 ? "100%" : "480px",
                  width: width > 600 ? "inherit" : "100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  objectFit: "cover",
                  overflow: "hidden",
                  objectPosition: "center center",
                }}
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingButton />
    </div>
  );
}
