import { NavLink } from "react-router";

type NavlinkProps = {
  to: string;
  children: React.ReactNode;
};

export default function Navlink({ to, children }: NavlinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => [isActive ? "text-white" : "text-white/40", "text-2xl sm:text-sm"].join(" ")}
    >
      {children}
    </NavLink>
  );
}
