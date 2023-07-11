import { HeroCarousal } from "./HeroCarousal";
import Hero1 from "../public/images/projects/hero1.jpg";
import Hero2 from "../public/images/hero/hero2.jpg";
import Hero3 from "../public/images/projects/hero3.jpg";
import Hero4 from "../public/images/projects/hero4.jpg";
import Hero5 from "../public/images/projects/hero5.jpg";

import Menu from "./Menu";
// import FloatingButton from "./FloatingButton";
// import ReactWhatsapp from "react-whatsapp";
export default function Main() {
  const hero = [Hero1, Hero2, Hero3, Hero4,Hero5];
  return (
    <section
    className="text-white-100 body-font relative"
      style={{
        overflow: "hidden",
        height: "100vh",
        width: "100vw",
      }}
    >
      <nav className="flex h-10   w-screen absolute z-40">
        <section className="MOBILE-MENU flex ">
          <Menu home={true}/>
        </section>
      </nav>

      <div className="hero">
        <HeroCarousal images={hero} />
      </div>
      {/* <div
        className="absolute top-2 md:text-3xl flex h-screen w-screen justify-center items-center font-bold text-black shadow-md z-30"
        style={{
          textDecoration: "underline",
          textDecorationColor: "#dbc07c",
        }}
      >
        OUR COMPANY MOTO
      </div> */}
    </section>
  );
}
