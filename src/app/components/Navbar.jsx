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
    <nav className="bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E5DEC9] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand Identity */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-white p-1.5 border border-[#E5DEC9] shadow-sm flex items-center justify-center group-hover:border-[#C59B27] transition-colors">
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
            <span className="font-editorial font-bold text-lg tracking-tight text-[#0F1729] block leading-none">
              OMA SERVICES
            </span>
            <span className="text-[11px] tracking-widest uppercase text-[#9A7418] font-semibold block mt-1">
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
                  className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider pb-1 transition-colors ${
                    isActive(link.path) || services.some((s) => pathname === s.path)
                      ? "text-[#9A7418] border-b-2 border-[#C59B27]"
                      : "text-[#334155] hover:text-[#0F1729]"
                  }`}
                >
                  {link.title}
                  <ChevronDownIcon className="h-3.5 w-3.5 text-[#9A7418]" />
                </Link>

                {/* Executive Dropdown Menu */}
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-3 w-72">
                    <div className="bg-white rounded-2xl shadow-2xl p-2 border border-[#E5DEC9]">
                      <div className="px-3 py-2 border-b border-[#FAF7F2]">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7418]">
                          Practice Divisions
                        </span>
                      </div>
                      {services.map((s) => (
                        <Link
                          key={s.path}
                          href={s.path}
                          className={`flex items-start gap-3 p-3 rounded-xl transition-colors ${
                            pathname === s.path
                              ? "bg-[#FAF4E4] text-[#0F1729]"
                              : "hover:bg-[#FAF7F2] text-[#0F1729]"
                          }`}
                        >
                          <span className="w-7 h-7 rounded-lg bg-[#FAF4E4] border border-[#E8D7B0] text-[#9A7418] font-editorial font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {s.numeral}
                          </span>
                          <div>
                            <div className="text-xs font-bold text-[#0F1729]">
                              {s.title}
                            </div>
                            <div className="text-[11px] text-[#64748B] mt-0.5">
                              {s.subtitle}
                            </div>
                          </div>
                        </Link>
                      ))}
                      <div className="mt-1 pt-2 border-t border-[#E5DEC9] px-3 py-1.5">
                        <Link
                          href="/services"
                          className="text-xs font-bold text-[#9A7418] hover:text-[#0F1729] flex items-center justify-between"
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
                className={`text-xs font-semibold uppercase tracking-wider pb-1 transition-colors ${
                  isActive(link.path)
                    ? "text-[#9A7418] border-b-2 border-[#C59B27]"
                    : "text-[#334155] hover:text-[#0F1729]"
                }`}
              >
                {link.title}
              </Link>
            )
          )}
        </div>

        {/* Executive Consultation Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-full bg-[#0F1729] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase hover:bg-[#1E293B] transition-colors shadow-sm"
          >
            Book Consultation →
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#0F1729] p-2 rounded-lg border border-[#E5DEC9] bg-white focus:outline-none"
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
        <div className="md:hidden bg-[#0F1729] text-[#FAF7F2] border-t border-[#C59B27]/30">
          <ul className="flex flex-col py-6 px-6 space-y-2">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.path}
                  className={`block py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    isActive(link.path)
                      ? "text-[#E5C158]"
                      : "text-slate-200 hover:text-white"
                  }`}
                  onClick={() => setNavbarOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t border-white/10 mt-2">
              <p className="text-[11px] text-[#E5C158] mb-3 font-bold uppercase tracking-widest">
                Practice Divisions
              </p>
              <div className="space-y-2">
                {services.map((s) => (
                  <Link
                    key={s.path}
                    href={s.path}
                    className={`flex items-center gap-3 py-2 text-xs transition-colors ${
                      pathname === s.path
                        ? "text-[#E5C158] font-bold"
                        : "text-slate-300 hover:text-[#E5C158]"
                    }`}
                    onClick={() => setNavbarOpen(false)}
                  >
                    <span className="font-editorial text-[#C59B27] w-5">
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
                className="block w-full text-center py-3 rounded-xl bg-[#C59B27] text-[#0F1729] text-xs font-bold uppercase tracking-wider"
              >
                Book Consultation →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
