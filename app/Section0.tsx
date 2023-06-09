"use client";

import Link from "next/link";
import { useState } from "react";
import FancyGrid from "./fancyGrid";

const Section0 = () => {
  const [wasHovered, setWasHovered] = useState(false);

  setTimeout(() => {
    setWasHovered(true);
  }, 2000);

  return (
    <section className="relative h-screen snap-center">
      <FancyGrid />
      <div className="absolute left-0 top-0 flex h-full w-full flex-col-reverse items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={`mb-4 h-10 w-10 transition-all duration-500 ease-in-out ${
            wasHovered ? "-translate-y-10 opacity-0" : ""
          }`}
          onMouseEnter={() => setWasHovered(true)}
        >
          <path
            fill="currentColor"
            d="m12 5l.53-.53a.75.75 0 0 0-1.06 0L12 5Zm0 8l-.53.53a.75.75 0 0 0 1.06 0L12 13ZM9.47 6.47a.75.75 0 0 0 1.06 1.06L9.47 6.47Zm4 1.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-2.94 2.94a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm4 1.06a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM3.25 10v4h1.5v-4h-1.5Zm17.5 4v-4h-1.5v4h1.5Zm-9.5-9v8h1.5V5h-1.5Zm.22-.53l-2 2l1.06 1.06l2-2l-1.06-1.06Zm0 1.06l2 2l1.06-1.06l-2-2l-1.06 1.06Zm1.06 6.94l-2-2l-1.06 1.06l2 2l1.06-1.06Zm0 1.06l2-2l-1.06-1.06l-2 2l1.06 1.06ZM20.75 10A8.75 8.75 0 0 0 12 1.25v1.5A7.25 7.25 0 0 1 19.25 10h1.5ZM12 22.75A8.75 8.75 0 0 0 20.75 14h-1.5A7.25 7.25 0 0 1 12 21.25v1.5ZM3.25 14A8.75 8.75 0 0 0 12 22.75v-1.5A7.25 7.25 0 0 1 4.75 14h-1.5Zm1.5-4A7.25 7.25 0 0 1 12 2.75v-1.5A8.75 8.75 0 0 0 3.25 10h1.5Z"
          />
        </svg>
      </div>
      <main className="absolute left-0 top-0 flex min-h-screen w-full flex-col items-center justify-center">
        <h1 className="text-center text-3xl font-bold">
          Erwann Lagouche&apos;s portfolio
        </h1>
        <p className="mt-8">Welcome to my humble abode</p>
        <Link href="/blog" className="blur-bold mt-6 uppercase">
          Enter the blog
        </Link>
      </main>
    </section>
  );
};

export default Section0;
