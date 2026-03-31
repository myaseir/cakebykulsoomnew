"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function BridalPage() {
  const portfolio = [
    {
      src: "https://plus.unsplash.com/premium_photo-1669649154593-b13dcf9d12ee?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "The Ivory Grandeur",
      type: "Classic 5-Tier",
      description: "Hand-piped lace detailing inspired by vintage bridal veils.",
      accent: "#76C893" // Mint
    },
    {
      src: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "The Sculpted Swan",
      type: "Contemporary Ruffles",
      description: "Hand-folded fondant waves creating an architectural silhouette.",
      accent: "#F3722C" // Orange
    },
    {
      src: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop",
      title: "Gilded Sophistication",
      type: "Gold Leaf Accents",
      description: "24k edible gold leaf marbled across velvet fondant.",
      accent: "#76C893"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1680172800885-61c5f1fc188e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Nikkah Pearl",
      type: "Minimalist Chic",
      description: "Purity in design with a single statement sugar orchid.",
      accent: "#F3722C"
    },
    {
      src: "https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=800&auto=format&fit=crop",
      title: "Royal Crimson",
      type: "Traditional Barat",
      description: "Deep hues and intricate patterns for the modern bride.",
      accent: "#76C893"
    },
    {
      src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop",
      title: "Velvet Harmony",
      type: "Walima Elegance",
      description: "Soft textures meeting contemporary structural design.",
      accent: "#F3722C"
    },
  ];

  const ORDER_LINK = "https://wa.me/923335539381";

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  return (
    <main className="min-h-screen bg-[#FDFDFD] pt-24 selection:bg-[#76C893]/30">
      
      {/* Editorial Header */}
      <section className="py-24 px-6 text-center max-w-6xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#76C893] text-[10px] md:text-xs tracking-[0.6em] font-black uppercase mb-8 block"
        >
          Cakes By Kalsoom
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-[8rem] font-bold text-stone-900 mb-10 tracking-tighter leading-none"
        >
          The Bridal <br/> <span className="text-[#76C893] italic font-serif font-light lowercase">Collection.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-stone-500 font-medium text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed"
        >
          "Where tradition meets the avant-garde. We architect memories in sugar for your most cherished moments."
        </motion.p>
      </section>

      {/* Luxury Asymmetric Grid */}
      <section className="px-6 lg:px-20 max-w-[1400px] mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">
          {portfolio.map((item, index) => (
            <motion.div 
              key={index}
              {...fadeInUp}
              className={`relative group ${index % 2 === 1 ? 'md:mt-12' : ''}`}
            >
              {/* Decorative Frame */}
              <div 
                className="absolute -inset-4 rounded-[2.5rem] opacity-10 transition-transform duration-700 group-hover:rotate-2"
                style={{ backgroundColor: item.accent }}
              ></div>

              <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-auto object-contain transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
                
                {/* Elegant Minimal Overlay */}
                <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 backdrop-blur-[2px]">
                  <p className="text-white text-[10px] tracking-[0.3em] uppercase mb-2 font-bold" style={{ color: item.accent }}>
                    {item.type}
                  </p>
                  <h3 className="text-white text-2xl font-serif italic">
                    {item.title}
                  </h3>
                  <p className="text-stone-200 text-xs mt-2 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bespoke Process Section - Modern Card Style */}
      <section className="py-32 bg-stone-50 mt-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm tracking-[0.5em] uppercase text-[#76C893] font-black mb-4">The Bespoke Journey</h2>
            <p className="text-stone-900 text-3xl font-bold">Your story, baked to perfection.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Consultation", text: "A private session to discuss your vision, flavors, and venue aesthetics in Rawalpindi." },
              { step: "02", title: "The Design", text: "Sketching your masterpiece, from architectural tiers to handmade sugar floristry." },
              { step: "03", title: "Realization", text: "Hand-delivered and styled at your venue for a seamless, luxurious experience." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-transform">
                <span className="text-4xl font-black text-[#76C893]/20 mb-6 block">{step.step}</span>
                <h3 className="text-xl font-bold text-stone-900 mb-4">{step.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed font-medium">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Impact CTA Card */}
      <section className="px-6 md:px-12 py-40">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#76C893] rounded-[4rem] py-32 px-6 text-center text-white relative overflow-hidden shadow-2xl shadow-[#76C893]/20"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-white/[0.05] whitespace-nowrap pointer-events-none uppercase">
            Bridal
          </div>

          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-bold mb-12 tracking-tighter leading-tight">
              Ready to design <br/> <span className="text-stone-900 italic font-serif lowercase">your centerpiece?</span>
            </h2>
            <a 
              href={ORDER_LINK}
              target="_blank"
              className="inline-flex items-center gap-4 px-14 py-6 bg-white text-stone-900 text-lg font-black rounded-full hover:bg-stone-900 hover:text-white transition-all shadow-2xl active:scale-95"
            >
              Reserve Your Date
              <span className="text-xl">→</span>
            </a>
            <p className="mt-8 text-stone-900/60 font-bold text-xs tracking-widest uppercase italic">
              Limited Commissions Accepted Annually
            </p>
          </div>
        </motion.div>
      </section>

      {/* Refined Footer Credit */}
      <footer className="pb-16 text-center pt-12 border-t border-stone-100 mx-12">
        <p className="text-[10px] tracking-[0.5em] uppercase text-stone-400 font-bold">
          Cakes By Kalsoom <span className="mx-4 text-stone-200">|</span> Rawalpindi / Islamabad
        </p>
      </footer>
    </main>
  );
}