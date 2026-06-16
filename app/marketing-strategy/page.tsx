import Image from "next/image";
import Link from "next/link";
import { Brands } from "../components/Brands";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Numbers } from "../components/Numbers";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { ConsultationForm } from "../components/ConsultationForm";

type Bullet =
  | string
  | {
      label: string;
      detail: string;
    };

type StrategySection = {
  eyebrow: string;
  title: {
    before?: string;
    italic: string;
    after?: string;
  };
  copy: string;
  bullets: Bullet[];
  image: string;
  imageAlt: string;
  imageSide: "left" | "right";
  theme: "dark" | "light";
};

const strategySections: StrategySection[] = [
  {
    eyebrow: "WHY MOST MARKETING LACKS DIRECTION",
    title: {
      before: "the",
      italic: "problem",
    },
    copy:
      "Are you are running marketing but without a clear strategy? Without a strategy, marketing becomes a waste of time and budget.",
    bullets: [
      "Channels not aligned",
      "No clear positioning or messaging",
      "Inconsistent execution",
      "Budget spread across the wrong areas",
      "No clear path to scale",
    ],
    image: "/assets/problem1.png",
    imageAlt: "Marketing team discussing strategy in a meeting",
    imageSide: "right",
    theme: "dark",
  },
  {
    eyebrow: "OUR APPROACH TO MARKETING STRATEGY",
    title: {
      before: "our",
      italic: "system",
    },
    copy:
      "We create structured strategies designed to connect all parts of your marketing.",
    bullets: [
      {
        label: "Market and Audience Understanding",
        detail: "We analyse your audience, competitors and positioning",
      },
      {
        label: "Channel and Funnel Strategy",
        detail: "We define where and how to reach your audience.",
      },
      {
        label: "Messaging and Positioning",
        detail: "Clear, consistent messaging aligned with your brand.",
      },
      {
        label: "Scalable Growth Plan",
        detail: "A roadmap designed for long-term growth.",
      },
    ],
    image: "/assets/problem22.jpg",
    imageAlt: "Creative team reviewing marketing work together",
    imageSide: "left",
    theme: "light",
  },
  {
    eyebrow: "WHAT OUR STRATEGY COVERS",
    title: {
      italic: "services",
    },
    copy:
      "End-to-end strategic services that bring clarity, alignment, and direction to your marketing.",
    bullets: [
      "Full Marketing Strategy Development",
      "Go-to-Market Strategy",
      "Channel and Funnel Planning",
      "Brand and Messaging Direction",
      "Campaign Planning",
      "Growth Roadmaps",
    ],
    image: "/assets/problem3.jpg",
    imageAlt: "Strategist using a laptop",
    imageSide: "right",
    theme: "dark",
  },
  {
    eyebrow: "OUR STRATEGY FRAMEWORK",
    title: {
      italic: "process",
    },
    copy:
      "A clear, four-step framework that turns insight into a strategy ready to execute.",
    bullets: [
      "Step 1: Discovery and Analysis",
      "Step 2: Research and Insights",
      "Step 3: Strategy Development",
      "Step 4: Implementation Roadmap",
    ],
    image: "/assets/problem4.jpg",
    imageAlt: "Creative strategist framing an idea with his hands",
    imageSide: "left",
    theme: "light",
  },
  {
    eyebrow: "WAYS TO WORK WITH US",
    title: {
      italic: "engagements",
    },
    copy:
      "Whether you need clarity or a full growth plan, we have a way to work together.",
    bullets: [
      {
        label: "Initial Consultation",
        detail: "A short call to understand your business and challenges.",
      },
      {
        label: "Strategy Session",
        detail: "A detailed deep dive with a clear, actionable roadmap.",
      },
      {
        label: "Full Strategy Development",
        detail: "End-to-end marketing strategy tailored to your business.",
      },
      {
        label: "Growth Partnership",
        detail: "Ongoing strategy, execution and scaling.",
      },
    ],
    image: "/assets/problem5.jpg",
    imageAlt: "Strategist smiling during a phone call",
    imageSide: "right",
    theme: "dark",
  },
];

const strategyStats = [
  { value: "5x", label: "ROAS Achieved" },
  { value: "55M", label: "AED Generated in Revenue" },
  { value: "500K", label: "Leads Delivered" },
  { value: "100+", label: "Brands Worldwide" },
];

const relatedProjects = [
  {
    name: "Cinnamood",
    copy: "A launch strategy built around clarity, community, content and measurable growth.",
    image: "/assets/company/cinamood-card.jpg",
  },
  {
    name: "Yula Lounge",
    copy: "Positioning, campaign direction and content strategy for a premium hospitality brand.",
    image: "/assets/company/yula-card.jpg",
  },
];

function SectionTitle({ title }: { title: StrategySection["title"] }) {
  return (
    <h2 className="mt-[28px] flex flex-wrap items-baseline gap-x-[10px] font-[var(--font-be-vietnam)] text-[42px] font-medium lowercase leading-[0.92] tracking-[-1.5px] sm:text-[54px] lg:text-[60px]">
      {title.before ? <span>{title.before}</span> : null}
      <span className="font-[var(--font-cormorant)] text-[1.04em] font-extralight timesFontFamily italic tracking-[-0.04em]">
        {title.italic}
      </span>
      {title.after ? <span>{title.after}</span> : null}
    </h2>
  );
}

function BulletList({
  bullets,
  isLight,
}: {
  bullets: Bullet[];
  isLight: boolean;
}) {
  return (
    <ul className="mt-[31px] max-w-[520px] space-y-[18px]">
      {bullets.map((bullet) => {
        const key = typeof bullet === "string" ? bullet : bullet.label;

        return (
          <li
            className={`flex items-start gap-[13px] font-[var(--font-inter)] text-[12px] leading-[1.55] ${
              isLight ? "text-black/58" : "text-white/90"
            }`}
            key={key}
          >
            <span className="mt-[7px] size-[5px] shrink-0 rounded-full bg-[#ff5500]" />
            <span>
              {typeof bullet === "string" ? (
                <strong className="font-bold">{bullet}</strong>
              ) : (
                <>
                  <strong className={`${isLight ? "text-black" : "text-white"} font-bold`}>
                    {bullet.label}:
                  </strong>{" "}
                  {bullet.detail}
                </>
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function StrategyPanel({ section }: { section: StrategySection }) {
  const isLight = section.theme === "light";
  const textPanel = (
    <div
      className={`flex min-h-[440px] flex-col justify-center px-8 py-[72px] sm:px-12 lg:min-h-[590px] lg:px-[108px] ${
        isLight ? "bg-[#f5f4f1] text-black" : "bg-[#050505] text-white"
      }`}
    >
      <p
        className={`font-[var(--font-be-vietnam)] text-[8px] font-bold uppercase tracking-[4px] ${
          isLight ? "text-black/44" : "text-[#ff5500]"
        }`}
      >
        {section.eyebrow}
      </p>
      <SectionTitle title={section.title} />
      <p
        className={`mt-[25px] max-w-[485px] font-[var(--font-inter)] text-[15px] leading-[1.55] ${
          isLight ? "text-black/58" : "text-white/90"
        }`}
      >
        {section.copy}
      </p>
      <BulletList bullets={section.bullets} isLight={isLight} />
    </div>
  );

  const imagePanel = (
    <div className="relative min-h-[440px] overflow-hidden bg-[#111] lg:min-h-[590px]">
      <Image
        src={section.image}
        alt={section.imageAlt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover object-center"
      />
    </div>
  );

  return (
    <section className="grid lg:grid-cols-2">
      {section.imageSide === "left" ? (
        <>
          {imagePanel}
          {textPanel}
        </>
      ) : (
        <>
          {textPanel}
          {imagePanel}
        </>
      )}
    </section>
  );
}

function StrategyHero() {
  return (
    <section className="relative overflow-hidden bg-[#080808] px-6 pb-[34px] pt-[34px] text-white">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[44%] bg-[radial-gradient(circle_at_20%_20%,rgba(255,85,0,0.42),transparent_45%)]" />
      <div className="relative mx-auto grid max-w-[1150px] gap-8 lg:grid-cols-[minmax(0,470px)_360px] lg:items-center lg:justify-between">
        <div>
          <h1 className="max-w-[420px] font-[var(--font-be-vietnam)] text-[36px] font-medium lowercase leading-[0.98] tracking-[-1.3px] sm:text-[48px]">
            strategy that drives
            <br />
            <span className="font-[var(--font-cormorant)] text-[1.14em] font-extralight timesFontFamily italic">
              real growth
            </span>
          </h1>
          <p className="mt-[17px] max-w-[395px] font-[var(--font-inter)] text-[12px] leading-[1.65] text-white/82">
            We build marketing strategies that connect every channel, campaign and decision to clear business growth.
          </p>
          <Link
            className="mt-[18px] inline-flex h-[29px] min-w-[112px] items-center justify-center rounded-full bg-[#ff5500] px-5 font-[var(--font-be-vietnam)] text-[9px] font-bold text-white transition hover:bg-[#ff6b1f]"
            href="/contact"
          >
            Book a Call
          </Link>
        </div>
        <ConsultationForm />
      </div>
    </section>
  );
}

function RelatedProjects() {
  return (
    <section className="bg-[#080808] px-6 py-[56px] text-white">
      <div className="mx-auto max-w-[1150px]">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-[var(--font-be-vietnam)] text-[26px] font-medium lowercase leading-none tracking-[-0.7px]">
            related{" "}
            <span className="font-[var(--font-cormorant)] text-[1.18em] font-extralight timesFontFamily italic">
              projects
            </span>
          </h2>
          <Link className="font-[var(--font-inter)] text-[10px] text-white/75 hover:text-white" href="/projects">
            View all projects -&gt;
          </Link>
        </div>

        <div className="mt-[26px] grid gap-[24px] md:grid-cols-2">
          {relatedProjects.map((project) => (
            <article className="border-b border-white/35 pb-[23px]" key={project.name}>
              <div className="relative aspect-[420/245] overflow-hidden rounded-[6px] bg-[#111]">
                <Image
                  src={project.image}
                  alt={`${project.name} marketing strategy project`}
                  fill
                  sizes="(min-width: 768px) 45vw, calc(100vw - 48px)"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-[14px] font-[var(--font-be-vietnam)] text-[16px] font-medium leading-none">
                {project.name}
              </h3>
              <p className="mt-[8px] max-w-[360px] font-[var(--font-inter)] text-[11px] leading-[1.55] text-white/62">
                {project.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-[#f5f4f1] px-6 py-[78px] text-center text-black sm:px-10 lg:px-[48px]">
      <h2 className="mx-auto max-w-[430px] font-[var(--font-be-vietnam)] text-[30px] font-medium lowercase leading-[1.08] tracking-[-1px]">
        build a strategy that
        <br />
        actually{" "}
        <span className="font-[var(--font-cormorant)] text-[1.16em] font-extralight timesFontFamily italic">
          works
        </span>
      </h2>
      <p className="mx-auto mt-[15px] max-w-[430px] font-[var(--font-inter)] text-[12px] leading-[1.6] text-black/62">
        If your marketing feels disconnected, it’s time for a clearer approach.
      </p>
      <div className="mt-[22px] flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          className="inline-flex h-[31px] min-w-[128px] items-center justify-center rounded-full bg-[#ff5500] px-6 font-[var(--font-be-vietnam)] text-[10px] font-bold text-white transition hover:bg-[#ff6b1f]"
          href="/contact"
        >
          Book a Consultation
        </Link>
        <Link
          className="inline-flex h-[31px] min-w-[128px] items-center justify-center rounded-full border border-black/35 px-6 font-[var(--font-be-vietnam)] text-[10px] font-bold text-black transition hover:border-black"
          href="/projects"
        >
          Book a Strategy Call
        </Link>
      </div>
    </section>
  );
}

export default function MarketingStrategyPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <StrategyHero />
      {strategySections.map((section) => (
        <StrategyPanel key={section.eyebrow} section={section} />
      ))}
      <Numbers stats={strategyStats} />
      <Brands />
      <RelatedProjects />
      <Testimonials />
      <Team />
      <FinalCta />
      <Footer />
    </main>
  );
}
