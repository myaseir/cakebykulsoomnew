"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const WHATSAPP_LINK = "https://wa.me/923335539381";

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  const serviceCategories = [
    {
      category: "Signature Cakes",
      tagline: "Bespoke designs for life's golden milestones.",
      image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      accent: "#76C893", // Mint
      services: [
        { name: "Custom Birthdays", detail: "Hand-sculpted themes tailored to your unique celebration." },
        { name: "Anniversary Tiers", detail: "Elegant, minimalist designs for timeless love stories." },
        { name: "Themed Fondant", detail: "Intricate sugar artistry and character modeling." },
        { name: "Gender Reveals", detail: "Surprise-filled centers with delicate exterior styling." },
        { name: "Luxury Cheesecakes", detail: "Baked New York style with premium fruit compotes." }
      ]
    },
    {
      category: "Celebration & Weddings",
      tagline: "Handcrafted centerpieces from my kitchen to your table.",
      image: "https://plus.unsplash.com/premium_photo-1704830496405-8b1d54c0d88c?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      accent: "#F3722C", // Orange
      services: [
        { name: "Bespoke Wedding Tiers", detail: "Elegant multi-layered cakes baked from scratch with a personal, artisanal touch." },
        { name: "Nikkah & Engagement", detail: "Delicate designs tailored specifically for traditional family ceremonies." },
        { name: "Hand-Painted Details", detail: "Artistic, edible illustrations and patterns painted directly onto fondant." },
        { name: "Homemade Fillings", detail: "Signature fruit preserves and rich curds made in Kalsoom's kitchen." },
        { name: "Personalized Toppers", detail: "Customized elements that reflect the unique story of the couple." }
      ]
    },
    {
      category: "Gourmet Patisserie",
      tagline: "Small bites, immense flavor.",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200",
      accent: "#76C893",
      services: [
        { name: "Artisanal Cupcakes", detail: "Gourmet toppings on a cloud-like sponge base." },
        { name: "Dessert Tables", detail: "A curated spread of tarts, eclairs, and brownies." },
        { name: "French Macarons", detail: "Delicate almond shells with ganache and buttercream." },
        { name: "Couture Cookies", detail: "Hand-painted royal icing cookies for gifting." },
        { name: "Corporate Gifting", detail: "Premium boxed treats with custom brand detailing." }
      ]
    },
    {
      category: "Savory & Bakes",
      tagline: "The perfect balance of salt and spice.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200",
      accent: "#F3722C",
      services: [
        { name: "Artisan Breads", detail: "Freshly baked sourdough and herb-infused focaccia." },
        { name: "Mini Savory Platters", detail: "Bite-sized quiches, puffs, and gourmet sliders." },
        { name: "Tea-Time Boxes", detail: "A classic selection of savory and sweet pairings." },
        { name: "Stuffed Croissants", detail: "Flaky, buttery pastry with premium savory fillings." }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD] selection:bg-[#76C893]/30">
      
      {/* 1. Modern Professional Header */}
      <section className="pt-40 pb-24 px-6 text-center">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#76C893]/10 text-[#2D6A4F] text-[10px] md:text-xs tracking-[0.4em] font-black uppercase mb-8">
            The Full Menu
          </span>
          <h1 className="text-5xl md:text-8xl font-bold text-stone-900 mb-8 tracking-tighter leading-none">
            Our <span className="text-[#76C893] italic font-serif font-light">Artistry.</span>
          </h1>
          <p className="text-stone-500 font-medium leading-relaxed text-lg md:text-2xl max-w-2xl mx-auto">
            "Every slice is a harmony of premium ingredients and handcrafted design."
          </p>
        </motion.div>
      </section>

      {/* 2. Services Listing - Modern Floating Grid */}
      <section className="pb-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="space-y-48">
          
          {serviceCategories.map((cat, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-24 items-center`}
            >
              
              {/* Category Visual - No Crop Floating Frame */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-5/12 relative"
              >
                <div 
                  className="absolute -inset-4 rounded-[2.5rem] opacity-10 -rotate-2"
                  style={{ backgroundColor: cat.accent }}
                ></div>
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl bg-white">
                  <img 
                    src={cat.image} 
                    alt={cat.category} 
                    className="object-contain w-full h-auto max-h-[600px] transition-transform duration-1000 hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Category Details */}
              <motion.div {...fadeInUp} className="w-full lg:w-7/12 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-10 h-10 rounded-xl text-white flex items-center justify-center font-bold shadow-lg"
                    style={{ backgroundColor: cat.accent }}
                  >
                    0{index + 1}
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tighter">
                    {cat.category}
                  </h2>
                </div>
                
                <p className="text-stone-500 font-bold text-sm tracking-widest uppercase mb-12">
                  {cat.tagline}
                </p>
                
                {/* Simplified Service Menu */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {cat.services.map((item, idx) => (
                    <div key={idx} className="group transition-all duration-300">
                      <h3 className="text-xl font-bold text-stone-800 mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cat.accent }}></span>
                        {item.name}
                      </h3>
                      <p className="text-stone-500 font-medium text-sm leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-16">
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    className="inline-flex items-center gap-4 px-10 py-4 bg-stone-900 text-white rounded-full font-bold text-xs tracking-widest uppercase hover:bg-[#F3722C] transition-all shadow-xl active:scale-95"
                  >
                    Customize Your Order
                    <span className="text-lg">→</span>
                  </a>
                </div>
              </motion.div>
              
            </div>
          ))}

        </div>
      </section>

      {/* 3. Luxury CTA Card */}
      <section className="px-6 md:px-12 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#76C893] rounded-[4rem] py-32 px-6 text-center text-white relative overflow-hidden shadow-2xl shadow-[#76C893]/20"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter">
              Ready for a slice of <br/> <span className="text-stone-900 italic font-serif">pure luxury?</span>
            </h2>
            <p className="text-stone-900/70 font-bold mb-12 text-sm md:text-lg tracking-widest uppercase">
              Handcrafted in Rawalpindi • Delivered to your table
            </p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              className="inline-block px-14 py-6 bg-[#F3722C] text-white text-lg font-bold rounded-full hover:bg-white hover:text-[#F3722C] transition-all shadow-2xl active:scale-95"
            >
              WhatsApp Inquiry
            </a>
          </div>
        </motion.div>
      </section>
      
    </main>
  );
}