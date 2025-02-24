import Counter from "~/components/CounterItem";
import type { Route } from "./+types/home";
import CounterItem from "~/components/CounterItem";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="max-w-xl mx-auto self-center">
      <div className="mb-10">
        <div className="text-xl sm:text-2xl text-center sm:text-left font-semibold text-white/30">
          Hey There!, I'm-
        </div>
        <h2 className="text-7xl sm:text-9xl mb-8 font-black bg-gradient-to-br from-white/80 to-white/50 bg-clip-text text-transparent text-center">
          Achintha Dilshan
        </h2>
        <p className="text-xl sm:text-2xl font-semibold text-white/30 text-center">
          I’m a web developer who loves crafting clean, scalable web
          applications. My goal is to build solutions that offer both
          exceptional performance and a delightful user experience.
        </p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl py-6 px-4 text-center max-w-36 space-y-1">
          <CounterItem target={3} />
          <div className="text-sm sm:text-base text-white/30 leading-tight">
            Years of Experience
          </div>
        </div>
        <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl py-6 px-4 text-center max-w-36 space-y-1">
          <CounterItem target={19} />
          <div className="text-sm sm:text-base text-white/30 leading-tight">
            Projects Completed
          </div>
        </div>
        <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl py-6 px-4 text-center max-w-36 space-y-1">
          <CounterItem target={6} />
          <div className="text-sm sm:text-base text-white/30 leading-tight">
            Worldwide Clients
          </div>
        </div>
      </div>
    </div>
  );
}
