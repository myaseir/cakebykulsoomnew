export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-400 py-24 border-t border-stone-900 relative overflow-hidden">
      {/* Subtle Mint Glow to tie into the theme */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#76C893]/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
        
        <div className="md:col-span-1">
          <h3 className="text-3xl font-bold text-white mb-6 tracking-tighter">
            Cakes by Kalsoom<span className="text-[#F3722C]">.</span>
          </h3>
          <p className="text-xs leading-loose font-medium opacity-80 max-w-[200px]">
            Luxury patisserie located in Rawalpindi. We architect edible memories for life's most precious moments.
          </p>
        </div>
        
        <div>
          <h4 className="text-[#76C893] text-[10px] tracking-[0.4em] uppercase mb-8 font-black">The Studio</h4>
          <address className="not-italic text-xs font-medium leading-loose text-stone-300">
            Rafi, Western Drive Block<br />
            Rawalpindi, 46000<br />
            Pakistan
          </address>
        </div>

        <div>
          <h4 className="text-[#76C893] text-[10px] tracking-[0.4em] uppercase mb-8 font-black">Direct</h4>
          <div className="flex flex-col gap-3 text-xs font-medium">
            <a href="tel:03335539381" className="hover:text-[#F3722C] text-stone-200 transition-colors">
              +92 333 5539381
            </a>
            <p className="opacity-60 italic font-serif lowercase">mon - sat: 10am - 8pm</p>
          </div>
        </div>

        <div>
          <h4 className="text-[#76C893] text-[10px] tracking-[0.4em] uppercase mb-8 font-black">Social</h4>
          <div className="flex flex-col gap-3 text-xs font-medium">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F3722C]"></span>
              Instagram
            </a>
            <a href="https://wa.me/923335539381" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#76C893]"></span>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar - Professional Credit */}
      <div className="max-w-7xl mx-auto px-6 mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.3em] uppercase gap-6">
        <div className="text-stone-600 font-bold">
          © {currentYear} KALSOOM
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-stone-600 lowercase font-serif italic tracking-normal normal-case text-sm">digital experience by</span>
          <a 
            href="https://glacialabs.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-[#76C893] font-black transition-all duration-300 bg-white/5 px-4 py-1.5 rounded-full border border-white/10"
          >
            GLACIA LABS
          </a>
        </div>

        <div className="text-stone-600 font-bold">
          Rawalpindi • Islamabad
        </div>
      </div>
    </footer>
  );
}