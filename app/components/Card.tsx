import { motion } from "motion/react";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

type CardProps = {
  index?: number;
  href?: string;
  children: React.ReactNode;
};

export default function Card({ index, href, children }: CardProps) {
  if (href) {
    return (
      <motion.li variants={variants} custom={index}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 inline-block w-full min-h-36"
        >
          {children}
        </a>
      </motion.li>
    );
  }

  if (!index && !href) {
    return (
      <motion.div
        variants={variants}
        custom={index}
        className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 w-full min-h-36"
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.li
      variants={variants}
      custom={index}
      className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 w-full min-h-36"
    >
      {children}
    </motion.li>
  );
}
