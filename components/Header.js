import Menu from "./Menu";

export default function Header() {
  return (
    <div className="flex items-center   py-4">
      <nav>
        <section className="MOBILE-MENU flex ">
          <Menu />
        </section>
      </nav>
    </div>
  );
}
