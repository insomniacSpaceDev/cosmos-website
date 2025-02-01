"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { href: "/about-us", label: "About Us" },
        { href: "/observatory", label: "Observatory" },
        { href: "/groundstation", label: "Ground Station" },
        { href: "/events", label: "Events" },
        { href: "/gallery", label: "Gallery" },
        { href: "/our-team", label: "Our Team" },
        { href: "/contact-us", label: "Contact Us" },
    ];

    return (
        <nav className="relative bg-black text-white">
            <div className="flex items-center justify-between px-4 md:px-6 py-4 mx-4 md:mx-20 rounded-b-3xl">
                {/* Logo */}
                <Link href="/">
                    <Image src="/LOGO.svg" alt="logo" height={125} width={125} />
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hover:text-gray-400 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop Sign-in Button */}
                <Button className="hidden md:block bg-gray-700 hover:bg-gray-600 text-white">
                    Sign in
                </Button>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden p-2" aria-label="Toggle menu">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "absolute top-full left-0 right-0 bg-black md:hidden transition-all duration-300 ease-in-out z-50",
                    isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible h-0"
                )}
            >
                <div className="px-4 py-4 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="block hover:text-gray-400 py-2 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button
                        className="w-full bg-gray-700 hover:bg-gray-600 text-white mt-4"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Sign in
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
