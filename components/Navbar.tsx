"use client";

import { useRef, useState } from "react";

const links = [
  { title: "Platform", href: "#platform" },
  { title: "Çözümler", href: "#platform" },
  { title: "Kaynaklar", href: "#platform" },
  { title: "Hakkımızda", href: "#platform" },
  { title: "İletişim", href: "#platform" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);

  return (
    <header className="border-b border-stone-200 bg-white">
      <nav aria-label="Ana menü" className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
        onKeyDown={(event) => {
          if (event.key === "Escape" && open) {
            setOpen(false);
            button.current?.focus();
          }
        }}>
        <a href="#platform" onClick={() => setOpen(false)} aria-label="Bussion ana sayfa" className="text-2xl font-semibold tracking-tight text-emerald-950">
          bussion<span className="text-emerald-600">.</span>
        </a>
        <button ref={button} type="button" aria-expanded={open} aria-controls="navigation-links" onClick={() => setOpen(!open)}
          className="min-h-11 rounded-md border border-stone-200 px-4 text-sm text-stone-700 lg:hidden">
          {open ? "Menüyü kapat ×" : "Menü ☰"}
        </button>
        <ul id="navigation-links" className={`${open ? "flex" : "hidden"} mt-4 w-full flex-col gap-2 border-t border-stone-200 pt-3 lg:mt-0 lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-6 lg:border-0 lg:pt-0`}>
          {links.map((link) => (
            <li key={link.title}>
              <a href={link.href} onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded-md px-2 text-sm text-stone-600 hover:bg-stone-50">{link.title}</a>
            </li>
          ))}
          <li>
            <a href="#platform" onClick={() => setOpen(false)} className="flex min-h-11 items-center justify-center rounded-md bg-emerald-900 px-5 py-3 text-sm font-medium text-white hover:bg-emerald-800">Demo iste</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
