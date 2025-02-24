import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/layout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx", [
      route("experience", "routes/experience.tsx"),
      route("skills", "routes/skills.tsx"),
    ]),
    route("projects", "routes/projects.tsx"),
    route("services", "routes/services.tsx"),
    route("contact", "routes/contact.tsx"),
  ]),
] satisfies RouteConfig;
