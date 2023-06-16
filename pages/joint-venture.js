import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero1 from "../public/images/projects/venture.jpg";
import Image from "next/image";
import FloatingButton from "../components/FloatingButton";

export default function jointventure() {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    // window is accessible here.
    setWidth(window.innerWidth);
  }, []);
  return (
    <div>
      <div className="py-3" style={{ background: "#908f8f" }}>
        <Header />
      </div>
      <section
        className=" md:px-8 relative"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <div
          className="font-bold text-black text-3xl pt-20 pb-8 font-heading px-8
          text-center shrink-0 grow-0 basis-auto  
          
          "
          style={{
            textDecoration: "underline",
            textDecorationColor: "#dbc07c",
          }}
        >
          JOINT VENTURE
        </div>
        {/* <div className="flex flex-col md:flex-row gap-8"> */}
        <div class="flex flex-wrap font-body">
          <div
            class="mb-3 pt-4 w-full shrink-0 grow-0 basis-auto  md:px-48 md:text-justify font-normal text-black px-8 text-left text-sm md:pb-6"
            style={{ background: "#dbc07c" }}
          >
            We welcome all landowners looking for a fair and profitable Joint
            Venture. We would love to work with you! Our aim is to provide
            property owners a strong foundation on which to build and achieve
            their dreams. We are dedicated to giving you an easy, hassle-free
            and completely transparent experience. We can’t wait to hear from
            you!
          </div>
          <div class="mb-10 w-full shrink-0 grow-0 basis-auto  md:px-32 text-center px-8 text-sm">
            <p class="mb-2 py-4 text-gray-700 dark:text-neutral-300 border-b">
              Reach out to Us
            </p>
            <p class="mb-2 text-gray-700 dark:text-neutral-300">
              No.13, Opal Apartments, North Mada Street, Srinagar Colony,
              Saidapet, Intermontlife.com Chennai-600015
            </p>
            <p class="mb-2 text-gray-700 dark:text-neutral-300">
              +91-9788058526
            </p>
            <p class="mb-2 text-gray-700 dark:text-neutral-300">
              sales@intermontlife.com
            </p>
          </div>
          <div class="mb-12 w-full shrink-0 grow-0 basis-auto  md:px-32 px-8 py-4">
            <form method="POST" action="https://herotofu.com/start">
              <label class="block mb-2 md:mb-6">
                <span class="text-gray-700">Your name</span>
                <input
                  type="text"
                  name="name"
                  class="
                  md:h-10
            block
            w-full
         text-black
rounded-md
         
          "
                  placeholder="Joe Bloggs"
                />
              </label>
              <label class="block mb-2 md:mb-6">
                <span class="text-gray-700">Email address</span>
                <input
                  name="email"
                  type="email"
                  class="
                  md:h-10
            block
            w-full
         text-black
rounded-md


     
          "
                  placeholder="joe.bloggs@example.com"
                  required
                />
              </label>
              <label class="block mb-2 md:mb-6">
                <span class="text-gray-700">Message</span>
                <textarea
                  name="message"
                  className="input
            block
            w-full
         text-black
rounded-md

          "
                  rows="3"
                  placeholder="Tell us what you're thinking about..."
                ></textarea>
              </label>
              <div class="mb-6 mt-4 md:flex md:justify-center md:mt-8">
                <button
                  type="submit"
                  class="inline-flex items-center  px-3 py-2 text-sm font-medium text-center text-white-100 bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-heading"
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
       
        </div>
        {/* </div> */}
      </section>
      <div class="w-full shrink-0 grow-0 basis-auto  ">
            <Image
              src={Hero1}
              alt="Picture of the artist"
              placeholder="blur"
              // className="md:mb-24  md:absolute top-0 w-auto md:w-96"
              style={{
                height: width > 600 ? "800px" : "280px",
                width: width > 600 ? "100vw" : "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                objectFit: "cover",
                overflow: "hidden",
                // objectPosition: "center center"
              }}
            />
          </div>
      <Footer />
      <FloatingButton />
    </div>
  );
}
