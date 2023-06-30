import React, { useEffect, useState } from "react";
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
import G5 from "../../public/images/projects/opal/gallery5.jpg";

const plan = [
  { src: Plan1.src,alt:"plan image" },
  { src: Plan2.src,alt:"plan image" },
  { src: Plan3.src,alt:"plan image" },
];
const gallery = [
  { src: G1.src, 
    // loading: "lazy",
     alt: "galley image" },
  { src: G2.src, 
    // loading: "lazy",
     alt: "galley image" },
  { src: G3.src, 
    // loading: "lazy",
     alt: "galley image" },
  { src: G4.src, 
    // loading: "lazy",
     alt: "galley image" },
  { src: G5.src, 
    // loading: "lazy",
     alt: "galley image" },
];

export default function three() {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    // window is accessible here.
    setWidth(window.innerWidth);
  }, []);
  return (
    <div className="z-5 relative">
      <div className="py-3" style={{ background: "#908f8f" }}>
        <Header />
      </div>
      <div
        class=" my-4 mx-auto px-4 md:px-6 text-black"
        style={{ minHeight: "88vh" }}
        // style={{
        //
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "bottom",
        // }}
      >
        <section class="mb-32 font-body">
          <div class="flex flex-wrap">
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 flex justify-center md:px-3">
              <TabsComponent
                type={"completed"}
                model={Hero1}
                plan={plan}
                gallery={gallery}
                location={`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.3256976150583!2d80.22698591482242!3d13.014919390827462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAwJzUzLjciTiA4MMKwMTMnNDUuMCJF!5e0!3m2!1sen!2sin!4v1686397427698!5m2!1sen!2sin`}
              />
            </div>
            <div className="mt-4 pt-4  md:mt-12 md:mx-48 border-t border-b w-screen">
              <div className="w-full justify-center flex flex-col  ">
                <p className="text-black font-bold font-hero  text-left md:text-center mb-4">
                  No of flats: <span className="font-normal">6 Flats</span>
                </p>
                <p className="text-black font-bold font-hero  text-left md:text-center mb-4">
                  Type: <span className="font-normal">3 BHK</span>
                </p>
                <p className="text-black font-bold font-hero  text-left md:text-center mb-4">
                  Size: <span className="font-normal">2026 Sq.ft.</span>
                </p>
                <p className="text-black font-bold font-hero  text-left md:text-center mb-4">
                  Address:{" "}
                  <span className="font-normal">
                    No. 13, Opal Apartments, North Mada Street, Srinagar Colony,
                    Saidapet, Chennai - 600015
                  </span>
                </p>
              </div>
            </div>
            <div className="w-screen flex justify-center items-center mt-12">
              <img
                src={"/sold.png"}
                alt="sold"
                style={{
                  objectFit: "cover",
                  height: "100px",
                  width: "250px",
                }}
              ></img>
            </div>
            {/* <div class="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-4/12 md:px-3 lg:px-4">
              <h2
                class="mb-6 text-3xl font-bold font-heading text-center"
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#dbc07c",
                }}
              >
                CONTACT US
              </h2>
              <p class="mb-2 text-black dark:text-neutral-300 font-heading">
                REACH US AT
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
                class="mb-4 text-black dark:text-neutral-300 border-b"
                style={{ background: "#dbc07c" }}
              >
                sales@intermontlife.com
              </p>
              <form method="POST" action="https://herotofu.com/start">
                <label class="block mb-2">
                  <span class="text-gray-700">Your name</span>
                  <input
                    type="text"
                    name="name"
                    class="
          block
          w-full
          mt-1
      
        "
                    placeholder="Akash"
                  />
                </label>
                <label class="block mb-2">
                  <span class="text-gray-700">Email address</span>
                  <input
                    name="email"
                    type="email"
                    class="
          block
          w-full
          mt-1
          rounded-md
          shadow-sm
        "
                    placeholder="akash.chandran@example.com"
                    required
                  />
                </label>
                <label class="block mb-2">
                  <span class="text-gray-700">Message</span>
                  <textarea
                    name="message"
                    class="input
          block
          w-full
          mt-1
      
        "
                    rows="3"
                    placeholder="Tell us what you're thinking about..."
                  ></textarea>
                </label>
                <div class="mb-2 mt-4" >
                  <button
                    type="submit"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white-100 bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-heading"
                  >
                    CONTACT US
                  </button>
                </div>
              </form>
            </div> */}
          </div>
        </section>
      </div>
      <Footer />
      <FloatingButton />
    </div>
  );
}
