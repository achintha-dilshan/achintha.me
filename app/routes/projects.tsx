import { motion } from "motion/react";
import Card from "~/components/Card";

import { RiExternalLinkLine } from "react-icons/ri";

import data from "~/data/projects.json";

export default function Projects() {
  return (
    <div className="w-full">
      <h2 className="text-2xl border-b border-white/20 text-white/80 py-1.5 mb-6">
        Projects
      </h2>

      <motion.ul
        initial="hidden"
        animate="visible"
        className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-4"
      >
        {data.data.map((project, index) => (
          <Card index={index} key={index} href={project.url}>
            <div className="flex items-center justify-between gap-4 mb-2">
              <h3 className="text-xl text-white/80">{project.title}</h3>
              <span className="p-2.5 bg-white/5 rounded-full flex items-center justify-center">
                <RiExternalLinkLine className="size-4 text-white/50" />
              </span>
            </div>
            <p className="text-sm text-white/30 underline">
              {project.description}
            </p>
          </Card>
        ))}
      </motion.ul>

      <div className="text-center mt-12">
        <p className="text-white/30 text-sm">
          Checkout{" "}
          <a
            href="https://github.com/achintha-dilshan"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Github
          </a>{" "}
          for more.
        </p>
      </div>
    </div>
  );
}
