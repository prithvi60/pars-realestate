import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Card({ image, title, des, link }) {
  return (
    <motion.div
      class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.05 }}
    >
      <a href={link}>
        <img
          class="rounded-t-lg"
          src={image}
          alt="site"
          width={500}
          height={500}
          style={{ height: "300px", objectFit: "cover" }}
        />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white font-heading">
            {title}
          </h5>
        </a>
        <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
          {des}
        </p>
        <a
          href={link}
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-heading"
        >
          Know More
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
}
