"use client";
import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  return (
    <main className="min-h-screen bg-[#FDFDFD] pt-20 selection:bg-[#76C893]/30">
      
      {/* 1. Modern Professional Header */}
      <section className="bg-stone-950 text-stone-200 py-32 md:py-48 px-6 text-center relative overflow-hidden">
        {/* Subtle Branding Texture Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#76C893] text-[10px] md:text-xs tracking-[0.6em] font-black uppercase mb-8 block"
          >
            The Kalsoom Standard
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-9xl font-bold text-white mb-10 tracking-tighter leading-none"
          >
            The Heart <br/> <span className="text-[#76C893] italic font-serif font-light lowercase">of the oven.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto font-medium leading-relaxed text-stone-400 text-lg md:text-2xl italic"
          >
            Discover the artistry behind Rawalpindi's premier luxury patisserie.
          </motion.p>
        </div>
      </section>

      {/* 2. Content Section - Layered "Floating" Grid */}
      <section className="py-32 md:py-48 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Floating Image with Mint Accent Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 relative group"
          >
            {/* The Mint Accent Frame - No Crop */}
            <div className="absolute -inset-4 bg-[#76C893]/10 rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
            
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl bg-white">
              <img 
                src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=1000" 
                alt="The Art of Baking" 
                className="w-full h-auto object-contain transition-all duration-[1.5s] group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Brand Narrative */}
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#F3722C] text-white flex items-center justify-center font-bold mb-8 shadow-lg shadow-[#F3722C]/20">
              <span className="text-xl italic font-serif">K</span>
            </div>
            <h4 className="text-[#76C893] text-[11px] tracking-[0.4em] uppercase font-black mb-4">
              Our Philosophy
            </h4>
            <h2 className="text-4xl md:text-6xl font-bold text-stone-900 mb-10 tracking-tight leading-tight">
              Flavor, Texture & <br/> <span className="text-[#F3722C]">Artistic Vision</span>
            </h2>
            
            <div className="space-y-8 text-stone-600 font-medium text-lg md:text-xl leading-relaxed">
              <p>
                Cakes By Kalsoom is an exclusive boutique kitchen where we focus on the intersection of fine art and high-end baking. We believe every celebration deserves a centerpiece that tastes as extraordinary as it looks.
              </p>
              <p>
                From the delicate placement of hand-crafted sugar flowers to the rich, balanced profiles of our signature sponges, our process is defined by patience and panache. We don't just bake; we design edible legacies for your most cherished moments.
              </p>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row gap-8 items-center w-full sm:w-auto">
              <Link 
                href="/weddings" 
                className="w-full sm:w-auto text-center px-10 py-5 bg-stone-900 hover:bg-[#F3722C] text-white rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-500 shadow-xl"
              >
                View The Collection
              </Link>
              <span className="text-[10px] tracking-[0.4em] uppercase text-stone-400 font-bold">
                Crafted in <span className="text-stone-900">Rawalpindi</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Signature Quote Card */}
      <section className="px-6 md:px-12 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#76C893] rounded-[4rem] py-32 px-6 text-center text-white relative overflow-hidden shadow-2xl shadow-[#76C893]/20"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-bold text-white/[0.05] whitespace-nowrap pointer-events-none uppercase italic font-serif">
            Kalsoom
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.p 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif italic text-white leading-tight mb-12"
            >
              "A cake is more than a dessert—it is the final note of a beautiful story."
            </motion.p>
            <div className="w-16 h-1 bg-white/30 mx-auto mb-8 rounded-full"></div>
            <span className="text-[11px] tracking-[0.5em] uppercase text-stone-900 font-black">
              Kalsoom’s Promise
            </span>
          </div>
        </motion.div>
      </section>
    </main>
  );
}