import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Jerrill_Logo.png";

import social1 from "../assets/linkedi.svg";
import social2 from "../assets/github.svg";
import social3 from "../assets/gmail.svg";

import { menu } from "../assets";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    const navItems = ["Home", "TechStack", "Projects", "Certs", "Contact Me"];

    const socials = [
        { href: "https://www.linkedin.com/in/goh-jerrill-009b63284/", icon: social1, label: "LinkedIn" },
        { href: "https://github.com/GohJerrill", icon: social2, label: "GitHub" },
        { href: "mailto:gohjerrill316@gmail.com", icon: social3, label: "Email" },
    ];

    // LOGIC FIX: Scrolls to the ID and handles state
    const handleNavClick = (item) => {
        setActive(item);
        setToggle(false);
        const element = document.getElementById(item);

        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else if (item === "Home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 md:left-5 lg:left-24 sm:left-24 z-50 bg-[#050816] shadow-[0_2px_20px_rgba(0,0,0,0.35)]">

            {/* Header row */}
            <div className="mx-auto w-full max-w-7xl py-4 px-6 sm:px-0 sm:pl-12 sm:pr-10">
                {/* 3-col grid makes spacing stable on mobile */}
                <div className="grid grid-cols-[auto_1fr_auto] items-center">
                    {/* LEFT: Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 shrink-0"
                        onClick={() => {
                            setActive("");
                            setToggle(false);
                            window.scrollTo(0, 0);
                        }}
                    >
                        <img
                            src={Logo}
                            alt="Logo"
                            className="w-16 h-16 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain shrink-0"
                        />

                    </Link>

                    {/* CENTER: Nav Menu (Desktop only) */}
                    <div className="hidden sm:flex justify-center">
                        <ul className="flex items-center gap-6 md:gap-6 lg:gap-14 xl:gap-20 list-none">
                            {navItems.map((item) => (
                                <li
                                    key={item}
                                    onClick={() => handleNavClick(item)}
                                    className={`cursor-pointer font-iceland lg:text-[24px] md:text-[20px] transition-all duration-300 hover:text-[#915eff] hover:scale-[1.05] ${active === item ? "text-[#915eff]" : "text-white"
                                        }`}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT: Desktop socials OR Mobile hamburger */}
                    <div className="justify-self-end md:!pr-2 lg:pr-0">
                        {/* Desktop socials */}
                        <div className="hidden sm:flex gap-6">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group h-11 w-11 md:h-10 md:w-10 rounded-full
                                    bg-black/80 border border-white/10
                                    flex items-center justify-center
                                    transition-all duration-300
                                    hover:scale-110 hover:-translate-y-0.5
                                    hover:border-white/20
                                    hover:bg-linear-to-r hover:from-[#915eff] hover:via-sky-400 hover:to-emerald-400
                                    hover:shadow-[0_0_18px_rgba(56,189,248,0.45)]"
                                >
                                    <img src={s.icon} alt={s.label} className="w-5 h-5 invert transition" />
                                </a>
                            ))}
                        </div>

                        {/* Mobile hamburger */}
                        <button
                            type="button"
                            aria-label="Open menu"
                            onClick={() => setToggle(!toggle)}
                            className="sm:hidden p-2 rounded-lg hover:bg-white/10 transition !mr-3"
                        >
                            <img
                                src={menu}
                                alt="Menu"
                                className="w-7 h-7 object-contain"
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE: Overlay + Sidebar Drawer */}
            <div
                className={`sm:hidden fixed inset-0 z-[10000] transition-opacity duration-300 ${toggle ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Overlay */}
                <div
                    className="absolute inset-0 bg-black/70"
                    onClick={() => setToggle(false)}
                />

                {/* Drawer */}
                <div className={`absolute top-0 right-0 h-full w-[75%] max-w-[300px] bg-[#050816] opacity-100 border-l border-white/10 flex flex-col transition-transform duration-300 ease-in-out ${toggle ? "translate-x-0" : "translate-x-full"
                    }`}>

                    {/* 1. THE HEADER */}
                    <div className="flex items-center justify-between w-full pt-10 pb-6 pl-8 pr-12">

                        <div className="flex items-center">
                            <img
                                src={Logo}
                                alt="Logo"
                                className="w-16 h-16 object-contain"
                            />
                        </div>

                        <button
                            type="button"
                            onClick={() => setToggle(false)}
                            className="mr-4 w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 !mr-1"
                        >
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                    </div>

                    {/* 2. THE NAV */}
                    <ul className="!mt-4 flex flex-col gap-8 w-full !px-3">
                        {navItems.map((item) => (
                            <li
                                key={item}
                                onClick={() => handleNavClick(item)}
                                className={`font-iceland text-[28px] cursor-pointer transition-colors ${active === item ? "text-[#915eff]" : "text-white"
                                    }`}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="h-4 w-full shrink-0"></div>

                    {/* 3. THE SOCIALS */}
                    <div className="mt-auto pr-8 pb-16 pl-14 !px-3">
                        <div className="w-full h-[1px] bg-white/10 mb-8 ml-6" />
                        <div className="flex gap-5">
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