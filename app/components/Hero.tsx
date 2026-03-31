"use client";

import React from 'react';

export default function Hero() {
  const ORDER_LINK = "https://wa.me/923335539381";
  
  // Using your requested working image URL
  const CAKE_HOLDER_IMAGE = "/hero.png";

  return (
    <section className="relative w-full min-h-screen bg-[#76C893] flex flex-col md:flex-row items-center overflow-hidden">
      
      {/* Left Side: Image of person holding the cake */}
     <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden">
  <img 
    src={CAKE_HOLDER_IMAGE} 
    alt="Cakes By Kalsoom Bespoke Design" 
    /* Changed to object-left to shift the visual content toward the right */
    className="w-full h-full object-cover object-[15%_center]" 
  />
  
  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] pointer-events-none"></div>
</div>

      {/* Right Side: Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-16 md:py-0 text-white">
        
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            You are special, <br />
            <span className="text-white">so should be your cake!</span>
          </h1>
          
          <p className="text-lg md:text-xl font-medium opacity-90 mb-10 leading-relaxed max-w-md">
            Delivering yummy, handcrafted cakes to your doorstep in Rawalpindi & Islamabad.
          </p>

          <div className="flex items-center gap-6">
            <a 
              href={ORDER_LINK}
              target="_blank"
              className="px-10 py-4 bg-[#F3722C] hover:bg-[#D95D1D] text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              Order Now
            </a>
            
            <button className="text-white font-semibold border-b-2 border-white/30 hover:border-white transition-all pb-1">
              View Gallery
            </button>
          </div>
        </div>
      </div>

    

    

    </section>
  );
}