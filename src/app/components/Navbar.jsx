"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

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
    <header className="sticky top-0 z-50">
      {/* Top Institutional Ribbon in Brand Cobalt (#202860) & Crimson (#B82020) */}
      <div className="bg-[#202860] text-white text-[11px] py-2 px-6 border-b-2 border-[#B82020]">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-[#B82020]"></span>
            <span>
              Lagos, Nigeria • Premier Elocution Academy &amp; Full-Stack Digital Engineering
            </span>
          </div>
          <Link
            href="/registration"
            className="text-red-200 hover:text-white font-semibold transition-colors hidden sm:inline"
          >
            ★ 2024 OMA Diction Awards — Registration Open →
          </Link>
        </div>
      </div>

      <nav className="bg-white/95 backdrop-blur-md border-b border-[#E2E6F2]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-white p-1.5 border border-[#D5DCF0] shadow-sm flex items-center justify-center group-hover:border-[#B82020] transition-colors">
              <Image
                src="/images/oma-logo.png"
                alt="Oma Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="font-editorial font-bold text-lg tracking-tight text-[#202860] block leading-none">
                OMA SERVICES
              </span>
              <span className="text-[11px] tracking-widest uppercase text-[#B82020] font-bold block mt-1">
                Diction &amp; Digital Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
                    className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider pb-1 transition-colors ${
                      isActive(link.path) || services.some((s) => pathname === s.path)
                        ? "text-[#B82020] border-b-2 border-[#B82020]"
                        : "text-[#202860] hover:text-[#B82020]"
                    }`}
                  >
                    {link.title}
                    <ChevronDownIcon className="h-3.5 w-3.5 text-[#B82020]" />
                  </Link>

                  {/* Executive Dropdown Menu */}
                  {servicesOpen && (
                    <div className="absolute top-full left-0 pt-3 w-72">
                      <div className="bg-white rounded-2xl shadow-2xl p-2 border border-[#D5DCF0]">
                        <div className="px-3 py-2 border-b border-[#E2E6F2]">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#B82020]">
                            Practice Divisions
                          </span>
                        </div>
                        {services.map((s) => (
                          <Link
                            key={s.path}
                            href={s.path}
                            className={`flex items-start gap-3 p-3 rounded-xl transition-colors ${
                              pathname === s.path
                                ? "bg-[#FDF2F2] text-[#202860]"
                                : "hover:bg-[#FAF8F5] text-[#202860]"
                            }`}
                          >
                            <span className="w-7 h-7 rounded-lg bg-[#FDF2F2] border border-[#F3CACA] text-[#B82020] font-editorial font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                              {s.numeral}
                            </span>
                            <div>
                              <div className="text-xs font-bold text-[#202860]">
                                {s.title}
                              </div>
                              <div className="text-[11px] text-[#5A6494] mt-0.5">
                                {s.subtitle}
                              </div>
                            </div>
                          </Link>
                        ))}
                        <div className="mt-1 pt-2 border-t border-[#E2E6F2] px-3 py-1.5">
                          <Link
                            href="/services"
                            className="text-xs font-bold text-[#B82020] hover:text-[#202860] flex items-center justify-between"
                          >
                            <span>View Complete Directory</span>
                            <span>→</span>
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
                  className={`text-xs font-bold uppercase tracking-wider pb-1 transition-colors ${
                    isActive(link.path)
                      ? "text-[#B82020] border-b-2 border-[#B82020]"
                      : "text-[#202860] hover:text-[#B82020]"
                  }`}
                >
                  {link.title}
                </Link>
              )
            )}
          </div>

          {/* Executive Consultation Button in Brand Crimson (#B82020) */}
          <div className="hidden md:flex items-center gap-2.5">
            <Link
              href="/registration"
              className="px-4 py-2 rounded-lg border-2 border-[#202860] text-[#202860] text-xs font-bold tracking-wider uppercase hover:bg-[#202860] hover:text-white transition-colors"
            >
              2024 Awards
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg bg-[#B82020] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#9E1818] transition-colors shadow-md shadow-[#B82020]/20"
            >
              Book Consultation →
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#202860] p-2 rounded-lg border border-[#D5DCF0] bg-white focus:outline-none"
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

        {/* Mobile Menu Drawer */}
        {navbarOpen && (
          <div className="md:hidden bg-[#202860] text-white border-t-2 border-[#B82020]">
            <ul className="flex flex-col py-6 px-6 space-y-2">
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
                  className="block w-full text-center py-3 rounded-xl bg-[#B82020] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Book Consultation →
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
