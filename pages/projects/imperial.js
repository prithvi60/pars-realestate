import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero1 from "../../public/images/projects/imperial.png";
import FloatingButton from "../../components/FloatingButton";
import TabsComponent from "../../components/Tabs";
import G1 from "../../public/images/projects/opal/gallery1.jpg";
import G2 from "../../public/images/projects/opal/gallery2.jpg";
import G3 from "../../public/images/projects/opal/gallery3.jpg";
import G4 from "../../public/images/projects/opal/gallery4.jpg";
const gallery = [G1, G2, G3, G4];

export default function four() {
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
      <div className="py-3" style={{ background: "#908f8f" }}>
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
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 flex justify-center md:px-3 lg:px-6">
              <TabsComponent
                type={"completed"}
                model={Hero1}
                gallery={gallery}
                flat={"imperial"}
                location={`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.112951720321!2d80.26676271482259!3d13.028478490818587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAxJzQyLjUiTiA4MMKwMTYnMDguMiJF!5e0!3m2!1sen!2sin!4v1686397475949!5m2!1sen!2sin`}
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingButton />
    </div>
  );
}
