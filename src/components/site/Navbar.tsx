import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/about", label: "من نحن" },
  { to: "/products", label: "المنتجات" },
  { to: "/partners", label: "الشركاء" },
  { to: "/contact", label: "تواصل" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-surface/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center bg-gradient-to-br from-[var(--cyan)] to-[var(--cyan-2)] text-black font-black">TK</span>
          <span className="font-black tracking-[0.18em] text-white text-sm">TECHNO<span className="text-[var(--cyan)]">DOOR</span></span>
        </Link>
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="px-4 py-2 text-sm font-bold text-white/60 hover:text-[var(--cyan)] transition-colors"
                activeProps={{ className: "px-4 py-2 text-sm font-bold text-[var(--cyan)]" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="hidden md:inline-flex gradient-cyan text-black px-5 py-2 text-xs font-black tracking-[0.18em] uppercase hover:opacity-90 transition"
        >
          اطلب عرض سعر
        </Link>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2" aria-label="menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-surface-low">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-2 text-white/80 font-bold">
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-3 gradient-cyan text-black text-center py-3 text-sm font-black tracking-[0.18em]">
              اطلب عرض سعر
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}