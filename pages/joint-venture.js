import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero1 from "../public/images/projects/venture.jpg";
import FloatingButton from "../components/FloatingButton";

export default function jointventure() {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    // window is accessible here.
    setWidth(window.innerWidth);
  }, []);
  const handleGetRequest = async () => {
    toast.success("We have received your message!");

    try {
      const response = await fetch("https://intermontlife.com/joint-venture/");
      if (response.ok) {
        // toast.success("We have received your message!");
        const data = await response.json(); // Parse response data as JSON
        console.log("Response data:", data);
        // You can access the response data here
      } else {
        // if (!navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
        //  toast.success("We have received your message!");
        // }
      }
    } catch (error) {
      // if (!navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
      //  toast.success("We have received your message!");
      // }
    }
  };
  return (
    <div className="relative">
      <div className="py-3" style={{ background: "#908f8f" }}>
        <Header />
      </div>
      <section
        className=" md:pl-8 relative"
        style={{
          minHeight: "88vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <div
          className="font-bold text-black text-3xl pt-20 pb-8 font-heading px-8
        text-center shrink-0 grow-0 basis-auto  md:w-8/12 
        
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
          <div className="md:w-8/12 md:px-4">
            <div
              class="mb-3 pt-4 pb-4  w-full shrink-0 grow-0 basis-auto md:mb-0  md:px-1 lg:px-4 font-normal text-black px-8 text-center text-sm"
              style={{ background: "#dbc07c" }}
            >
              We welcome all landowners looking for a fair and profitable Joint
              Venture. We would love to work with you! Our aim is to provide
              property owners a strong foundation on which to build and achieve
              their dreams. We are dedicated to giving you an easy, hassle-free
              and completely transparent experience. We can’t wait to hear from
              you!
            </div>
            <div class="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0  md:px-4 lg:px-4 px-8 text-sm text-center">
              <p class="mb-2 py-4 text-gray-700 dark:text-neutral-300 border-b">
                Reach out to Us
              </p>
              <p class="mb-2 text-gray-700 dark:text-neutral-300">
                No.13, Opal Apartments, North Mada Street, Srinagar Colony,
                Saidapet, Chennai-600015
              </p>
              <p class="mb-2 text-gray-700 dark:text-neutral-300">
                +91-9788058526
              </p>
              <p class="mb-2 text-gray-700 dark:text-neutral-300">
                sales@intermontlife.com
              </p>
            </div>
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:px-4 lg:px-4 px-8 py-4 text-center text-black md:flex md:justify-center">
              <form
                method="POST"
                action="https://public.herotofu.com/v1/14ca3d70-11c2-11ee-b0a7-9f000c4c1540"
                accept-charset="UTF-8"
                className="md:px-18 lg:px-32 min-w-full"
                onSubmit={handleGetRequest}
              >
                <label class="block mb-2">
                  <span class="text-black">Your name</span>
                  <input
                    type="text"
                    name="name"
                    // onFocus={handleFocus}
                    required
                    className="
                    font-sans
                    h-10
                    input
          block
          w-full
      
        "
                    placeholder="Akash"
                  />
                </label>
                <label class="block mb-2">
                  <span class="text-black">Email address</span>
                  <input
                    name="email"
                    type="text"
                    // onFocus={handleFocus}
                    className="
                    font-sans
                    h-10
                    input
          block
          w-full
      
        "
                    placeholder="akash.chandran@example.com"
                    required
                    pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                    title="should contain @ and .com "
                  />
                </label>
                <label class="block mb-2">
                  <span class="text-black">Message</span>
                  <textarea
                    name="message"
                    // onFocus={handleFocus}
                    className="input
                    font-sans
          block
          w-full
      
        "
                    rows="3"
                    placeholder="Tell us what you're thinking about..."
                  ></textarea>
                </label>
                <div class="mb-6 mt-4">
                  <button
                    type="submit"
                    class="inline-flex items-center  px-3 py-2 text-sm font-medium text-center text-white-100 bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-heading"
                  >
                    SUBMIT
                  </button>
                  <input
                    name="Form Page"
                    type="text"
                    class="
                      hidden
          "
                    value={"Joint venture"}
                  />
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
          <div class="w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-4/12">
            <img
              src={Hero1.src}
              alt="Picture of the artist"
              placeholder="blur"
              className="md:mb-24  md:absolute top-0 w-auto md:w-96"
              style={{
                height: width > 600 ? "100%" : "480px",
                width: width > 600 ? "inherit" : "100%",
                objectFit: "cover",
                // overflow: "hidden",
                objectPosition: "70% 100%",
              }}
            />
          </div>
        </div>
        {/* </div> */}
      </section>
      <Footer />
      <FloatingButton />
      <Toaster position={width > 600 ? "bottom-center" : "top-center"} />
    </div>
  );
}
