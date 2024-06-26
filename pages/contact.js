import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import Hero1 from "../public/images/projects/about.jpg";
import { useRouter } from "next/router";
import { usePathname, useSearchParams } from 'next/navigation'
export default function contact() {
  const [width, setWidth] = useState(null);
  const router = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams()
 
  // useEffect(() => {
  //   const url = `${pathname}?${searchParams}`
  //   console.log(url,"change")
  //   // You can now use the current URL
  //   // ...
  // }, [pathname, searchParams])
  useEffect(() => {
    // window is accessible here.
    setWidth(window.innerWidth);
  }, []);
  const handleGetRequest = async (event) => {
    toast.success("We have received your message!");
    console.log("logging req",router.pathname);  
    // try {
    //   const response = await fetch("https://public.herotofu.com/v1/14ca3d70-11c2-11ee-b0a7-9f000c4c1540");
    //   if (response.ok) {
    //     console.log("logging req");
    //     router.push('/about')
    //   } else {
    //   }
    // } catch (error) {}
  };

  return (
    <div className="relative">
      <div className="py-3" style={{ background: "#908f8f" }}>
        <Header />
      </div>
      <div
        className=" md:pl-6 text-black relative"
        style={{
          // backgroundImage: "url(/pattern.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <section className=" font-body relative" style={{ minHeight: "88vh" }}>
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
          <div className="flex flex-wrap">
            <div className="md:w-8/12 justify-center">
              <div className="mt-8 mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0  md:px-3 lg:px-6 px-8">
                {/* <h2
                className="mb-6 text-3xl font-bold font-heading
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
                  className="mb-4
               text-black dark:text-neutral-300 font-heading text-center"
                >
                  REACH US AT
                </p>
                <p
                  className="mb-2 text-black dark:text-neutral-300 text-center"
                  style={{ background: "#dbc07c" }}
                >
                  No.13, Opal Apartments, North Mada Street, Srinagar Colony,
                  Saidapet, Chennai-600015
                </p>
                <p className="mb-2 text-black dark:text-neutral-300 bg-gray-200 text-center">
                  +91-9500244288
                </p>
                <p
                  className="mb-2 text-black dark:text-neutral-300 text-center"
                  style={{ background: "#dbc07c" }}
                >
                  sales@intermontlife.com
                </p>
              </div>
              <div className="mt-8 mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0  md:px-3 lg:px-6 px-8 text-center md:flex md:justify-center">
                <form
                  method="POST"
                  action="https://public.herotofu.com/v1/14ca3d70-11c2-11ee-b0a7-9f000c4c1540"
                  accept-charset="UTF-8"
                  className="md:px-18 lg:px-32 min-w-full"
                  onSubmit={handleGetRequest}
                >
                  <label
                    className="block mb-2 md:mb-4
                "
                  >
                    <span className="text-black">Your name</span>
                    <input
                      type="text"
                      name="name"
                      // onFocus={handleFocus}
                      className="
                      font-sans
                    h-10
            block
            w-full
            input
            rounded-md
            shadow-sm
           
          "
                      placeholder="Akash"
                      required
                    />
                  </label>
                  <label
                    className="block mb-2 md:mb-4
                "
                  >
                    <span className="text-black">Email address</span>
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
                  <label className="block mb-2 md:mb-4">
                    <span className="text-black">Message</span>
                    <textarea
                      name="message"
                      // onFocus={handleFocus}
                      className="
                      font-sans
                    input
            block
            w-full
          
          "
                      rows="3"
                      placeholder="Tell us what you're thinking about..."
                    ></textarea>
                  </label>
                  <div className="mb-6 mt-6">
                    <button
                      type="submit"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white-100 bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-heading"
                    >
                      SUBMIT
                    </button>
                    <input
                      name="Form Page"
                      type="text"
                      className="
                      hidden
          "
                      value={"Contact"}
                    />
                  </div>
                  <div></div>
                </form>
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-4/12">
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
      <Toaster position={width > 600 ? "bottom-center" : "top-center"} />
    </div>
  );
}
