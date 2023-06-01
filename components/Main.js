import { HeroCarousal } from "./HeroCarousal";
import Hero1 from "../public/images/hero/1.jpg";
import Hero2 from "../public/images/hero/2.jpg";
import Hero3 from "../public/images/hero/3.jpg";
import Hero4 from "../public/images/hero/4.jpg";
import Menu from "./Menu";
import FloatingButton from "./FloatingButton";
// import ReactWhatsapp from "react-whatsapp";
export default function Main() {
  const hero = [Hero1, Hero2, Hero3, Hero4];
  return (
    <section
      class="text-white-100 body-font relative"
      style={{
        overflow: "hidden",
        height: "100vh",
        width: "100vw",
      }}
    >
      <nav className="flex h-10   w-screen absolute z-40">
        <section className="MOBILE-MENU flex ">
          <Menu />
        </section>
      </nav>

      <div className="">
        <HeroCarousal images={hero} />
      </div>
      <div
        className="absolute top-2 md:text-3xl flex h-screen w-screen justify-center items-center font-bold text-black shadow-md z-30"
        style={{
          textDecoration: "underline",
          textDecorationColor: "#e7a646",
        }}
      >
        OUR COMPANY MOTO
      </div>
      <FloatingButton />
    </section>
  );
}
