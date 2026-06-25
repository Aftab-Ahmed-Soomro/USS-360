import Image from "next/image";

export default function WeAreUSS() {
  return (
    <section className="relative w-full bg-[#080808] overflow-hidden py-16 max-w-[1150px] mx-auto">
      {/* 3-column grid, ratios matched from mockup: ~31% / ~39% / ~30% */}
      <div className="grid grid-cols-1 lg:grid-cols-[31fr_39fr_30fr] items-center">

        {/* LEFT — Big heading */}
        <div className="flex items-center justify-start pl-[3.3%] py-16 lg:py-0 order-1 lg:order-none">
          <h2
            className="text-white font-extrabold uppercase leading-[0.9] z-1000 tracking-[-0.01em] whitespace-nowrap"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6.2rem)", fontFamily: "Poppins, sans-serif" }}
          >
            WE ARE
            <br />
            USS
            <span className="relative inline-block ml-2 align-baseline">
              <span className="absolute left-2 bottom-1 w-[0.22em] h-[0.22em] rounded-full bg-[#ff5a1f]" />
            </span>
          </h2>
        </div>

        {/* CENTER — Portrait image, aspect ratio matches actual asset (550x750) */}
        <div className="relative order-2 lg:order-none w-full aspect-[700/750]">
          <Image
            src="/assets/uss.png"
            alt="USS team collaborating"
            fill
            className="object-cover object-center"
            priority
            sizes="(min-width: 1024px) 39vw, 100vw"
          />
        </div>

        {/* RIGHT — Description text */}
        <div className="flex items-center justify-end pr-[2.2%] py-16 lg:py-0 order-3 lg:order-none">
          <div className="text-right text-[#bdbcbc] max-w-[360px] flex flex-col gap-8">
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
  );
}