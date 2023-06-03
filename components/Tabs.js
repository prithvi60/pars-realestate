import { useState } from "react";
import Hero1 from "../public/images/hero/1.jpg";
import Hero2 from "../public/images/hero/2.jpg";
import Hero3 from "../public/images/hero/3.jpg";
import Hero4 from "../public/images/hero/4.jpg";
import Image from "next/image";
export default function TabsComponent() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div>
      <div className="container mx-auto mt-12">
        <div className="flex flex-col items-center justify-center max-w-xl">
          <ul className="flex space-x-2">
            <li>
              <div
                onClick={() => setOpenTab(1)}
                className={` ${
                  openTab === 1 ? " text-white-100" : "text-gray-600 "
                } inline-block px-4 py-2 rounded shadow`}
                style={{ background: openTab === 1 ? "#dbc07c" : "white" }}
              >
                Gallery
              </div>
            </li>
            <li>
              <div
                onClick={() => setOpenTab(2)}
                className={` ${
                  openTab === 2 ? " text-white-100" : "text-gray-600 "
                } inline-block px-4 py-2 rounded shadow`}
                style={{ background: openTab === 2 ? "#dbc07c" : "white" }}
              >
                Floor Plan
              </div>
            </li>
            <li>
              <div
                onClick={() => setOpenTab(3)}
                className={` ${
                  openTab === 3 ? " text-white-100" : "text-gray-600 "
                } inline-block px-4 py-2 rounded shadow`}
                style={{ background: openTab === 3 ? "#dbc07c" : "white" }}
              >
                Location
              </div>
            </li>
            <li>
              <div
                onClick={() => setOpenTab(4)}
                className={` ${
                  openTab === 4 ? " text-white-100" : "text-gray-600 "
                } inline-block px-4 py-2 rounded shadow`}
                style={{ background: openTab === 4 ? "#dbc07c" : "white" }}
              >
                Virtual Tour
              </div>
            </li>
          </ul>
          <div className="p-3 mt-6 bg-white border">
            <div className={openTab === 1 ? "block" : "hidden"}>
              <Image
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
              />
            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
              <Image
                src={Hero2}
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
              />
            </div>
            <div className={openTab === 3 ? "block" : "hidden"}>
              <Image
                src={Hero3}
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
              />
            </div>
            <div className={openTab === 4 ? "block" : "hidden"}>
              <Image
                src={Hero4}
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
