"use client";

import Hero from "./components/Hero";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  return (
    <main className="min-h-screen bg-[#FDFDFD] selection:bg-[#76C893]/30">
      <Hero />
      
      {/* 1. Philosophy - Refined Editorial Typography */}
      <section className="py-24 md:py-40 px-6">
        <motion.div 
          {...fadeInUp}
          className="max-w-5xl mx-auto text-center"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-[#76C893]/10 text-[#2D6A4F] text-[10px] md:text-xs tracking-[0.4em] font-black uppercase mb-10">
            The Kalsoom Standard
          </span>
          <h2 className="text-5xl md:text-8xl font-bold text-stone-900 mb-10 tracking-tight leading-[0.9]">
            Baked with Passion. <br/> 
            <span className="text-[#76C893] italic font-serif font-light">Styled for celebration.</span>
          </h2>
          <p className="text-stone-500 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto italic">
            "We don't just bake; we architect edible memories, ensuring every tier is as breathtaking as the moment it celebrates."
          </p>
        </motion.div>
      </section>

      {/* 2. Services Section - No-Crop Floating Layout */}
      <section className="pb-40 px-6 md:px-12 max-w-7xl mx-auto space-y-48">
        
        {/* Service 01: Weddings - Image Height is Fully Preserved */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-5 order-2 lg:order-1 lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#F3722C] text-white flex items-center justify-center font-bold shadow-lg shadow-[#F3722C]/20">
                01
              </div>
              <h3 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tighter">Weddings</h3>
            </div>
            <p className="text-stone-600 font-medium leading-relaxed mb-10 text-xl">
              Multi-tiered wonders customized to your theme. From hand-sculpted flowers to modern textures, crafted for your big day in <span className="text-stone-900 font-bold underline decoration-[#76C893]">Rawalpindi & Islamabad.</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 mb-12">
              {['Custom Design', 'Safe Delivery', 'Premium Taste', 'Live Tasting'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-bold text-stone-700">
                  <div className="w-2 h-2 rounded-full bg-[#76C893]" />
                  {item}
                </div>
              ))}
            </div>
            <Link href="/weddings" className="inline-block px-10 py-4 border-2 border-stone-900 text-stone-900 rounded-full font-bold hover:bg-stone-900 hover:text-white transition-all duration-500">
              View Wedding Tiers
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 order-1 lg:order-2 relative"
          >
            {/* The colored "glow" frame stays behind the full image */}
            <div className="absolute -inset-4 bg-[#76C893]/5 rounded-[3rem] -rotate-1"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://cakeoclock.pk/wp-content/uploads/2021/11/bride-to-be.jpg" 
                className="w-full h-auto block transform hover:scale-[1.02] transition-transform duration-1000" 
                alt="Full Wedding Cake" 
              />
            </div>
          </motion.div>
        </div>

        {/* Service 02: Birthdays - Image Height is Fully Preserved */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 relative"
          >
            <div className="absolute -inset-4 bg-[#F3722C]/5 rounded-[3rem] rotate-1"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=1200" 
                className="w-full h-auto block transform hover:scale-[1.02] transition-transform duration-1000" 
                alt="Full Birthday Cake" 
              />
            </div>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#F3722C] text-white flex items-center justify-center font-bold shadow-lg shadow-[#F3722C]/20">
                02
              </div>
              <h3 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tighter">Bespoke Joy</h3>
            </div>
            <p className="text-stone-600 font-medium leading-relaxed mb-10 text-xl">
              Turning imagination into edible art. From whimsical children's dreams to sophisticated milestones, we ensure every detail is perfect.
            </p>
            <a 
              href="https://wa.me/923335539381"
              target="_blank"
              className="inline-block px-12 py-5 bg-[#F3722C] text-white rounded-full font-bold text-sm tracking-widest uppercase shadow-xl hover:shadow-[#F3722C]/40 hover:-translate-y-1 transition-all"
            >
              Order for Birthday
            </a>
          </motion.div>
        </div>
      </section>

      {/* 3. Global CTA - Large Signature Card */}
      <section className="px-6 md:px-12 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#76C893] rounded-[4rem] py-32 px-6 text-center text-white relative overflow-hidden shadow-2xl shadow-[#76C893]/20"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-white/[0.05] whitespace-nowrap pointer-events-none uppercase">
            Kalsoom
          </div>

          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-bold mb-12 tracking-tighter leading-tight">
              Ready to design <br/> <span className="text-stone-900 italic font-serif lowercase">your masterpiece?</span>
            </h2>
            <a 
              href="https://wa.me/923335539381"
              className="inline-flex items-center gap-4 px-14 py-6 bg-white text-stone-900 text-lg font-black rounded-full hover:bg-stone-900 hover:text-white transition-all shadow-2xl active:scale-95"
            >
              Consult with Kalsoom
              <span className="text-xl">→</span>
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}