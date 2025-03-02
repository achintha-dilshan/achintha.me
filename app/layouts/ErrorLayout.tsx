import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

export default function ErrorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 flex-1 w-full flex pt-20 pb-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
