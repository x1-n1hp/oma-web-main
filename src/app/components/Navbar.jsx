"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ThemeToggle } from "./ThemeProvider";
import { Button } from "./ui";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/services" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-transparent transition-[background-color,border-color] duration-150 ${
        scrolled ? "oma-nav-scrolled" : ""
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between gap-6 px-7">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 text-base font-semibold tracking-[-0.01em] text-oma-text"
        >
          <Image
            src="/images/oma-logo.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-auto"
          />
          <span>Oma Services</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`text-[15px] transition-colors duration-150 ${
                  active
                    ? "font-medium text-oma-text"
                    : "text-oma-text2 hover:text-oma-text"
                }`}
              >
                {link.title}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <div className="hidden sm:block">
            <Button variant="outlineSm" href="/contact">
              Book consultation
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-grid h-10 w-10 place-items-center rounded-oma border border-oma-line bg-oma-s1 text-oma-text transition-colors duration-150 hover:border-oma-lineStrong hover:bg-oma-s2 md:hidden"
          >
            {menuOpen ? (
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <MenuOverlay links={navLinks} onClose={() => setMenuOpen(false)} />
      )}
    </header>
  );
}
