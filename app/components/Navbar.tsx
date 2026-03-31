"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for background visibility
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled || isOpen
          ? "bg-white py-4 shadow-md" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-10">
        
        {/* 1. Brand Logo - Left Aligned */}
        <div className="flex-shrink-0 z-[110]">
          <Link 
            href="/" 
            onClick={closeMenu}
            className="text-2xl font-bold tracking-tighter text-stone-800 transition-opacity hover:opacity-80"
          >
            Kalsoom<span className="text-[#F3722C]">.</span>
          </Link>
        </div>

        {/* 2. Desktop Navigation - Right Aligned */}
        <div className="hidden md:flex gap-10 items-center">
          <Link href="/menu" className="text-sm font-semibold text-stone-800 hover:text-[#F3722C] transition-colors">
            Our Cakes
          </Link>
          <Link href="/weddings" className="text-sm font-semibold text-stone-800 hover:text-[#F3722C] transition-colors">
            Weddings
          </Link>
          <Link href="/about" className="text-sm font-semibold text-stone-800 hover:text-[#F3722C] transition-colors">
            Our Story
          </Link>
          <Link 
            href="https://wa.me/923335539381"
            target="_blank"
            className="px-8 py-2.5 bg-[#F3722C] text-white text-xs font-bold rounded-full hover:bg-[#D95D1D] transition-all shadow-lg active:scale-95"
          >
            Order Now
          </Link>
        </div>

        {/* 3. Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-stone-800 focus:outline-none p-2 relative z-[110]"
            aria-label="Toggle Menu"
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span className={`h-0.5 bg-stone-800 transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}></span>
              <span className={`h-0.5 bg-stone-800 transition-all duration-300 ${isOpen ? "opacity-0" : "w-4"}`}></span>
              <span className={`h-0.5 bg-stone-800 transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* 4. Mobile Menu Drop-down */}
      <div 
        className={`fixed left-0 right-0 top-0 w-full bg-white z-[90] shadow-2xl transition-all duration-500 ease-in-out md:hidden border-b border-stone-100 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-12 pt-28 pb-12">
          <Link href="/" onClick={closeMenu} className="text-lg font-bold text-stone-800">
            Home
          </Link>
          <Link href="/menu" onClick={closeMenu} className="text-lg font-bold text-stone-800">
            Our Cakes
          </Link>
          <Link href="/weddings" onClick={closeMenu} className="text-lg font-bold text-stone-800">
            Weddings
          </Link>
          <Link href="/about" onClick={closeMenu} className="text-lg font-bold text-stone-800">
            Our Story
          </Link>
          <Link 
            href="https://wa.me/923335539381"
            target="_blank"
            onClick={closeMenu}
            className="mt-2 px-10 py-3 bg-[#F3722C] text-white text-sm font-bold rounded-full shadow-lg"
          >
            WhatsApp Order
          </Link>
          
          <span className="mt-4 text-[10px] tracking-[0.3em] text-stone-400 uppercase">
            Rawalpindi • Islamabad
          </span>
        </nav>
      </div>
    </nav>
  );
}