import { HeroCarousal } from "./HeroCarousal";
import Hero1 from "../public/images/hero/1.jpg";
import Hero2 from "../public/images/hero/2.jpg";
import Hero3 from "../public/images/hero/3.jpg";
import Hero4 from "../public/images/hero/4.jpg";
import Menu from "./Menu";

export default function Main() {
  const hero = [Hero1, Hero2, Hero3, Hero4];
  return (
    <section class="text-white-100 body-font relative">
      <nav className="flex h-10 bg-transparent  w-screen">
        <section className="MOBILE-MENU flex ">
          <Menu />
        </section>
      </nav>
      <div className="">
        <HeroCarousal images={hero} />
      </div>
    </section>
  );
}
