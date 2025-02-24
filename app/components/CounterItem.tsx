import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

type CounterItemProps = {
  target: number;
};

export default function CounterItem({ target }: CounterItemProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, target, { duration: 1 });
    return () => controls.stop();
  }, []);

  return (
    <div className="font-bold text-3xl sm:text-4xl text-white/80 flex items-center justify-center">
      +<motion.pre>{rounded}</motion.pre>
    </div>
  );
}
