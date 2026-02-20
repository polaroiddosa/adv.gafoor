"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "The Vision", href: "/vision" },
        { name: "Updates", href: "/updates" }, // Changed from 'news' to 'updates' to match previous context or just 'updates'
        { name: "Contact", href: "/contact" },
    ];

    const isTransparent = !isScrolled && pathname === "/";

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${!isTransparent
                ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo / Brand Name */}
                <Link
                    href="/"
                    className={`text-2xl font-serif font-bold tracking-tight transition-colors duration-300 ${!isTransparent ? "text-primary" : "text-white"
                        }`}
                >
                    Adv. V. E. Abdul Gafoor
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors relative group ${pathname === link.href
                                ? (!isTransparent ? "text-primary font-bold" : "text-white font-bold")
                                : (!isTransparent ? "text-gray-700 hover:text-primary" : "text-white/80 hover:text-white")
                                }`}
                        >
                            {link.name}
                            {pathname === link.href && (
                                <motion.span
                                    layoutId="underline"
                                    className={`absolute left-0 top-full block h-[2px] w-full mt-1 ${!isTransparent ? "bg-accent" : "bg-white"}`}
                                />
                            )}
                        </Link>
                    ))}
                    <button className={`px-5 py-2 rounded-full font-medium transition-colors text-sm ${!isTransparent ? "bg-primary hover:bg-primary-dark text-white" : "bg-white text-primary hover:bg-gray-100"}`}>
                        Join the Movement
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden hover:opacity-80 transition-opacity ${!isTransparent ? "text-gray-700" : "text-white"}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-primary-dark/95 backdrop-blur-md border-t border-accent/20 shadow-lg overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-lg font-medium text-white hover:text-accent`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button className="bg-accent text-primary font-bold px-5 py-3 rounded-full w-full mt-2">
                                Join the Movement
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
