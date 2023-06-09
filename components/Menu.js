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
          style={{ background: "#dbc07c" }}
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
                src={"/favicon.webp"}
                alt="logo"
                style={{
                  objectFit: "cover",
                  height: "60px",
                  width: "60px",
                  // background: "#ffffff",
                }}
                className="mb-4"
              ></img>
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
                  "font-title font-bold text-3xl md:text-6xl text-white-200 justify-center"
                }
                // style={{ textShadow: "3px 3px #000000" }}
              >
                INTERMONT <span style={{ color: "#dbc07c" }}>LIFE</span>
              </a>
            </div>
          ) : (
            <div className="flex md:flex-row gap-4 items-center text-center  ml-6 md:ml-0 mt-5 md:mt-3.5">
              <img
                src={"/favicon.webp"}
                alt="logo"
                style={{
                  objectFit: "cover",
                  height: "40px",
                  width: "40px",
                }}
                className=""
              ></img>
              <a
                href="/"
                className={
                  "font-title font-bold text-md md:text-2xl text-white-200 border-b"
                }
                // style={{ textShadow: "3px 3px #000000" }}
              >
                INTERMONT LIFE
              </a>
            </div>
          )}
          {home ? (
            <div
              className="border-b  mt-8 flex justify-center px-10 ml-36 mr-36 border-1"
              style={{ borderColor: "#dbc07c" }}
            >
              {" "}
            </div>
          ) : null}
          {home ? (
            <div
              className="font-semibold  text-lg md:text-2xl font-heading mt-4"
              // style={{ textShadow: "3px 3px #000000" }}
            >
              Your home defines you
            </div>
          ) : null}

          {home ? (
            <a
              href={"/about"}
              className="font-sm pt-12 text-xs md:text-sm font-heading underline"
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
            <a href="/">Home</a>
          </li>
          <li
            className="border-b  my-4 uppercase"
            style={{ borderBottomColor: "#dbc07c" }}
          >
            <a href="/about">About</a>
          </li>
          <li className="my-4 uppercase mx-6">
            <a href="/projects">
              <span
                className="border-b py-1 leading-8 md:leading-none"
                style={{ borderBottomColor: "#dbc07c" }}
              >
                Ongoing Projects
              </span>
            </a>
          </li>
          <li
            className="my-4  uppercase  mx-6"
            // style={{ borderBottomColor: "#dbc07c" }}
          >
            <a href="/completed">
              <span
                className="border-b py-1 leading-8 md:leading-none"
                style={{ borderBottomColor: "#dbc07c" }}
              >
                Completed Projects
              </span>
            </a>
          </li>
          <li
            className="border-b my-4 uppercase"
            style={{ borderBottomColor: "#dbc07c" }}
          >
            <a href="/joint-venture">Joint Venture</a>
          </li>
          <li
            className="border-b my-4 uppercase"
            style={{ borderBottomColor: "#dbc07c" }}
          >
            <a href="/sectors">Other Sector</a>
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
