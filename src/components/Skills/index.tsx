"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const Skills = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      className="my-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      ref={ref}
    >
      <h2 className="text-3xl font-medium capitalize mb-8 mt-2 text-center pt-2 text-white dark:text-stone-400">
        Skills
      </h2>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 dark:text-stone-300">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-[#928279]/40 border border-stone-500/50 p-2 rounded-md px-3 shadow-xl text-stone-400/90 dark:bg-slate-50/10 mix-blend-soft-luminosity  dark:border-[#424141]"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
