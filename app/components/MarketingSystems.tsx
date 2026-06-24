"use client";

import Image from "next/image";

const systems = [
  { title: "MARKETING\nSTRATEGY", icon: "/assets/marketingGrowths/marketingSvg.png", angle: -90 },
  { title: "SOCIAL MEDIA\nMARKETING", icon: "/assets/marketingGrowths/socialMediaIcon.png", angle: -50 },
  { title: "META\nADS", icon: "/assets/marketingGrowths/metaIcon.png", angle: -10 },
  { title: "GOOGLE\nADWORDS", icon: "/assets/marketingGrowths/googleIcon.png", angle: 30 },
  { title: "CONTENT\nCREATION", icon: "/assets/marketingGrowths/contentIcon.png", angle: 70 },
  { title: "EMAIL\nMARKETING", icon: "/assets/marketingGrowths/emailIcon.png", angle: 110 },
  { title: "WHATSAPP\n& SMS", icon: "/assets/marketingGrowths/whatsappIcon.png", angle: 150 },
  { title: "TALENT\nMANAGEMENT", icon: "/assets/marketingGrowths/talentIcon.png", angle: 190 },
  { title: "WEBSITE\nTRANSFORMATION", icon: "/assets/marketingGrowths/websiteTransformationIcon.png", angle: 230 },
];

export function MarketingSystems() {
  return (
    <section className="bg-black py-20 px-4 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16 md:mb-24 z-10 mt-10">
        <p className="text-[#ff5500] text-[8px]  font-light tracking-[0.2em] uppercase mb-4">
          OUR SOLUTIONS
        </p>
        <h2 className="text-white text-[32px] md:text-[46px] leading-[1.1] tracking-tight">
          marketing systems<br />
          aligned for <span className="text-[#ff5500] font-[var(--font-cormorant)] italic font-light">growth</span>
        </h2>
      </div>

      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counter-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>

      {/* Circular Diagram Container */}
      <div className="relative w-full max-w-[340px] sm:max-w-[500px] md:max-w-[750px] aspect-square mx-auto">
        
        {/* Faint Concentric Circles (Static) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
          <div className="w-[50%] h-[50%] rounded-full border border-white absolute" />
          <div className="w-[84%] h-[84%] rounded-full border border-white absolute" />
        </div>

        {/* Central Planet (Static) */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          {/* Orange Glow Gradient */}
          <div className="absolute w-[80%] h-[80%] max-w-[400px] max-h-[400px] rounded-full bg-[#FF5A1F1A] blur-[40px]" />
          
          <div className="relative w-[100%] h-[100%] max-w-[330px] max-h-[330px]">
            <Image 
              src="/assets/marketingGrowths/growthCircle.png" 
              alt="Growth Planet" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-xs sm:text-sm md:text-xl font-medium tracking-[0.15em] uppercase">
                GROWTH
              </span>
            </div>
          </div>
        </div>

        {/* Rotating Systems Container */}
        <div className="absolute inset-0 z-20 pointer-events-none" style={{ animation: 'orbit 60s linear infinite' }}>
          
          {/* SVG Radial Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10">
            {systems.map(sys => {
              const rad = (sys.angle * Math.PI) / 180;
              const radiusPercent = 42;
              const x2 = 50 + radiusPercent * Math.cos(rad);
              const y2 = 50 + radiusPercent * Math.sin(rad);
              return (
                <line key={sys.title} x1="50%" y1="50%" x2={`${x2}%`} y2={`${y2}%`} stroke="white" strokeWidth="1" />
              );
            })}
          </svg>

          {/* Nodes */}
          {systems.map((sys) => {
            const rad = (sys.angle * Math.PI) / 180;
            const radiusPercent = 42; 
            const left = `calc(50% + ${radiusPercent * Math.cos(rad)}%)`;
            const top = `calc(50% + ${radiusPercent * Math.sin(rad)}%)`;

            // const isRightSide = sys.angle > -90 && sys.angle < 90;
            // const isTop = sys.angle === -90;
            // const isBottom = sys.angle === 90;

            let textClass = "absolute whitespace-nowrap text-[7px] sm:text-[9px] md:text-[12px] lg:text-[14px] text-white uppercase font-medium tracking-wide flex flex-col items-center text-center bottom-full left-1/2 -translate-x-1/2 mb-3 md:mb-5";
            
            // if (isTop) {
            //   textClass += "bottom-full left-1/2 -translate-x-1/2 mb-3 md:mb-5";
            // } else if (isBottom) {
            //   textClass += "top-full left-1/2 -translate-x-1/2 mt-3 md:mt-5";
            // } else if (isRightSide) {
            //   textClass += "left-full top-1/2 -translate-y-1/2 ml-3 md:ml-6";
            // } else {
            //   textClass += "right-full top-1/2 -translate-y-1/2 mr-3 md:mr-6";
            // }

            return (
              <div 
                key={sys.title} 
                className="absolute"
                style={{ left, top }}
              >
                <div style={{ animation: 'counter-orbit 60s linear infinite' }}>
                  <div className="relative pointer-events-auto w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px] -ml-[20px] -mt-[20px] sm:-ml-[28px] sm:-mt-[28px] md:-ml-[32px] md:-mt-[32px] lg:-ml-[36px] lg:-mt-[36px] bg-[#151515] border border-white/25 shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-full flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                    <div className="relative w-4 h-4">
                      <Image 
                        src={sys.icon} 
                        alt={sys.title.replace('\n', ' ')} 
                        fill 
                        className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </div>

                    {/* Label */}
                    <div className={textClass}>
                      {sys.title.split('\n').map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center mt-24 md:mt-32 z-10 flex flex-col items-center max-w-[800px] px-6">
        <h3 className="text-white text-xl md:text-[28px] font-medium tracking-wide mb-6">
          One Unified Growth Engine
        </h3>
        <p className="text-white/90 text-[8px] md:text-[11px] uppercase font-medium tracking-[0.3em] mb-4">
          BRAND &middot; CONTENT &middot; ADVERTISING &middot; AUTOMATION
        </p>
        <p className="text-white text-[10px] md:text-[13px] font-light">
          Working together to create measurable business growth.
        </p>
      </div>
    </section>
  );
}
