import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center px-4 pt-28 sm:pt-36 ${inter.className} min-h-screen bg-dark`}
    >
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Toaster position="top-center" />
    </main>
  );
}
