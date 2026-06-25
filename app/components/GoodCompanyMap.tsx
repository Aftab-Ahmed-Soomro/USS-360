import Image from "next/image";
import FadeDown from "./FadeDown";
import FadeLeft from "./FadeLeft";
import FadeUp from "./FadeUp";
import FadeRight from "./FadeRight";

export function GoodCompanyMap() {
  return (
    <section className="relative z-10 border-t border-t-black w-full bg-white py-16 md:py-24 px-4 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">

        {/* Main heading — fades up */}
        <FadeUp delay={0.1}>
          <h2 className="text-center text-[36px] md:text-5xl lg:text-[52px] text-black tracking-tight mb-2">
            <span className="font-light">you&apos;re in</span>{" "}
            <span className="text-[#FF5722] italic font-serif px-1">good</span>{" "}
            <span className="font-medium">company</span>
          </h2>
        </FadeUp>

        {/* Subheading — drops down after heading */}
        <FadeDown delay={0.2}>
          <p className="text-center text-[10px] md:text-xs lg:text-sm text-black tracking-[-1] font-medium uppercase mb-8 md:mb-12">
            DELIVERING SOLUTIONS ACROSS THE WORLD
          </p>
        </FadeDown>

        <div className="w-full relative max-w-[1200px] mx-auto px-2">

          {/* Background map lines — slides in from left */}
          <FadeLeft delay={0.3}>
            <img
              src="/assets/Group 16.png"
              alt="World map background"
              className="w-full h-auto mx-auto"
            />
          </FadeLeft>

          {/* Foreground logos — slides in from right, slightly after */}
          {/* <FadeRight delay={0.45}> */}
            <img
              src="/assets/map.png"
              alt="Companies we work with"
              className="absolute max-w-[1000px] top-0 left-20 w-full h-auto mx-auto object-contain"
              style={{ padding: "inherit" }}
            />
          {/* </FadeRight> */}

        </div>
      </div>
    </section>
  );
}