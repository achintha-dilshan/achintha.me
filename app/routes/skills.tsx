import { motion } from "motion/react";

import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { FaSass } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaVuejs } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

export default function Skills() {
  return (
    <div className="max-w-3xl mx-auto">
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="grid grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))] gap-2"
      >
        <li className="bg-white/5 rounded-md p-4 flex flex-col items-center gap-2">
          <FaHtml5 className="size-8 text-white/50" />
          <div className="text-xs text-white/50">HTML</div>
        </li>
        <li className="bg-white/5 rounded-md p-4 flex flex-col items-center gap-2">
          <FaCss3Alt className="size-8 text-white/50" />
          <div className="text-xs text-white/50">CSS</div>
        </li>
        <li className="bg-white/5 rounded-md p-4 flex flex-col items-center gap-2">
          <FaSass className="size-8 text-white/50" />
          <div className="text-xs text-white/50">SCSS</div>
        </li>
        <li className="bg-white/5 rounded-md p-4 flex flex-col items-center gap-2">
          <RiTailwindCssFill className="size-8 text-white/50" />
          <div className="text-xs text-white/50">Tailwind</div>
        </li>
        <li className="bg-white/5 rounded-md p-4 flex flex-col items-center gap-2">
          <IoLogoJavascript className="size-8 text-white/50" />
          <div className="text-xs text-white/50">JavaScript</div>
        </li>
        <li className="bg-white/5 rounded-md p-4 flex flex-col items-center gap-2">
          <SiTypescript className="size-8 text-white/50" />
          <div className="text-xs text-white/50">TypeScript</div>
        </li>
        <li className="bg-white/5 rounded-md p-4 flex flex-col items-center gap-2">
          <FaReact className="size-8 text-white/50" />
          <div className="text-xs text-white/50">React</div>
        </li>
        <li className="bg-white/5 rounded-md p-4 flex flex-col items-center gap-2">
          <FaVuejs className="size-8 text-white/50" />
          <div className="text-xs text-white/50">Vue</div>
        </li>
        <li className="bg-white/5 rounded-md p-4 flex flex-col items-center gap-2">
          <FaNodeJs className="size-8 text-white/50" />
          <div className="text-xs text-white/50">Node Js</div>
        </li>
        <li className="bg-white/5 rounded-md p-4 flex flex-col items-center gap-2">
          <FaLaravel className="size-8 text-white/50" />
          <div className="text-xs text-white/50">Laravel</div>
        </li>
        <li className="bg-white/5 rounded-md p-4 flex flex-col items-center gap-2">
          <SiMysql className="size-8 text-white/50" />
          <div className="text-xs text-white/50">MySql</div>
        </li>
        <li className="bg-white/5 rounded-md p-4 flex flex-col items-center gap-2">
          <FaGolang className="size-8 text-white/50" />
          <div className="text-xs text-white/50">Go Lang</div>
        </li>
      </motion.ul>
    </div>
  );
}
