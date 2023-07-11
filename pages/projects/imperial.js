import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero1 from "../../public/images/projects/imperial.png";
import FloatingButton from "../../components/FloatingButton";
import TabsComponent from "../../components/Tabs";

export default function four() {
  // const onButtonClick = () => {
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
        className="my-4 mx-auto px-4 md:px-6 text-black"
        style={{ minHeight:"88vh"}}
        // style={{
        //
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "bottom",
        // }}
      >
        <section className="mb-32 font-body">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 flex justify-center md:px-3">
              <TabsComponent
                type={"completed"}
                model={Hero1}
                flat={"imperial"}
                location={`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.112951720321!2d80.26676271482259!3d13.028478490818587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAxJzQyLjUiTiA4MMKwMTYnMDguMiJF!5e0!3m2!1sen!2sin!4v1686397475949!5m2!1sen!2sin`}
              />
            </div>
            <div className="mt-4 md:mt-12 md:mx-48 pt-4  border-t border-b w-screen">
              <div className="w-full justify-center flex flex-col mt-4">
                <p className="text-black font-bold font-hero  text-left md:text-center mb-4 ">
                  No of flats: <span className="font-normal">12 Flats</span>
                </p>
                <p className="text-black font-bold font-hero  text-left md:text-center mb-4">
                  Type: <span className="font-normal">3 BHK</span>
                </p>
                <p className="text-black font-bold font-hero  text-left md:text-center mb-4">
                  Size: <span className="font-normal">1227-1551 Sq.ft.</span>
                </p>
                <p className="text-black font-bold font-hero  text-left md:text-center mb-4 ">
                  Address:{" "}
                  <span className="font-normal">
                    No: 4&6, Imperial Apartments, Norton 1st Street,
                    Mandavelipakkam, R.A Puram, Chennai - 600004
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
          </div>
        </section>
      </div>
      <Footer />
      <FloatingButton />
    </div>
  );
}
