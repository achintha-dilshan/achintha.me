export default function Footer() {
  return (
    <footer className="px-4">
      <div className="max-w-3xl mx-auto border-t border-white/5">
        <p className="text-sm text-center text-white/15 py-3">
          &copy; {new Date().getFullYear()}{" "}
          <a href="achintha.me">achintha.me</a>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
