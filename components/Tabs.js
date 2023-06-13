import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
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
                  {type === "completed" ? "Plan" : "Floor Plan"}
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
              className={openTab === 1 ? "block gallery relative" : "hidden"}
              // style={{ width: "500px", height: "400px" }}
            >
              <ImageGallery
                items={[{ original: model.src }]}
                showThumbnails={false}
                showPlayButton={false}
              />
            </div>
            {flat !== "imperial" && (
              <div
                className={openTab === 2 ? "block relative" : "hidden"}
                style={{
                  height: width > 600 ? "650px" : "400px",
                  width: width > 600 ? "700px" : "450px",
                }}
              >
                <ImageGallery
                  items={plan}
                  showThumbnails={false}
                  originalHeight={width > 600 ? "350px" : "400px"}
                  originalWidth={width > 600 ? "700px" : "450px"}
                  showPlayButton={false}
                  autoPlay={true}
                />
              </div>
            )}
            <div className={openTab === 3 ? "block relative" : "hidden"}>
              <iframe
                src={location}
                // width={width > 600 ? "500" : "300"}
                height={width > 600 ? "450px" : "400px"}
                width={width > 600 ? "700px" : "100%"}
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
            {type === "completed" && flat !== "imperial" && (
              <div
                className={openTab === 4 ? "block relative" : "hidden"}
                style={{
                  height: width > 600 ? "450px" : "400px",
                  width: width > 600 ? "800px" : "450px",
                }}
              >
                {/* <Carousal images={gallery} /> */}
                <ImageGallery
                  items={gallery}
                  showThumbnails={false}
                  showPlayButton={false}
                  autoPlay={true}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
