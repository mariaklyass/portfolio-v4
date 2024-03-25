"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "../../context/active-section-context";

export default function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-zinc-400 border-opacity-40 bg-zinc-200/30 shadow-lg shadow-black/5 backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-[#131211]/40 dark:border-[#424141]"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] h-12 left-1/2 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex gap-4 w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-zinc-300 sm:w-[initial] sm:flex-nowrap sm:gap-5 dark:text-zinc-800">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-zinc-900 transition dark:text-[#dfdad5] dark:hover:text-[#f9f8f7]",
                  {
                    "text-[#090908] dark:text-[#f9f8f7]":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-[#928279]/20 rounded-full absolute inset-0 -z-10 dark:bg-stone-600/40"
                    layoutId="activeSection"
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

// sticky top-0 bg-zinc-200 backdrop-filter backdrop-blur-sm bg-opacity-30 border-b border-gray-400 text-zync-500 z-10
