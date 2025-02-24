export default function Services() {
  return (
    <div className="w-full">
      <h2 className="text-2xl border-b border-white/20 text-white/80 py-1.5 mb-6">
        Services
      </h2>

      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-4">
        <li className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 w-full min-h-32">
          <h3 className="text-xl text-white/80 mb-2">Web Development</h3>
          <p className="text-sm text-white/30">
            Building custom, mobile-friendly websites tailored to your needs.
          </p>
        </li>
        <li className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 w-full min-h-32">
          <h3 className="text-xl text-white/80 mb-2">Bug Fixing</h3>
          <p className="text-sm text-white/30">
            Fixing bugs and issues on your existing websites.
          </p>
        </li>
        <li className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 w-full min-h-32">
          <h3 className="text-xl text-white/80 mb-2">API Development</h3>
          <p className="text-sm text-white/30">
            Building efficient and scalable APIs for your applications.
          </p>
        </li>
        <li className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 w-full min-h-32">
          <h3 className="text-xl text-white/80 mb-2">Mobile App Development</h3>
          <p className="text-sm text-white/30">
            Crafting high-performance mobile apps tailored to your needs.
          </p>
        </li>
      </ul>
    </div>
  );
}
