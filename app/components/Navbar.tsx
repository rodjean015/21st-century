"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import EnrollmentModal from "./EnrollmentForm";

const navItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Our Program", id: "program" },
    { label: "Contact Us", id: "contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [openEnroll, setOpenEnroll] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setVisible(false);
            } else {
                setVisible(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[92%] max-w-7xl z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-24"
                    }`}
            >
                <div className="rounded rounded-full bg-gradient-to-r from-orange-50/70 via-white/50 to-amber-50/70 backdrop-blur-md border border-orange-100 shadow-lg">
                    <div className="px-6 py-4 flex justify-between items-center">

                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <Image
                                src="/21st-logo.png"
                                alt="21st Learning Center Logo"
                                width={35}
                                height={35}
                                priority
                                className="rounded-full"
                            />
                            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent font-semibold text-xl">
                                21st Learning Center
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-6">
                            <ul className="flex gap-10 text-sm text-slate-800">
                                {navItems.map((item) => (
                                    <li key={item.id} className="group relative">
                                        <a
                                            href={`#${item.id}`}
                                            className="transition-colors duration-300 group-hover:text-orange-500"
                                        >
                                            {item.label}
                                        </a>
                                        <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-orange-400 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                                    </li>
                                ))}
                            </ul>

                            {/* Enroll Button */}
                            <button
                                onClick={() => setOpenEnroll(true)}
                                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-medium transition"
                            >
                                Enroll Now
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-slate-800"
                            onClick={() => setOpen(!open)}
                            aria-label="Toggle Menu"
                        >
                            {open ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden mt-2 rounded-2xl bg-gradient-to-r from-orange-50/70 via-white/50 to-amber-50/70 backdrop-blur-md border border-orange-100 shadow-lg">
                        <ul className="flex flex-col items-center gap-6 py-6 text-slate-800 text-sm">
                            {navItems.map((item) => (
                                <li key={item.id} onClick={() => setOpen(false)}>
                                    <a
                                        href={`#${item.id}`}
                                        className="transition-colors duration-300 hover:text-orange-500"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}

                            {/* Mobile Enroll */}
                            <li>
                                <button
                                    onClick={() => {
                                        setOpen(false);
                                        setOpenEnroll(true);
                                    }}
                                    className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-medium transition"
                                >
                                    Enroll Now
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>

            {/* Enrollment Modal */}
            <EnrollmentModal
                open={openEnroll}
                onClose={() => setOpenEnroll(false)}
            />
        </>
    );
}