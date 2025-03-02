import { motion } from "motion/react";

import data from "~/data/experience.json";

export default function Experience() {
  return (
    <div className="max-w-3xl mx-auto">
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-xl p-4 bg-white/5 divide-y divide-white/10"
      >
        {data.data.map((job, index) => (
          <li key={index}>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4 p-4">
              <div>
                <h3 className="text-white/80 text-lg">{job.role}</h3>
                <div className="text-sm text-white/30">{job.company}</div>
              </div>
              <div className="text-sm text-white/30">{job.duration}</div>
            </div>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
