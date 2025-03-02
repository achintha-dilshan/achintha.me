import { motion } from "motion/react";

import type { Route } from "./+types/home";

import data from "~/data/features.json";
import FeatureItem from "~/components/FeatureItem";

const bio =
  "I'm a web developer who loves crafting clean, scalable web applications. My goal is to build solutions that offer both exceptional performance and a delightful user experience.";

const containerVariant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.025, delayChildren: 0.5 },
  },
};

const letterVariant = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="max-w-xl mx-auto self-center pt-8 sm:pt-0">
      <div className="mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xl sm:text-2xl text-center sm:text-left font-semibold text-white/30"
        >
          Hey There!, I'm-
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
          className="text-7xl sm:text-9xl mb-8 font-black bg-gradient-to-br from-white/80 to-white/50 bg-clip-text text-transparent text-center"
        >
          Achintha Dilshan
        </motion.h2>
        <motion.p
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="text-xl sm:text-2xl font-semibold text-white/30 text-center"
        >
          {bio.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariant}>
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delay: 4.5,
              duration: 0.5,
              when: "beforeChildren",
              staggerChildren: 0.2,
            },
          },
        }}
        className="flex items-center justify-center gap-4"
      >
        {data.data.map((feature, index) => (
          <FeatureItem index={index} feature={feature} key={index} />
        ))}
      </motion.div>
    </div>
  );
}
