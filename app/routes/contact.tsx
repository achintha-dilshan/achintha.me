import { motion } from "motion/react";

import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";

import avatar from "/avatar.png";

export default function Contact() {
  return (
    <div className="mx-auto self-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 w-fit min-w-60"
      >
        <div className="flex items-center flex-col divide-y divide-white/20">
          <div className="flex flex-col items-center p-6">
            <div className="p-1 rounded-full bg-gradient-to-br from-white/60 to-white/40">
              <div className="rounded-full object-cover overflow-hidden size-28">
                <img src={avatar} alt="Profile Picture" className="size-28" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-1 mt-2">
              <h2 className="text-2xl font-semibold bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                Achintha Dilshan
              </h2>
              <span className="py-1 px-3 bg-white/5 rounded-md text-xs text-white/50">
                Web Developer
              </span>
              <ul className="flex items-center gap-2 mt-2">
                <li>
                  <a
                    href="https://www.linkedin.com/in/achintha-dilshan"
                    target="_blank"
                  >
                    <IoLogoLinkedin className="size-5 text-white/50" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/achintha-dilshan" target="_blank">
                    <IoLogoGithub className="size-5 text-white/50" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=94761231570"
                    target="_blank"
                  >
                    <FaWhatsapp className="size-5 text-white/50" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6">
            <ul className="space-y-3">
              <li className="leading-none text-center">
                <div className="uppercase text-xs text-white/30">Email</div>
                <a
                  href="mailto:achii97d@gmail.com"
                  className="text-sm text-white/50"
                >
                  achii97d@gmail.com
                </a>
              </li>
              <li className="leading-none text-center">
                <div className="uppercase text-xs text-white/30">Phone</div>
                <a href="tel:+94761231570" className="text-sm text-white/50">
                  +94 76 123 1570
                </a>
              </li>
              <li className="leading-none text-center">
                <div className="uppercase text-xs text-white/30">Location</div>
                <span className="text-sm text-white/50">
                  Colombo, Sri Lanka
                </span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
