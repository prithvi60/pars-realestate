import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import Hero1 from "../public/images/projects/about.jpg";
import Image from "next/image";
export default function contact() {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    // window is accessible here.
    setWidth(window.innerWidth);
  }, []);
  return (
    <div className="relative">
      <div
        className="py-3"

        style={{ background: "#908f8f" }}
      >
        <Header />
      </div>
      <div
        class="container mx-auto  md:px-6 text-black relative"
        style={{
          // backgroundImage: "url(/pattern.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <section class="md:h-screen font-body relative">
          <div
            className="font-bold text-black text-3xl pt-20 font-heading px-8
          text-center shrink-0 grow-0 basis-auto  md:w-7/12 
          
          "
            style={{
              textDecoration: "underline",
              textDecorationColor: "#dbc07c",
            }}
          >
            CONTACT US
          </div>
          <div class="flex flex-wrap">
            <div class="mt-8 mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-4/12 md:px-3 lg:px-6 px-8">
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
               text-black dark:text-neutral-300 font-heading"
              >
                FOR BOOKING DETAILS CONTACT
              </p>
              <p
                class="mb-2 text-black dark:text-neutral-300"
                style={{ background: "#dbc07c" }}
              >
                No.13, Opal Apartments, North Mada Street, Srinagar Colony,
                Saidapet, Intermontlife.com Chennai-600015
              </p>
              <p class="mb-2 text-black dark:text-neutral-300 bg-gray-200">
                +91-9788058526
              </p>
              <p
                class="mb-2 text-black dark:text-neutral-300 "
                style={{ background: "#dbc07c" }}
              >
                sales@intermontlife.com
              </p>
            </div>
            <div class="mt-8 mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-4/12 md:px-3 lg:px-6 px-8">
              <form method="POST" action="https://herotofu.com/start">
                <label
                  class="block mb-2
                "
                >
                  <span class="text-gray-700">Your name</span>
                  <input
                    type="text"
                    name="name"
                    class="
            block
            w-full
         
            rounded-md
            shadow-sm
           
          "
                    placeholder="Joe Bloggs"
                  />
                </label>
                <label
                  class="block mb-2
                "
                >
                  <span class="text-gray-700">Email address</span>
                  <input
                    name="email"
                    type="email"
                    class="
            block
            w-full
         
            rounded-md
            shadow-sm
          
          "
                    placeholder="joe.bloggs@example.com"
                    required
                  />
                </label>
                <label class="block mb-2">
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
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white-100 bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-heading"
                  >
                    CONTACT US
                  </button>
                </div>
                <div>
                  {/* <div class="mt-2 text-gray-700 text-right text-xs">
                    by &nbsp;
                    <a
                      href="https://herotofu.com"
                      class="hover:underline"
                      target="_blank"
                    >
                      the internet generation
                    </a>
                  </div> */}
                </div>
              </form>
            </div>
            <div class="w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-4/12">
              <Image
                src={Hero1}
                alt="Picture of the artist"
                placeholder="blur"
                className=" md:mb-24  md:absolute top-0 w-auto md:w-96"
                style={{
                  height: width > 600 ? "100%" : "400px",
                  width: width > 600 ? "unset" : "100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </section>
      </div>
      {/* <div className="absolute bottom-0 w-screen"> */}
      <Footer />
      {/* </div> */}
      <FloatingButton />
    </div>
  );
}
