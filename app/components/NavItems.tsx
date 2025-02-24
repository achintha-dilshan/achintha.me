import Navlink from "./Navlink";

export default function NavItems({ onClick }: { onClick?: () => void }) {
  return (
    <ul
      className="flex flex-col sm:flex-row items-center justify-center gap-5"
      onClick={onClick}
    >
      <li>
        <Navlink to="/">Home</Navlink>
      </li>
      <li>
        <Navlink to="/about">About</Navlink>
      </li>
      <li>
        <Navlink to="/projects">Projects</Navlink>
      </li>
      <li>
        <Navlink to="/services">Services</Navlink>
      </li>
      <li>
        <Navlink to="/contact">Contact</Navlink>
      </li>
    </ul>
  );
}
