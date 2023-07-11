import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero1 from "../../public/images/projects/hero1.jpg";
import FloatingButton from "../../components/FloatingButton";
import TabsComponent from "../../components/Tabs";
import Plan1 from "../../public/images/projects/w-413/plan1.png";
import Plan2 from "../../public/images/projects/w-413/plan2.png";

const plan = [
  { src: Plan1.src, alt: "plan image" },
  { src: Plan2.src, alt: "plan image" },
];
export default function two() {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    // window is accessible here.
    setWidth(window.innerWidth);
  }, []);
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("/Brochurew413.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.target = "blank";
        alink.download = "W-413_Brochure.pdf";
        alink.click();
      });
    });
  };
  const handleGetRequest = async () => {
    // if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    toast.success("We have received your message!");
    // }
    try {
      const response = await fetch("https://intermontlife.com/projects/w-413/");
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
    <div className="z-5 relative">
      <div className="py-3" style={{ background: "#908f8f" }}>
        <Header />
      </div>
      <div
      className=" my-4 mx-auto px-4 md:px-6 text-black"
        style={{ minHeight: "88vh" }}
        // style={{
        //
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "bottom",
        // }}
      >
        <section class="mb-32 font-body">
          <div class="flex flex-wrap">
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-8/12 md:px-3 ">
              <TabsComponent
                model={Hero1}
                plan={plan}
                location={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0826862283193!2d80.19704899999999!3d13.093945999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52640e4bd817a9%3A0x2833774cd43dc9f4!2s6-413%2C%20W%20Block%204th%20St%2C%20W%20Block%2C%20Anna%20Nagar%20West%20Extension%2C%20Chennai%2C%20Tamil%20Nadu%20600049!5e0!3m2!1sen!2sin!4v1686397513198!5m2!1sen!2sin`}
              />
              <div className="w-full justify-center flex flex-col mt-4">
                <div className="mt-4 pt-4  md:mt-6  border-t border-b w-full mb-8">
                  <p className="text-black font-bold font-hero text-left md:text-center  mb-4 ">
                    No of flats: <span className="font-normal">5 Flats</span>
                  </p>
                  <p className="text-black font-bold font-hero text-left md:text-center  mb-4">
                    Type: <span className="font-normal">3 BHK</span>
                  </p>
                  <p className="text-black font-bold font-hero text-left md:text-center  mb-4">
                    Size: <span className="font-normal">1,320 Sq.ft.</span>
                  </p>
                  <p className="text-black font-bold font-hero text-left md:text-center  mb-4 ">
                    Address:{" "}
                    <span className="font-normal">
                      W-413, W Block 4th St, W Block, Anna Nagar West Extension,
                      Chennai - 600049
                    </span>
                  </p>
                </div>

                <div className="flex justify-center w-full">
                  <button
                    onClick={onButtonClick}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white-100 bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-heading"
                  >
                    DOWNLOAD BROCHURE
                  </button>
                </div>
              </div>
            </div>
            <div class="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-4/12 md:px-4">
              <h2
              className="mb-6 text-3xl font-bold font-heading text-center uppercase"
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#dbc07c",
                }}
              >
                Register your Interest
              </h2>
              <form
                method="POST"
                action="https://public.herotofu.com/v1/14ca3d70-11c2-11ee-b0a7-9f000c4c1540"
                accept-charset="UTF-8"
                onSubmit={handleGetRequest}
              >
                <label class="block mb-2">
                  <span class="text-black">Your name</span>
                  <input
                    type="text"
                    name="name"
                    required
                  className="  input
                    font-sans
                    h-10
          block
          w-full
          mt-1
      
        "
                    placeholder="Akash"
                  />
                </label>
                <label class="block mb-2">
                  <span class="text-black">Email address</span>
                  <input
                    name="email"
                    type="text"
                  className="  input
                    font-sans
                    h-10
          block
          w-full
          mt-1
          rounded-md
          shadow-sm
        "
                    placeholder="akash.chandran@example.com"
                    required
                    pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                    title="should contain @ and .com "
                  />
                </label>
                <label class="block mb-4">
                  <span class="text-black">Phone number</span>
                  <input
                    type="tel"
                    placeholder="+91"
                    pattern="[0-9]{10}"
                    title="should contain 10 digit number"
                    name="phone numer"
                    required
                  className="  input
                    font-sans
                    h-10
          block
          w-full
          mt-1
      
        "
                  />
                </label>
                {/* <label class="block mb-2">
                  <span class="text-black">Message</span>
                  <textarea
                    name="message"
                  className="input
                    text-black
          block
          w-full
          mt-1
      
        "
                    rows="3"
                    placeholder="Tell us what you're thinking about..."
                  ></textarea>
                </label> */}
                <div class="mb-6 mt-4">
                  <div className="flex justify-center md:justify-start w-full">
                    <button
                      type="submit"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white-100 bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-heading uppercase"
                    >
                      Register
                    </button>
                  </div>
                  <input
                    name="Form Page"
                    type="text"
                  className="
                      hidden
          "
                    value={"Intermont w-413"}
                  />
                </div>
              </form>
              <p class="mb-2 text-black font-heading">REACH US AT</p>
              <p
              className="mb-2 text-black dark:text-neutral-300"
                style={{ background: "#dbc07c" }}
              >
                No.13, Opal Apartments, North Mada Street, Srinagar Colony,
                Saidapet, Chennai-600015
              </p>
              <p class="mb-2 text-black bg-gray-200">+91-9788058526</p>
              <p
              className="mb-2 text-black border-b"
                style={{ background: "#dbc07c" }}
              >
                sales@intermontlife.com
              </p>
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
