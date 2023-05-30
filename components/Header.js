import Menu from "./Menu";

export default function Header() {
  return (
    <div className="flex items-center  border-b border-gray-400 py-4">
      <nav>
        <section className="MOBILE-MENU flex ">
          <div className="flex w-screen justify-center font-mono font-bold text-xl text-black">
            {" "}
            <a href="/">PARS</a>
          </div>
          <Menu />
        </section>
      </nav>
    </div>
  );
}
