import Image from "next/image";
import Link from "next/link";
import FadeLeft from "./FadeLeft";
import FadeUp from "./FadeUp";
import FadeRight from "./FadeRight";

type NumberStat = {
  value: string;
  label: string;
};

type NumbersProps = {
  stats?: NumberStat[];
  eyebrow?: string;
  title?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

const defaultStats = [
  { value: "5x", label: "ROAS Achieved" },
  { value: "55M", label: "AED Generated in Revenue" },
  { value: "500k", label: "Leads Delivered" },
  { value: "100+", label: "Brands Worldwide" },
];

function Spark() {
  return (
    <span className="relative block h-[54px] w-[18px] shrink-0">
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white to-transparent" />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-white to-transparent" />
      <span className="absolute left-1/2 top-1/2 size-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_14px_5px_rgba(255,255,255,0.9)]" />
    </span>
  );
}

export function Numbers({
  stats = defaultStats,
  eyebrow = "OUR NUMBERS",
  title = "our numbers speak\nfor themselves",
  ctaLabel = "See More",
  ctaHref = "/projects",
}: NumbersProps) {
  const titleLines = title.split("\n");

  return (
    <section className="relative z-10 overflow-hidden bg-black px-6 py-[58px] text-white lg:py-[67px]">
      <Image
        src="/assets/sections/numbers-space.jpg"
        alt=""
        fill
        sizes="100vw"
        priority={false}
        className="object-cover object-center opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/45 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/35" />

      <div className="relative mx-auto max-w-[1150px] px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

          {/* Eyebrow + Title — left se slide in */}
          <FadeLeft delay={0.1}>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em]">{eyebrow}</p>
              <h2 className="mt-[19px] max-w-[490px] text-[38px] font-medium leading-[0.98] tracking-[-1.7px] sm:text-[48px] lg:text-[50px]">
                {titleLines.map((line, index) => (
                  <span className="block" key={`${line}-${index}`}>
                    {line}
                  </span>
                ))}
              </h2>
            </div>
          </FadeLeft>

          {/* CTA Button — right se slide in */}
          <FadeRight delay={0.2}>
            <Link
              className="inline-flex h-[42px] w-[210px] items-center justify-center gap-[15px] rounded-full bg-white text-[11px] font-extrabold text-black transition hover:bg-white/90"
              href={ctaHref}
            >
              {ctaLabel} <span className="text-[18px] leading-none">&rsaquo;</span>
            </Link>
          </FadeRight>

        </div>

        {/* Stats grid — har card niche se uthta hai, staggered */}
        <div className="mt-[58px] border-t border-white/12 pt-[43px]">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[54px]">
            {stats.map((stat, index) => (
              <FadeUp key={stat.label} delay={0.3 + index * 0.12}>
                <div className="flex items-center gap-[16px]">
                  <Spark />
                  <div>
                    <p className="text-[42px] font-extrabold leading-none tracking-[-1px] sm:text-[50px]">
                      {stat.value}
                    </p>
                    <p className="mt-[8px] text-[11px] font-normal leading-none text-white/95">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}