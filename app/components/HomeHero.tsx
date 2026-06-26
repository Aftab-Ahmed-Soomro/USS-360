import Image from "next/image";
import Link from "next/link";
import FadeLeft from "./FadeLeft";
import FadeDown from "./FadeDown";
import FadeUp from "./FadeUp";
import FadeRight from "./FadeRight";

export function HomeHero() {
  return (
    <section className="relative w-full min-h-[650px] h-[100svh] max-h-[1080px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/home_hero.png" 
          alt="Beautiful property with pool at night" 
          fill 
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-[1150px] mx-auto px-6 pt-24">
        <div className="max-w-[900px]">

          {/* Headline — slides in from left, two lines staggered */}
          <FadeLeft delay={0.1}>
            <h1 className="text-[44px] sm:text-[60px] md:text-[84px] leading-[1.05] text-white tracking-[-0.04em]">
              <span className="font-bold">built to </span>
              <span className="font-[var(--font-cormorant)] timesFontFamily italic font-light tracking-normal">scale.</span>
              <br />
              <span className="font-bold">designed to </span>
              <span className="font-[var(--font-cormorant)] timesFontFamily italic font-light tracking-normal">convert.</span>
            </h1>
          </FadeLeft>

          {/* Tagline — drops down after headline */}
          <FadeDown delay={0.3}>
            <p className="mt-4 text-white text-[12px] md:text-[14px] font-bold tracking-[0.4em] uppercase">
              WE ARE USS
            </p>
          </FadeDown>

          {/* CTA Button — rises up last */}
          <FadeUp delay={0.45}>
            <div className="mt-8 md:mt-10">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-[#ff5500] hover:bg-[#ff6b1f] text-white px-8 h-[46px] rounded-full font-[var(--font-be-vietnam)] text-[13px] font-bold transition"
              >
                Book a Consultation
              </Link>
            </div>
          </FadeUp>

        </div>
      </div>

      {/* Let's Connect — slides in from right, bottom corner */}
      {/* <FadeRight delay={0.55}> */}
        <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-10">
          <Link href="#connect" className="text-white text-[20px] md:text-[28px] tracking-tight hover:opacity-80 transition flex items-center gap-1">
            <span className="font-medium">let&apos;s</span> <span className="font-bold">connect</span>
          </Link>
        </div>
      {/* </FadeRight> */}

    </section>
  );
}