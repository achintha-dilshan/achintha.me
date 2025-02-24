import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";

export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("experience");
  }, []);

  return (
    <div className="w-full">
      <div className="mb-10">
        <h2 className="text-2xl border-b border-white/20 text-white/80 py-1.5 mb-6">
          About Me
        </h2>
        <p className="text-white/30">
          I'm a self-taught developer with over 3 years of experience
          specializing in web development, with JavaScript as my main expertise.
          In addition, I have a good knowledge of Go. Apart from web
          development, I'm also familiar with mobile app development.
        </p>
      </div>

      <ul className="flex items-center justify-center gap-2 mb-6">
        <li>
          <NavLink
            to="experience"
            className={({ isActive }) =>
              [
                isActive
                  ? "text-white bg-white/20"
                  : "text-white/50 bg-white/5",
                "text-sm py-2 px-3 rounded-full",
              ].join(" ")
            }
          >
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            to="skills"
            className={({ isActive }) =>
              [
                isActive
                  ? "text-white bg-white/20"
                  : "text-white/50 bg-white/5",
                "text-sm py-2 px-3 rounded-full",
              ].join(" ")
            }
          >
            Skills
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
