import { Outlet } from "react-router";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 flex-1 w-full flex pt-20 pb-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
