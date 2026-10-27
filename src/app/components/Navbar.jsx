"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeProvider";

const services = [
  { numeral: "I", title: "Professional Diction", subtitle: "Elocution, Phonics & Speech", path: "/diction" },
  { numeral: "II", title: "Website Design", subtitle: "Bespoke Brand & Corporate Sites", path: "/web-design" },
  { numeral: "III", title: "Mobile Apps", subtitle: "iOS & Android Engineering", path: "/mobile-apps" },
  { numeral: "IV", title: "Web Applications", subtitle: "Portals, SaaS & Automation", path: "/web-apps" },
];

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services", hasDropdown: true },
  { title: "Diction Awards", path: "/registration" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <>
      <header className="sticky top-0 z-50 apple-glass-nav border-b border-[#202860]/10 dark:border-[#232E66]/60 transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-14">
          {/* Brand Identity */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#131A3E] p-1 border border-[#D5DCF0] dark:border-[#232E66] shadow-sm flex items-center justify-center group-hover:border-[#B82020] transition-all duration-300 group-hover:scale-105">
              <Image
                src="/images/oma-logo.png"
                alt="Oma Logo"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </div>
            <span className="font-editorial font-bold text-sm tracking-tight text-[#202860] dark:text-white leading-none">
              OMA SERVICES
            </span>
          </Link>

          {/* Minimalist Apple-Style Center Navigation */}
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.title}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.path}
                    className={`flex items-center gap-1 text-xs font-medium transition-colors ${
                      isActive(link.path) ||
                      services.some((s) => pathname === s.path)
                        ? "text-[#B82020] dark:text-[#FF8A8A] font-semibold"
                        : "text-[#202860]/80 dark:text-slate-300 hover:text-[#B82020] dark:hover:text-[#FF8A8A]"
                    }`}
                  >
                    {link.title}
                    <ChevronDownIcon className="h-3 w-3 text-[#B82020] dark:text-[#FF8A8A]" />
                  </Link>

                  {/* Apple Store Frosted Dropdown Menu */}
                  {servicesOpen && (
                    <div className="absolute top-full left-0 pt-2.5 w-72">
                      <div className="bg-white/95 dark:bg-[#131A3E]/95 backdrop-blur-xl rounded-[22px] shadow-2xl p-2 border border-[#D5DCF0] dark:border-[#232E66]">
                        <div className="px-3 py-2 border-b border-[#E2E6F2] dark:border-[#232E66]">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#B82020] dark:text-[#FF8A8A]">
                            Practice Divisions
                          </span>
                        </div>
                        {services.map((s) => (
                          <Link
                            key={s.path}
                            href={s.path}
                            className={`flex items-start gap-3 p-3 rounded-xl transition-colors ${
                              pathname === s.path
                                ? "bg-[#FDF2F2] dark:bg-[#B82020]/25 text-[#202860] dark:text-white"
                                : "hover:bg-[#FAF8F5] dark:hover:bg-[#18214C] text-[#202860] dark:text-white"
                            }`}
                          >
                            <span className="w-7 h-7 rounded-lg bg-[#FDF2F2] dark:bg-[#B82020]/20 border border-[#F3CACA] dark:border-[#B82020]/40 text-[#B82020] dark:text-[#FF8A8A] font-editorial font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                              {s.numeral}
                            </span>
                            <div>
                              <div className="text-xs font-bold text-[#202860] dark:text-white">
                                {s.title}
                              </div>
                              <div className="text-[11px] text-[#5A6494] dark:text-[#94A3D3] mt-0.5">
                                {s.subtitle}
                              </div>
                            </div>
                          </Link>
                        ))}
                        <div className="mt-1 pt-2 border-t border-[#E2E6F2] dark:border-[#232E66] px-3 py-1.5">
                          <Link
                            href="/services"
                            className="text-xs font-bold text-[#B82020] dark:text-[#FF8A8A] hover:text-[#202860] dark:hover:text-white flex items-center justify-between"
                          >
                            <span>View Complete Storefront</span>
                            <span>&gt;</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.title}
                  href={link.path}
                  className={`text-xs font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-[#B82020] dark:text-[#FF8A8A] font-semibold"
                      : "text-[#202860]/80 dark:text-slate-300 hover:text-[#B82020] dark:hover:text-[#FF8A8A]"
                  }`}
                >
                  {link.title}
                </Link>
              )
            )}
          </div>

          {/* Compact Apple-Style Action Pills + Theme Toggle */}
          <div className="hidden md:flex items-center gap-2.5">
            <ThemeToggle />
            <Link
              href="/registration"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#FDF2F2] dark:bg-[#B82020]/20 border border-[#F3CACA] dark:border-[#B82020]/40 text-[#B82020] dark:text-[#FF8A8A] text-xs font-semibold hover:bg-[#B82020] hover:text-white transition-colors"
            >
              <span>★ 2024 Awards</span>
            </Link>
            <Link
              href="/contact"
              className="px-3.5 py-1.5 rounded-full bg-[#202860] dark:bg-[#B82020] text-white text-xs font-semibold hover:bg-[#B82020] dark:hover:bg-[#D12828] transition-colors shadow-sm"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="text-[#202860] dark:text-white p-1.5 rounded-lg border border-[#D5DCF0] dark:border-[#232E66] bg-white dark:bg-[#131A3E] focus:outline-none"
              onClick={() => setNavbarOpen(!navbarOpen)}
              aria-label="Toggle navigation menu"
            >
              {navbarOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {navbarOpen && (
          <div className="md:hidden bg-[#202860] dark:bg-[#0A0E24] text-white border-t-2 border-[#B82020]">
            <ul className="flex flex-col py-6 px-6 space-y-2">
              <li className="pb-3 border-b border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-300 font-semibold uppercase tracking-wider">Appearance</span>
                <ThemeToggle showLabel={true} className="bg-white/10 border-white/20 text-white" />
              </li>
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.path}
                    className={`block py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                      isActive(link.path)
                        ? "text-[#FF8A8A]"
                        : "text-slate-200 hover:text-white"
                    }`}
                    onClick={() => setNavbarOpen(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-white/10 mt-2">
                <p className="text-[11px] text-[#FF8A8A] mb-3 font-bold uppercase tracking-widest">
                  Practice Divisions
                </p>
                <div className="space-y-2">
                  {services.map((s) => (
                    <Link
                      key={s.path}
                      href={s.path}
                      className={`flex items-center gap-3 py-2 text-xs transition-colors ${
                        pathname === s.path
                          ? "text-[#FF8A8A] font-bold"
                          : "text-slate-300 hover:text-[#FF8A8A]"
                      }`}
                      onClick={() => setNavbarOpen(false)}
                    >
                      <span className="font-editorial text-[#FF8A8A] w-5">
                        {s.numeral}.
                      </span>
                      <span>{s.title}</span>
                    </Link>
                  ))}
                </div>
              </li>
              <li className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setNavbarOpen(false)}
                  className="block w-full text-center py-3 rounded-full bg-[#B82020] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Book Consultation →
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Apple Store-Style Promotional Announcement Ribbon */}
      <div className="bg-white dark:bg-[#0D1230] border-b border-[#E2E6F2] dark:border-[#232E66] py-2.5 px-6 text-center text-xs text-[#424B78] dark:text-[#94A3D3] transition-colors duration-300">
        <span>
          Enrolling schools and candidates for the{" "}
          <strong className="text-[#202860] dark:text-white">
            9th Annual Lagos OMA Diction Awards Competition
          </strong>{" "}
          (₦50,000 Top Prize per category).
        </span>
        <Link
          href="/registration"
          className="text-[#B82020] dark:text-[#FF8A8A] font-semibold hover:underline ml-1.5"
        >
          Register now &gt;
        </Link>
      </div>
    </>
  );
};

export default Navbar;
