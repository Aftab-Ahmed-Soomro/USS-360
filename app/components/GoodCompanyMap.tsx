import Image from "next/image";

export function GoodCompanyMap() {
  return (
    <section className="relative z-10 border-t border-t-black w-full bg-white py-16 md:py-24 px-4 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-center text-[36px] md:text-5xl lg:text-[52px] text-black tracking-tight mb-2">
          <span className="font-light">you&apos;re in</span>{" "}
          <span className="text-[#FF5722] italic font-serif px-1">good</span>{" "}
          <span className="font-medium">company</span>
        </h2>
        
        <p className="text-center text-[10px] md:text-xs lg:text-sm text-black tracking-[-1] font-medium uppercase mb-8 md:mb-12">
          DELIVERING SOLUTIONS ACROSS THE WORLD
        </p>

        <div className="w-full relative max-w-[1200px] mx-auto px-2">
          {/* Background Map (Network Lines) */}
          <img 
            src="/assets/Group 16.png" 
            alt="World map background" 
            className="w-full h-auto mx-auto"
          />
          {/* Foreground Logos */}
          <img 
            src="/assets/map.png" 
            alt="Companies we work with" 
            className="absolute max-w-[1000px] top-0 left-20 w-full h-auto mx-auto object-contain"
            style={{ padding: 'inherit' }}
          />
        </div>
      </div>
    </section>
  );
}
