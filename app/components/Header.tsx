"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./common/Button";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      <header className="relative z-10 mx-auto flex w-full max-w-[1150px] flex-col px-6 py-4 md:min-h-[72px] md:flex-row md:items-center md:justify-between md:gap-8 md:py-0 ">
        <div className="flex w-full items-center justify-between gap-3 md:order-2 md:w-auto md:shrink-0">
          <Link href="/contact" passHref>
            <Button className="h-[40px] cursor-pointer max-w-[calc(100vw-96px)] shrink-0 px-4 text-[13px] font-bold min-[360px]:px-5 sm:h-[42px] sm:px-[27px] sm:text-[16px]">
              Book a Consultation
            </Button>
          </Link>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close main navigation" : "Open main navigation"}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            className="inline-flex size-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-white/25 text-white transition hover:border-[#ff6b1f] hover:text-[#ff6b1f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a05] md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`mt-4 flex w-full flex-col gap-3 overflow-hidden border-t border-white/10 pt-4 transition-[max-height,opacity] duration-200 md:order-1 md:mt-0 md:w-auto md:flex-row md:items-center md:gap-8 md:overflow-visible md:border-0 md:pt-0 md:opacity-100 lg:gap-12 xl:gap-[112px] ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 md:max-h-none"
          }`}
        >
          {navItems.map((item) => (
            <Link
              className="py-1 text-[15px] font-medium tracking-[0] text-white transition hover:text-[#ff6b1f] md:py-0 md:text-[16px]"
              href={item.href}
              key={item.label}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
    </div>
  );
}
