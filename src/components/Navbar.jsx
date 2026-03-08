import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Jerrill_Logo.png";

import social1 from "../assets/linkedi.svg";
import social2 from "../assets/github.svg";
import social3 from "../assets/gmail.svg";
import { menu } from "../assets";

const NAV_OFFSET = 110; // tweak if needed (navbar height)

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const navItems = useMemo(
    () => [
      { label: "Home", id: "Home" },
      { label: "TechStack", id: "TechStack" },
      { label: "Projects", id: "Projects" },
      { label: "Certs", id: "Certs" },
      { label: "Contact Me", id: "contact" }, // MUST match SectionWrapper(Contact, "contact")
    ],
    [],
  );

  const socials = [
    {
      href: "https://www.linkedin.com/in/goh-jerrill-009b63284/",
      icon: social1,
      label: "LinkedIn",
    },
    { href: "https://github.com/GohJerrill", icon: social2, label: "GitHub" },
    { href: "mailto:gohjerrill316@gmail.com", icon: social3, label: "Email" },
  ];

  const scrollToId = (id) => {
    if (id === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleNavClick = (item) => {
    setActive(item.label);
    setToggle(false);
    scrollToId(item.id);
  };

  // ✅ Scroll-spy (robust)
  useEffect(() => {
    const sections = navItems
      .filter((x) => x.id !== "Home")
      .map((x) => ({ ...x, el: document.getElementById(x.id) }))
      .filter((x) => x.el);

    if (!sections.length) return;

    let ticking = false;

    const updateActive = () => {
      const marker = NAV_OFFSET + 20;

      // Home when near top
      if (window.scrollY < 160) {
        setActive("Home");
        ticking = false;
        return;
      }

      // Find last section whose top has crossed the marker
      let current = "Home";
      for (const s of sections) {
        const top = s.el.getBoundingClientRect().top;
        if (top <= marker) current = s.label;
      }
      setActive(current);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActive);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // run once on mount
    updateActive();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [navItems]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050816] shadow-[0_2px_20px_rgba(0,0,0,0.35)]">
      <div className="mx-auto w-full max-w-screen-2xl py-4 px-6 sm:px-0 sm:pl-12 sm:pr-10">
        <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center">
          {/* LEFT: Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
            onClick={() => {
              setActive("Home");
              setToggle(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              className="w-16 h-16 md:!ml-5 lg:!ml-24 sm:!ml-24 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain shrink-0"
            />
          </Link>

          {/* CENTER: Nav Menu (Desktop) */}
          <div className="hidden sm:flex justify-center min-w-0">
            <ul className="flex items-center flex-nowrap list-none gap-5 md:gap-6 lg:gap-10 xl:gap-12 2xl:gap-16">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`whitespace-nowrap cursor-pointer font-iceland
                    text-[18px] md:text-[20px] lg:text-[24px]
                    transition-all duration-300 hover:text-[#915eff] hover:scale-[1.05]
                    ${active === item.label ? "text-[#915eff]" : "text-white"}`}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="justify-self-end">
            <div className="hidden sm:flex gap-5 lg:gap-6 !mr-10">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group h-11 w-11 md:h-10 md:w-10 rounded-full
                    bg-black/80 border border-white/10
                    flex items-center justify-center
                    transition-all duration-300
                    hover:scale-110 hover:-translate-y-0.5
                    hover:border-white/20
                    hover:bg-linear-to-r hover:from-[#915eff] hover:via-sky-400 hover:to-emerald-400
                    hover:shadow-[0_0_18px_rgba(56,189,248,0.45)]
                  "
                >
                  <img
                    src={s.icon}
                    alt={s.label}
                    className="w-5 h-5 invert transition"
                  />
                </a>
              ))}
            </div>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setToggle(!toggle)}
              className="sm:hidden p-2 rounded-lg hover:bg-white/10 transition !mr-3"
            >
              <img src={menu} alt="Menu" className="w-7 h-7 object-contain" />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE drawer */}
      <div
        className={`sm:hidden fixed inset-0 z-[10000] transition-opacity duration-300 ${
          toggle
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70"
          onClick={() => setToggle(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-[75%] max-w-[300px] bg-[#050816]
            opacity-100 border-l border-white/10 flex flex-col transition-transform duration-300 ease-in-out
            ${toggle ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between w-full pt-10 pb-6 pl-8 pr-12">
            <img src={Logo} alt="Logo" className="w-16 h-16 object-contain" />

            <button
              type="button"
              onClick={() => setToggle(false)}
              className="mr-4 w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 !mr-1"
            >
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="!mt-4 flex flex-col gap-8 w-full !px-3">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`font-iceland text-[28px] cursor-pointer transition-colors ${
                  active === item.label ? "text-[#915eff]" : "text-white"
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>

          <div className="mt-auto pr-8 pb-16 pl-14 !px-3">
            <div className="w-full h-[1px] bg-white/10 mb-8 ml-6" />
            <div className="flex gap-5 !mt-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 w-11 rounded-full bg-black flex items-center justify-center border border-white/10"
                >
                  <img src={s.icon} alt={s.label} className="w-5 h-5 invert" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
