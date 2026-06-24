import Image from "next/image";
import { Footer } from "../components/Footer";
import { Button } from "../components/common/Button";
import { Header } from "../components/Header";
import BrandElevationVideo from "../components/BrandElevationVideo";
import { Numbers } from "../components/Numbers";
import { Team } from "../components/Team";

const team = [
  {
    name: "MEET EMMANUEL",
    role: "CEO/Founder",
    image: "/assets/team/emanuel.png",
    color: "#72cc3b",
    position: "center bottom",
  },
  {
    name: "MEET MEERAL",
    role: "Marketing Director",
    image: "/assets/team/meeral.png",
    color: "#f45122",
    position: "center bottom",
  },
  {
    name: "MEET RUSS",
    role: "Content Creator",
    image: "/assets/team/russ.png",
    color: "#ff8f1a",
    position: "center bottom",
  },
  {
    name: "MEET SAADAT",
    role: "Creative Director",
    image: "/assets/team/saadat.png",
    color: "#45a9e9",
    position: "center bottom",
  },
];



function ArrowButton({ label, direction }: { label: string; direction: "left" | "right" }) {
  return (
    <button
      aria-label={label}
      className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-[19px] font-bold leading-none text-black transition hover:bg-white/90 sm:size-10"
    >
      {direction === "left" ? "\u2039" : "\u203a"}
    </button>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Header />
      
      <main>
        <section className="relative w-full bg-[#080808] py-20 overflow-hidden">
          {/* 3-column grid: big text | center image | description text */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px_1fr] xl:grid-cols-[1fr_500px_1fr] items-stretch min-h-[90vh]">

            {/* LEFT — Big heading */}
            <div className="flex items-center pl-6 md:pl-12 lg:pl-16 py-16 lg:py-0 order-1 lg:order-none">
              <h2
                className="text-white font-black uppercase leading-[0.82] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(3.2rem, 6vw, 8.5rem)' }}
              >
                WE ARE
                <br />
                USS<span className="text-[#ff5a00]">.</span>
              </h2>
            </div>

            {/* CENTER — Tall portrait image, fills grid cell height */}
            <div className="relative order-2 lg:order-none min-h-[600px]">
              <Image
                src="/assets/uss.png"
                alt="USS team collaborating"
                fill
                className=" object-center"
                priority
                sizes="(min-width: 1280px) 560px, (min-width: 1024px) 480px, 100vw"
              />
            </div>

            {/* RIGHT — Small description text */}
            <div className="flex items-center justify-end px-8   py-16 lg:py-0 order-3 lg:order-none">
              <div className="text-right text-[#c0bfbf] max-w-[360px] xl:max-w-[400px] flex flex-col gap-8">
                <p className="text-[14px] leading-[1.95] font-medium">
                  At USS, We Focus On One Thing, Growth That Actually Translates Into Revenue. We Help Brands Across The US, UK, And Middle East Scale Through High-Performance Meta Ads, Google Ads, And Retention-Driven Email Systems.
                </p>
                <p className="text-[14px] leading-[1.95] font-medium">
                  At Some Point, You Realize Guessing Doesn&apos;t Scale.
                </p>
              </div>
            </div>

          </div>
        </section>

        <BrandElevationVideo />

        <section className="relative overflow-hidden bg-black px-6 py-16 md:py-24 lg:py-32 text-black">

          {/* Top heading */}
          <div className="mx-auto max-w-[1200px] mb-12 md:mb-16">
            <p className="text-[#fff] text-[15px] md:text-[17px] font-medium tracking-normal leading-none" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 3rem)', fontWeight: 400 }}>
              meet our founder &
            </p>
            <h2
              className="text-[#e05c2a] italic leading-[0.9]"
              style={{ fontFamily: 'Times New Roman, Times, serif', fontSize: 'clamp(2rem, 4vw, 4rem)', fontWeight: 300 }}
            >
              <span style={{ fontFamily: "Arial, Helvetica, sans-serif", color: "white", fontSize: 'clamp(1.8rem, 3vw, 3rem)', fontWeight: 400}}>
                ceo {" "}
              </span>
              emmanuel
            </h2>
          </div>

          {/* 3-column body */}
          <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr_280px] gap-10 lg:gap-16 items-start">

            {/* LEFT — Portrait photo */}
            <div className="relative w-full max-w-[280px] mx-auto md:mx-0">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f0ece6]">
                <Image
                  src="/assets/founder.jpg"
                  alt="Emmanuel Cole Williams, Founder and CEO of USS"
                  fill
                  sizes="(min-width: 1024px) 280px, (min-width: 768px) 240px, 80vw"
                  className="object-cover object-[center_10%]"
                />
              </div>
            </div>

            {/* CENTER — Bio + Bold quote */}
            <div className="flex flex-col gap-8 lg:gap-10">
              <p className="text-[12px] leading-[1.9] text-[#aaa] max-w-[260px]">
                My name is Emmanuel, Founder & CEO of USS. Over the past 12 years, I have built & scaled multiple businesses across the US, UK & Middle East, both my own companies and for clients. Having worked with 50+ SME clients across multiple industries at different stages of growth.
              </p>
              <blockquote className="text-[1.45rem] md:text-[1.65rem] lg:text-[1.85rem] font-bold leading-[1.25] tracking-[-0.01em] text-white max-w-[500px]">
                &ldquo;Most businesses don&apos;t fail because of effort &ndash; they fail because they&apos;re following the wrong strategy.&rdquo;
              </blockquote>
            </div>

            {/* RIGHT — World map (desktop only) */}
            <div className="hidden lg:flex items-start justify-end pt-2">
              <div className="relative w-full max-w-[260px]">
                <h1 className="text-white">
                  Global Presence
                </h1>
                <Image
                  src="/assets/smallMap.png"
                  alt="Global reach — US, UK and Middle East"
                  width={260}
                  height={160}
                  className="object-contain opacity-100"
                />
                {/* Orange dot connectors */}
                <div className="absolute top-[38%] left-[18%] w-2 h-2 rounded-full bg-[#e05c2a]" />
                <div className="absolute top-[30%] left-[46%] w-2 h-2 rounded-full bg-[#e05c2a]" />
                <div className="absolute top-[42%] left-[72%] w-2 h-2 rounded-full bg-[#e05c2a]" />
                {/* Connector lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 260 160" fill="none">
                  <line x1="49" y1="61" x2="120" y2="49" stroke="#e05c2a" strokeWidth="0.8" strokeOpacity="0.7" />
                  <line x1="120" y1="49" x2="188" y2="68" stroke="#e05c2a" strokeWidth="0.8" strokeOpacity="0.7" />
                </svg>
              </div>
            </div>

          </div>
        </section>

        <Numbers />

        <Team />
      </main>

      <Footer />
    </div>
  );
}
