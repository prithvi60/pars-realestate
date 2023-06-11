import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Carousal } from "./Carousal";
export default function TabsComponent({
  type,
  model,
  flat,
  location,
  plan,
  gallery,
}) {
  const [openTab, setOpenTab] = useState(1);
  const [width, setWidth] = useState(null);
  useEffect(() => {
    // window is accessible here.
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center max-w-xl">
          <ul className="flex space-x-2 text-center font-heading">
            <li>
              <div
                onClick={() => setOpenTab(1)}
                className={` ${
                  openTab === 1 ? " text-gray-800" : "text-gray-600 "
                } inline-block  px-2 md:px-4 py-2  rounded shadow cursor-pointer ml-2`}
                style={{ background: openTab === 1 ? "#dbc07c" : "white" }}
              >
                Model
              </div>
            </li>
            {flat !== "imperial" && (
              <li>
                <div
                  onClick={() => setOpenTab(2)}
                  className={` ${
                    openTab === 2 ? " text-white-800" : "text-gray-600 "
                  } inline-block  px-2 md:px-4 py-2 rounded shadow cursor-pointer`}
                  style={{ background: openTab === 2 ? "#dbc07c" : "white" }}
                >
                  Floor Plan
                </div>
              </li>
            )}
            <li>
              <div
                onClick={() => setOpenTab(3)}
                className={` ${
                  openTab === 3 ? " text-white-800" : "text-gray-600 "
                } inline-block  px-2 md:px-4 py-2 rounded shadow cursor-pointer`}
                style={{ background: openTab === 3 ? "#dbc07c" : "white" }}
              >
                Location
              </div>
            </li>
            {type === "completed" && flat !== "imperial" && (
              <li>
                <div
                  onClick={() => setOpenTab(4)}
                  className={` ${
                    openTab === 4 ? " text-white-800" : "text-gray-600 "
                  } inline-block  px-2  md:px-4 py-2 rounded shadow cursor-pointer mr-2`}
                  style={{ background: openTab === 4 ? "#dbc07c" : "white" }}
                >
                  Gallery
                </div>
              </li>
            )}
          </ul>
          <div className="p-3 mt-6 bg-white border">
            <div
              className={openTab === 1 ? "block gallery" : "hidden"}
              // style={{ width: "500px", height: "400px" }}
            >
              <Image
                src={model}
                alt="Picture of the artist"
                placeholder="blur"
                style={{
                  height: width > 600 ? "450px" : "400px",
                  width: width > 600 ? "800px" : "500px",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  objectFit: "cover",
                }}
              />

              {/* <Image
                src={Hero1}
                alt="Picture of the artist"
                placeholder="blur"
                style={{
                  // height: "100vh",
                  // width:"100vw",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  objectFit: "cover",
                }}
              /> */}
            </div>
            {flat !== "imperial" && (
              <div
                className={openTab === 2 ? "block" : "hidden"}
                style={{
                  height: width > 600 ? "450px" : "400px",
                  width: width > 600 ? "800px" : "500px",
                }}
              >
                <Carousal images={plan} />
              </div>
            )}
            <div className={openTab === 3 ? "block" : "hidden"}>
              <iframe
                src={location}
                // width={width > 600 ? "500" : "300"}
                height={width > 600 ? "450px" : "400px"}
                width={width > 600 ? "800px" : "500px"}
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
            {type === "completed" && (
              <div
                className={openTab === 4 ? "block" : "hidden"}
                style={{
                  height: width > 600 ? "450px" : "400px",
                  width: width > 600 ? "800px" : "500px",
                }}
              >
                <Carousal images={gallery} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
