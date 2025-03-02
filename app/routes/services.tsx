import { motion } from "motion/react";
import Card from "~/components/Card";

import data from "~/data/services.json";

export default function Services() {
  return (
    <div className="w-full">
      <h2 className="text-2xl border-b border-white/20 text-white/80 py-1.5 mb-6">
        Services
      </h2>

      <motion.ul
        initial="hidden"
        animate="visible"
        className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-4"
      >
        {data.data.map((service, index) => (
          <Card index={index} key={index}>
            <h3 className="text-xl text-white/80 mb-2">{service.title}</h3>
            <p className="text-sm text-white/30">{service.description}</p>
          </Card>
        ))}
      </motion.ul>
    </div>
  );
}
