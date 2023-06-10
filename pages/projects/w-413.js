import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero1 from "../../public/images/projects/hero1.jpg";
import FloatingButton from "../../components/FloatingButton";
import TabsComponent from "../../components/Tabs";
import Plan1 from "../../public/images/projects/w-413/plan1.png";
import Plan2 from "../../public/images/projects/w-413/plan2.png";

const plan = [Plan1, Plan2];
export default function two() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("/Pars.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "demoPDF.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="z-5">
      <div className="py-3" style={{ background: "#838383e2" }}>
        <Header />
      </div>
      <div
        class="container my-4 mx-auto px-4 md:px-6 text-black"
        // style={{
        //   backgroundImage: "url(/pattern.svg)",
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "bottom",
        // }}
      >
        <section class="mb-32 font-body">
          <div class="flex flex-wrap">
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-8/12 md:px-3 lg:px-6">
              <TabsComponent
                model={Hero1}
                plan={plan}
                location={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0826862283193!2d80.19704899999999!3d13.093945999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52640e4bd817a9%3A0x2833774cd43dc9f4!2s6-413%2C%20W%20Block%204th%20St%2C%20W%20Block%2C%20Anna%20Nagar%20West%20Extension%2C%20Chennai%2C%20Tamil%20Nadu%20600049!5e0!3m2!1sen!2sin!4v1686397513198!5m2!1sen!2sin`}
              />
              <div className="w-full justify-center flex mt-4">
                <button
                  onClick={onButtonClick}
                  class="
                         h-10
                         px-5
                         text-indigo-100
                         bg-gray-700
                         rounded-lg
                         transition-colors
                         duration-150
                         focus:shadow-outline
                         hover:bg-gray-800
                         font-semibold

                       "
                >
                  Download Brochure
                </button>
              </div>
            </div>
            <div class="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-4/12 md:px-3 lg:px-4">
              <h2
                class="mb-6 text-3xl font-bold font-heading"
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#dbc07c",
                }}
              >
                Contact us
              </h2>
              <p class="mb-6 text-black dark:text-neutral-300">
                FOR BOOKING DETAILS CONTACT
              </p>
              <p class="mb-2 text-black dark:text-neutral-300">
                No.13, Opal Apartments, North Mada Street, Srinagar Colony,
                Saidapet, Intermontlife.com Chennai-600015
              </p>
              <p class="mb-2 text-black dark:text-neutral-300">
                +91-9788058526
              </p>
              <p class="mb-4 text-black dark:text-neutral-300 border-b">
                sales@intermontlife.com
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
          font-semibold
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
