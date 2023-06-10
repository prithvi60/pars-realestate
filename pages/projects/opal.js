import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero1 from "../../public/images/hero/1.jpg";
import FloatingButton from "../../components/FloatingButton";
import TabsComponent from "../../components/Tabs";
import Plan1 from "../../public/images/projects/opal/plan1.jpg";
import Plan2 from "../../public/images/projects/opal/plan2.jpg";
import Plan3 from "../../public/images/projects/opal/plan3.jpg";
import G1 from "../../public/images/projects/opal/gallery1.jpg";
import G2 from "../../public/images/projects/opal/gallery2.jpg";
import G3 from "../../public/images/projects/opal/gallery3.jpg";
import G4 from "../../public/images/projects/opal/gallery4.jpg";

const plan = [Plan1, Plan2, Plan3];
const gallery = [G1, G2, G3, G4];

export default function three() {
  // const onButtonClick = () => {
  //   // using Java Script method to get PDF file
  //   fetch("/Pars.pdf").then((response) => {
  //     response.blob().then((blob) => {
  //       // Creating new object of PDF file
  //       const fileURL = window.URL.createObjectURL(blob);
  //       // Setting various property values
  //       let alink = document.createElement("a");
  //       alink.href = fileURL;
  //       alink.download = "demoPDF.pdf";
  //       alink.click();
  //     });
  //   });
  // };
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
                type={"completed"}
                model={Hero1}
                plan={plan}
                gallery={gallery}
                location={`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.3256976150583!2d80.22698591482242!3d13.014919390827462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAwJzUzLjciTiA4MMKwMTMnNDUuMCJF!5e0!3m2!1sen!2sin!4v1686397427698!5m2!1sen!2sin`}
              />
              {/* <div className="w-full justify-center flex mt-4">
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
              </div> */}
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
