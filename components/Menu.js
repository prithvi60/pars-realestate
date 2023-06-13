import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function Menu({ home }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [width, setWidth] = useState(null);
  useEffect(() => {
    // window is accessible here.
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <div
        className="absolute HAMBURGER-ICON space-y-2 left-4 p-4 top-3.5 rounded-sm z-20 cursor-pointer hover:animate-spin"
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
        className="absolute flex flex-row  items-center justify-center w-screen text-center pointer-events-none"
        style={{
          alignItems: home ? "center" : "initial",
          background: home ? "transparent" : "transparent",
          height: home ? "100vh" : "unset",
          top: home ? 0 : "-0.5%",
        }}
      >
        <div className="flex flex-col">
          {home ? (
            <div className=" flex justify-center items-center">
              <img
                src={"/favicon.webp"}
                alt="logo"
                style={{
                  objectFit: "cover",
                  height: "60px",
                  width: "60px",
                }}
                className="mb-4"
              ></img>
            </div>
          ) : null}

          {home ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex md:flex-row gap-4 items-center justify-center
              text-center"
            >
              <a
                href="/"
                className={
                  "font-title font-bold text-3xl md:text-6xl text-white-200 justify-center"
                }
                style={{
                  pointerEvents: "all",
                }}
              >
                INTERMONT{" "}
                <span style={{ color: "#dbc07c" }} className="font-heading2">
                  LIFE
                </span>
              </a>
            </motion.div>
          ) : (
            <div className="flex md:flex-row gap-4 items-center text-center justify-center  md:ml-0 mt-6 md:mt-3.5">
              <img
                src={"/favicon.webp"}
                alt="logo"
                style={{
                  objectFit: "cover",
                  height: width < 600 ? "25px" : "40px",
                  width: width < 600 ? "25px" : "40px",
                }}
                className=""
              ></img>
              <a
                href="/"
                className={
                  "font-title font-bold text-md md:text-2xl text-white-200 border-b"
                }
                style={{
                  pointerEvents: "all",
                }}
              >
                INTERMONT{" "}
                <span style={{ color: "#dbc07c" }} className="font-heading2">
                  LIFE
                </span>
              </a>
            </div>
          )}
          {home ? (
            <div
              className="border-b  mt-4 flex justify-center px-10 ml-36 mr-36 border-1"
              style={{ borderColor: "#dbc07c" }}
            >
              {" "}
            </div>
          ) : null}
          {home ? (
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="font-light  text-lg md:text-2xl font-heading2 mt-4"
              // style={{ textShadow: "3px 3px #000000" }}
            >
              Your home defines you
            </motion.div>
          ) : null}

          {home ? (
            <motion.a
              href={"/about"}
              className="font-sm pt-12 text-xs md:text-sm font-heading"
              whileHover={{ textDecoration: "underline" }}
              style={{
                // textShadow: "3px 3px #000000",
                BorderColor: "#dbc07c",
                color: "#dbc07c",
                pointerEvents: "all",
              }}
            >
              Read More
            </motion.a>
          ) : null}
        </div>
      </div>
      <div
        className={isNavOpen ? "showMenuNav" : "hideMenuNav"}
        style={{ transition: "2.5s ease-out" }}
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
        <ul className="flex flex-col mt-20 md:mt-0 h-screen md:h-auto  items-center justify-even text-center text-white-100 font-title">
          <motion.li
            className="border-b  my-4 uppercase"
            whileHover={{ scale: 1.1 }}
            style={{
              borderBottomColor: "#dbc07c",
            }}
          >
            <a href="/">Home</a>
          </motion.li>
          <motion.li
            className="border-b  my-4 uppercase"
            style={{ borderBottomColor: "#dbc07c" }}
            whileHover={{ scale: 1.1 }}
          >
            <a href="/about">About</a>
          </motion.li>
          <motion.li
            className="my-4 uppercase mx-6"
            whileHover={{ scale: 1.1 }}
          >
            <a href="/projects">
              <span
                className="border-b py-1 leading-8 md:leading-none"
                style={{ borderBottomColor: "#dbc07c" }}
              >
                Ongoing Projects
              </span>
            </a>
          </motion.li>
          <motion.li
            className="my-4  uppercase  mx-6"
            whileHover={{ scale: 1.1 }}

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
          </motion.li>
          <motion.li
            className="border-b my-4 uppercase"
            whileHover={{ scale: 1.1 }}
            style={{ borderBottomColor: "#dbc07c" }}
          >
            <a href="/joint-venture">Joint Venture</a>
          </motion.li>
          <motion.li
            className="border-b my-4 uppercase"
            whileHover={{ scale: 1.1 }}
            style={{ borderBottomColor: "#dbc07c" }}
          >
            <a href="/sectors">Other Sector</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="border-b my-4 uppercase"
            style={{ borderBottomColor: "#dbc07c" }}
          >
            <a href="/clients">Testimonials</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="border-b my-4 uppercase"
            style={{ borderBottomColor: "#dbc07c" }}
          >
            <a href="/contact">Contact</a>
          </motion.li>
        </ul>
      </div>
    </>
  );
}
