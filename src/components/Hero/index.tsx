"use client";

import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";

import dynamic from "next/dynamic";
const StarrySky = dynamic(() => import("@/components/StarrySky"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Hero() {
  const { ref } = useSectionInView("Home");

  return (
    <section
      id="home"
      className="mt-2 sm:mt-9 text-center scroll-mt-[15rem] relative h-auto w-full"
      ref={ref}
    >
      <StarrySky />
      <div className="relative h-dvh z-10 flex flex-col items-center gap-4 md:gap-8">
        <h1
          className="w-full mx-auto py-2 text-center text-5xl md:text-7xl mb-1 md:mb-3 font-bold
      drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]"
        >
          Maria Klyass
        </h1>
        <p
          className="text-center text-xl md:text-3xl w-1/2 mb-3 font-medium bg-slate-50/10 mix-blend-soft-luminosity rounded-lg p-2 backdrop-blur-[0.5rem] shadow-lg shadow-black/5
      drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]"
        >
          Frontend developer
        </p>
        <div className="flex items-center justify-center">
          <div>
            <Image
              src="/portfolio.jpg"
              alt="profile photo"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-48 w-48 rounded-full object-cover border-[0.35rem] border-zinc-400/30 dark:border-stone-500/30 shadow-xl"
            />
          </div>
        </div>
        <motion.p
          className="mb-1 md:mb-10 mt-2 md:mt-4 px-4 text-base bg-slate-50/10 mix-blend-soft-luminosity rounded-lg py-0 md:py-4 backdrop-blur-[0.5rem] shadow-lg shadow-black/5 dark:bg-[#131211]/20 text-stone-300/90 dark:text-stone-300"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 1 },
          }}
        >
          Hi! I&apos;m Maria, a Frontend Developer fascinated with both
          technical and visual aspects of web development. I started with
          building simple HTML, CSS & JavaScript sites; now in my work I use
          React, Vite / NextJS, Tailwind and other frameworks & libraries.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-2 px-4 text-lg font-medium mb-0 md:mb-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 1 },
          }}
        >
          <a
            href="/Maria Klyass_CV.pdf"
            download={true}
            className="flex items-center gap-1 bg-[#5C5470]/50 backdrop-blur-[0.12rem] shadow-sm p-2.5 px-4 rounded-lg text-lg font-semibold hover:bg-stone-500/50 hover:text-stone-100 focus:scale-[1.12] hover:scale-[1.12] active:scale-105 transition dark:bg-[#B9B4C7]/40 text-stone-400/90 dark:text-stone-300"
          >
            Resume{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="opacity-70"
            >
              <path
                fill="currentColor"
                d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Zm-6 4q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Z"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className=" text-lg font-semibold bg-stone-500/40 backdrop-blur-[0.12rem] shadow-sm p-2.5 px-7 rounded-lg hover:bg-stone-500/50 hover:text-stone-100 hover:no-underline focus:scale-[1.12] hover:scale-[1.12] active:scale-105 transition text-stone-400/90 dark:text-stone-300"
          >
            Contact
          </a>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-2 px-4 mt-1.5 text-lg font-medium "
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 1 },
          }}
        >
          <a
            className="bg-[#f0eeed] p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 text-[1.5rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer  dark:bg-white/10 dark:text-white/60"
            href="https://linkedin.com/in/maria-klyass"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-[#f0eeed] p-4 text-gray-700 flex items-center gap-2 text-[1.5rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer  dark:bg-white/10 dark:text-white/60"
            href="https://github.com/mariaklyass"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
