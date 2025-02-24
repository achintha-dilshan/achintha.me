import { RiExternalLinkLine } from "react-icons/ri";

export default function Projects() {
  return (
    <div className="w-full">
      <h2 className="text-2xl border-b border-white/20 text-white/80 py-1.5 mb-6">
        Projects
      </h2>

      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-4">
        <li>
          <a
            href="https://www.vmdsolicitors.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 inline-block w-full min-h-36"
          >
            <div className="flex items-center justify-between gap-4 mb-2">
              <h3 className="text-xl text-white/80">VMD Solicitors</h3>
              <span className="p-2.5 bg-white/5 rounded-full flex items-center justify-center">
                <RiExternalLinkLine className="size-4 text-white/50" />
              </span>
            </div>
            <p className="text-sm text-white/30 underline">
              A Professional and Fully Responsive Website build for VMD
              Solicitors.
            </p>
          </a>
        </li>
        <li>
          <a
            href="https://flamingosl.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 inline-block w-full min-h-36"
          >
            <div className="flex items-center justify-between gap-4 mb-2">
              <h3 className="text-xl text-white/80">Flamingo SL</h3>
              <span className="p-2.5 bg-white/5 rounded-full flex items-center justify-center">
                <RiExternalLinkLine className="size-4 text-white/50" />
              </span>
            </div>
            <p className="text-sm text-white/30 underline">
              Elegant and User-Friendly UI Designed for Flamingo SL ecommerce
              Website.
            </p>
          </a>
        </li>
        <li>
          <a
            href="https://www.missionchurch.lk/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 inline-block w-full min-h-36"
          >
            <div className="flex items-center justify-between gap-4 mb-2">
              <h3 className="text-xl text-white/80">Mission Church</h3>
              <span className="p-2.5 bg-white/5 rounded-full flex items-center justify-center">
                <RiExternalLinkLine className="size-4 text-white/50" />
              </span>
            </div>
            <p className="text-sm text-white/30 underline">
              Clean and Simple Website Designed for Mission Church.
            </p>
          </a>
        </li>
      </ul>

      <div className="text-center mt-12">
        <p className="text-white/30 text-sm">
          Checkout{" "}
          <a
            href="https://github.com/achintha-dilshan"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Github
          </a>{" "}
          for more.
        </p>
      </div>
    </div>
  );
}
