"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section
      ref={ref}
      id="projects"
      className="h-full scroll-mt-28 md:-mt-40 lg:-mt-80"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center pt-2 text-white dark:text-stone-400">
        My projects
      </h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
