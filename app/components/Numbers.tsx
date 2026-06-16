import Image from "next/image";
import Link from "next/link";

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
  { value: "40%", label: "Avg. Open Rate" },
  { value: "2-5%", label: "Avg. Click Through Rate" },
  { value: "0.2%", label: "Avg. Unsubscribe Rate" },
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
    <section className="relative z-10 overflow-hidden bg-black px-6 py-[58px] text-white  lg:py-[67px]">
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

      <div className="relative mx-auto max-w-[1150px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
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

          <Link
            className="inline-flex h-[42px] w-[210px] items-center justify-center gap-[15px] rounded-full bg-white text-[11px] font-extrabold text-black transition hover:bg-white/90"
            href={ctaHref}
          >
            {ctaLabel} <span className="text-[18px] leading-none">&rsaquo;</span>
          </Link>
        </div>

        <div className="mt-[58px] border-t border-white/12 pt-[43px]">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[54px]">
            {stats.map((stat) => (
              <div className="flex items-center gap-[16px]" key={stat.label}>
                <Spark />
                <div>
                  <p className="text-[42px] font-extrabold leading-none tracking-[-1px] sm:text-[50px]">
                    {stat.value}
                  </p>
                  <p className="mt-[8px] text-[11px] font-normal leading-none text-white/95">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
