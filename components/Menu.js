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
        <span className="block h-0.5 w-5 bg-white-200"></span>
        <span
          className="block h-0.5 w-5 "
          style={{ background: home ? "#dbc07c" : "white" }}
        ></span>
        <span className="block h-0.5 w-5 bg-white-200"></span>
      </div>
      <div
        className="absolute flex flex-row  items-center justify-center w-screen text-center"
        style={{
          alignItems: home ? "center" : "initial",
          background: home ? "transparent" : "transparent",
          height: home ? "100vh" : "unset",
          top: home ? 0 : "-0.5%",
        }}
      >
        <div className="flex flex-col">
          {home ? (
            <div className="w-screen flex justify-center">
              <img
                src={"/favicon.png"}
                alt="logo"
                style={{
                  objectFit: "cover",
                  height: "60px",
                  width: "60px",
                  background: "#ffffff",
                }}
                className="mb-4 rounded-full shadow-md"
              ></img>
            </div>
          ) : null}

          {home ? (
            <div
              className="font-semibold  text-md md:text-xl font-heading"
              // style={{ textShadow: "3px 3px #000000" }}
            >
              Welcome To
            </div>
          ) : null}
          {home ? (
            <div className="flex md:flex-row gap-4 items-center justify-center text-center">
              {/* <img
                src={"/favicon.png"}
                alt="logo"
                style={{
                  objectFit: "cover",
                  height: "60px",
                  width: "60px",
                  background: "#ffffff",
                }}
                className="mt-4 rounded-full shadow-md"
              ></img> */}
              <a
                href="/"
                className={
                  "font-title font-bold text-lg md:text-4xl text-white-200 border-b justify-center"
                }
                // style={{ textShadow: "3px 3px #000000" }}
              >
                PARS ENGINEERING INDIA PVT LTD
              </a>
            </div>
          ) : (
            <div className="flex md:flex-row gap-4 items-center text-center  ml-6 md:ml-0 mt-5 md:mt-3.5">
              <img
                src={"/favicon.png"}
                alt="logo"
                style={{
                  objectFit: "cover",
                  height: "40px",
                  width: "40px",
                  background: "#ffffff",
                }}
                className=" rounded-full shadow-md hidden md:block"
              ></img>
              <a
                href="/"
                className={
                  "font-title font-bold text-md md:text-2xl text-white-200 border-b"
                }
                // style={{ textShadow: "3px 3px #000000" }}
              >
                PARS ENGINEERING INDIA PVT LTD
              </a>
            </div>
          )}

          {home ? (
            <a
              href={"/about"}
              className="font-sm pt-12 text-sm md:text-md font-heading"
              style={{
                // textShadow: "3px 3px #000000",
                BorderColor: "#dbc07c",
                color: "#dbc07c",
              }}
            >
              Read More
            </a>
          ) : null}
        </div>
      </div>
      <div
        className={isNavOpen ? "showMenuNav" : "hideMenuNav"}
        style={{ transition: "2.5s" }}
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
            style={{ color: "#dbc07c" }}
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <ul className="flex flex-col mt-20 md:mt-0 h-screen md:h-auto  items-center justify-even text-center text-white-100 font-heading">
          <li
            className="border-b  my-4 uppercase"
            style={{ borderBottomColor: "#dbc07c" }}
          >
            <a href="/about">About</a>
          </li>
          <li
            className="border-b my-4 uppercase mx-6"
            style={{ borderBottomColor: "#dbc07c" }}
          >
            <a href="/projects">Ongoing Projects</a>
          </li>
          <li
            className="border-b my-4 uppercase"
            style={{ borderBottomColor: "#dbc07c" }}
          >
            <a href="/service">What we do</a>
          </li>
          <li
            className="border-b my-4 uppercase"
            style={{ borderBottomColor: "#dbc07c" }}
          >
            <a href="/projects">Portfolio</a>
          </li>
          <li
            className="border-b my-4 uppercase"
            style={{ borderBottomColor: "#dbc07c" }}
          >
            <a href="/clients">Testimonials</a>
          </li>
          <li
            className="border-b my-4 uppercase"
            style={{ borderBottomColor: "#dbc07c" }}
          >
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}
