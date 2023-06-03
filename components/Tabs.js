import { useState } from "react";
import Hero1 from "../public/images/hero/1.jpg";
import Hero2 from "../public/images/hero/2.jpg";
import Hero3 from "../public/images/hero/3.jpg";
import Hero4 from "../public/images/hero/4.jpg";
import Image from "next/image";
import { Carousal } from "./Carousal";
export default function TabsComponent() {
  const [openTab, setOpenTab] = useState(1);
  const hero = [Hero1, Hero2, Hero3, Hero4];

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center max-w-xl">
          <ul className="flex space-x-2 text-center">
            <li>
              <div
                onClick={() => setOpenTab(1)}
                className={` ${
                  openTab === 1 ? " text-white-100" : "text-gray-600 "
                } inline-block md:px-4 py-2 rounded shadow cursor-pointer ml-2`}
                style={{ background: openTab === 1 ? "#e7a646" : "white" }}
              >
                Gallery
              </div>
            </li>
            <li>
              <div
                onClick={() => setOpenTab(2)}
                className={` ${
                  openTab === 2 ? " text-white-100" : "text-gray-600 "
                } inline-block md:px-4 py-2 rounded shadow cursor-pointer`}
                style={{ background: openTab === 2 ? "#e7a646" : "white" }}
              >
                Floor Plan
              </div>
            </li>
            <li>
              <div
                onClick={() => setOpenTab(3)}
                className={` ${
                  openTab === 3 ? " text-white-100" : "text-gray-600 "
                } inline-block md:px-4 py-2 rounded shadow cursor-pointer`}
                style={{ background: openTab === 3 ? "#e7a646" : "white" }}
              >
                Location
              </div>
            </li>
            <li>
              <div
                onClick={() => setOpenTab(4)}
                className={` ${
                  openTab === 4 ? " text-white-100" : "text-gray-600 "
                } inline-block md:px-4 py-2 rounded shadow cursor-pointer mr-2`}
                style={{ background: openTab === 4 ? "#e7a646" : "white" }}
              >
                Virtual Tour
              </div>
            </li>
          </ul>
          <div className="p-3 mt-6 bg-white border">
            <div className={openTab === 1 ? "block gallery" : "hidden"} style={{width:"500px",height:"400px"}}>
                <Carousal images={hero} />

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
