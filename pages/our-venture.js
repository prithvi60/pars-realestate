import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero1 from "../public/images/hero/1.jpg";
import Image from "next/image";
import FloatingButton from "../components/FloatingButton";

export default function ourventure() {
  return (
    <div>
      <div className="py-3" style={{ background: "#000000e2" }}>
        <Header />
      </div>
      <section
        className="md:h-screen px-8 relative"
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
          Our Venture
        </div>
        {/* <div className="flex flex-col md:flex-row gap-8"> */}
        <div class="flex flex-wrap">
          <div class="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-4/12 md:px-3 lg:px-6 font-semibold text-black">
            Content for Our venture
          </div>
          <div class="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-4/12 md:px-3 lg:px-6">
            {/* <h2
                class="mb-6 text-3xl font-bold font-heading"
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#dbc07c",
                }}
              >
                Contact us
              </h2> */}
            <p class="mb-6 text-black dark:text-neutral-300">Reach out to Us</p>
            <p class="mb-2 text-black dark:text-neutral-300">
              No.13, Opal Apartments, North Mada Street, Srinagar Colony,
              Saidapet, Intermontlife.com Chennai-600015
            </p>
            <p class="mb-2 text-black dark:text-neutral-300">+91-9788058526</p>
            <p class="mb-2 text-black dark:text-neutral-300">
              sales@intermontlife.com
            </p>
          </div>
          <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-4/12 md:px-3 lg:px-6">
            <form method="POST" action="https://herotofu.com/start">
              <label class="block mb-6">
                <span class="text-gray-700">Your name</span>
                <input
                  type="text"
                  name="name"
                  class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="Joe Bloggs"
                />
              </label>
              <label class="block mb-6">
                <span class="text-gray-700">Email address</span>
                <input
                  name="email"
                  type="email"
                  class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="joe.bloggs@example.com"
                  required
                />
              </label>
              <label class="block mb-6">
                <span class="text-gray-700">Message</span>
                <textarea
                  name="message"
                  class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  rows="3"
                  placeholder="Tell us what you're thinking about..."
                ></textarea>
              </label>
              <div class="mb-6">
                <button
                  type="submit"
                  class="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
                >
                  Contact Us
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
      <Footer />
      <FloatingButton />
    </div>
  );
}
