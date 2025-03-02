import { motion } from "motion/react";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

type FeatureItemProps = {
  index: number;
  feature: {
    title: string;
    count: number;
  };
};

export default function FeatureItem({ index, feature }: FeatureItemProps) {
  return (
    <motion.div
      variants={variants}
      custom={index}
      className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl py-6 px-4 text-center max-w-36 space-y-1"
    >
      <div className="font-bold text-3xl sm:text-4xl text-white/80 flex items-center justify-center">
        +<pre>{feature.count}</pre>
      </div>
      <div className="text-sm sm:text-base text-white/30 leading-tight">
        {feature.title}
      </div>
    </motion.div>
  );
}
