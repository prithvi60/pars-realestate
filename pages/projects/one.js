import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero1 from "../../public/images/hero/1.jpg";
import Image from "next/image";
import FloatingButton from "../../components/FloatingButton";
import TabsComponent from "../../components/Tabs";

export default function one() {
  return (
    <div className="z-5">  
      <Header />
      <div
        class="container my-24 mx-auto px-4 md:px-6 text-black"
        // style={{
        //   backgroundImage: "url(/pattern.svg)",
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "bottom",
        // }}
      >
        <section class="mb-32">
          <div class="flex flex-wrap">
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
              <TabsComponent />
            </div>
            <div class="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
              <h2
                class="mb-6 text-3xl font-bold"
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#dbc07c",
                }}
              >
                Contact us
              </h2>
              <p class="mb-6 text-black dark:text-neutral-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, modi accusantium ipsum corporis quia asperiores
                dolorem nisi corrupti eveniet dolores ad maiores repellendus
                enim autem omnis fugiat perspiciatis? Ad, veritatis.
              </p>
              <p class="mb-2 text-black dark:text-neutral-300">
                New York, 94126, United States
              </p>
              <p class="mb-2 text-black dark:text-neutral-300">
                + 01 234 567 89
              </p>
              <p class="mb-2 text-black dark:text-neutral-300">
                info@gmail.com
              </p>
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
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingButton />
    </div>
  );
}
