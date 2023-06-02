import React, { useState } from "react";

export default function Menu({ home }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div
        className="absolute HAMBURGER-ICON space-y-2 left-4 p-4 top-3.5 rounded-sm z-20 cursor-pointer"
        onClick={() => setIsNavOpen((prev) => !prev)}
        style={{
          display: isNavOpen ? "none" : "block",
          // background: "#e1bf71",
          transform: "translateY(-14%)",
        }}
      >
        <span className="block h-0.5 w-5 bg-black"></span>
        <span
          className="block h-0.5 w-5 "
          style={{ background: home ? "#e7a646" : "black" }}
        ></span>
        <span className="block h-0.5 w-5 bg-black"></span>
      </div>
      <div
        className="absolute md:top-4 flex flex-row justify-center w-screen text-center"
        style={{
          alignItems: home ? "center" : "initial",
          background: home ? "transparent" : "orange",
          height: home ? "100vh" : "unset",
        }}
      >
        <div className="flex flex-col">
          {home ? (
            <div className="font-semibold text-2xl">Welcome To</div>
          ) : null}
          {/* <img src={"/favicon.png"} alt="logo" width={"50px"} height={"50px"}></img> */}
          <a
            href="/"
            className="font-nudista font-bold text-md md:text-4xl text-white-200  "
            style={{ textShadow: "2px 2px #e7a646" }}
          >
            PARS ENGINEERING INDIA PVT LTD
          </a>
          {home ? (
            <a href={"/about"} className="font-sm pt-4 underline">
              Read More
            </a>
          ) : null}
        </div>
      </div>
      <div
        className={isNavOpen ? "showMenuNav" : "hideMenuNav"}
        style={{ transition: "2s" }}
      >
        <div
          className="absolute top-4 left-0 pl-4 flex flex-row "
          onClick={() => setIsNavOpen(false)}
        >
          <svg
            className="h-8 w-8 "
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "#e7a646" }}
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <ul className="flex flex-col items-center justify-between min-h-[250px] text-white-100">
          <li
            className="border-b  my-8 uppercase"
            style={{ borderBottomColor: "#e7a646" }}
          >
            <a href="/about">About</a>
          </li>
          <li
            className="border-b my-8 uppercase"
            style={{ borderBottomColor: "#e7a646" }}
          >
            <a href="/projects">Ongoing Projects</a>
          </li>
          <li
            className="border-b my-8 uppercase"
            style={{ borderBottomColor: "#e7a646" }}
          >
            <a href="/service">What we do</a>
          </li>
          <li
            className="border-b my-8 uppercase"
            style={{ borderBottomColor: "#e7a646" }}
          >
            <a href="/projects">Portfolio</a>
          </li>
          <li
            className="border-b my-8 uppercase"
            style={{ borderBottomColor: "#e7a646" }}
          >
            <a href="/clients">Testimonials</a>
          </li>
          <li
            className="border-b my-8 uppercase"
            style={{ borderBottomColor: "#e7a646" }}
          >
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}
