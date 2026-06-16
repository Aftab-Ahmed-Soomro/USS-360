import Image from "next/image";
import { Footer } from "../components/Footer";
import { Button } from "../components/common/Button";
import { Header } from "../components/Header";

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

const process = [
  {
    number: "01",
    title: "DISCOVER",
    copy: "We dive deep into your business, audience, and market to uncover real opportunities.",
    icon: "/assets/searchIcon.png",
  },
  {
    number: "02",
    title: "STRATEGISE",
    copy: "We create a customised strategy with clear objectives, roadmap and success metrics.",
    icon: "/assets/fileIcon.png",
  },
  {
    number: "03",
    title: "EXECUTE",
    copy: "We execute with precision, bringing your strategy to life and scaling measurable results.",
    icon: "/assets/arrowIcon.png",
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
        <section className="relative bg-white text-black">
          <div className="bg-black text-white">
            <div className="relative mx-auto min-h-[293px] max-w-[1150px] px-6 pt-[50px]">
              <p className="font-[var(--font-be-vietnam)] text-[10px] font-medium uppercase leading-none tracking-[5px] text-white">
                ABOUT
              </p>
              <h1 className="mt-[31px] max-w-[1150px] font-[var(--font-be-vietnam)] text-[21px] font-bold leading-[1.05] tracking-normal">
                We&apos;re not your typical marketing agency.
                <span className="mt-[2px] block font-[var(--font-cormorant)] text-[74px] font-extralight timesFontFamily italic leading-[0.72] tracking-normal"  style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                  we are uss
                </span>
              </h1>
              <Button className="mt-[36px] h-[34px] px-[17px] text-[10px]">
                Book a Consultation
              </Button>
            </div>
          </div>

          <div className="relative mx-auto max-w-[1150px] px-6 py-[40px]  lg:min-h-[225px]">
            <p className="max-w-[480px] font-[var(--font-be-vietnam)] text-[15px] font-normal leading-[1.48] tracking-normal">
              At USS, we focus on one thing, growth that actually translates into revenue. We
              help brands across the US, UK, and Middle East scale through high-performance Meta
              Ads, Google Ads, and retention-driven email systems.
              <br />
              <br />
              At some point, you realise guessing doesn&apos;t scale.
            </p>

            <div className="relative mt-8 aspect-[345/393] w-full overflow-hidden sm:max-w-[345px] px-6 mr-6 lg:absolute lg:right-0 lg:top-[-199px] lg:mt-0">
              <Image
                src="/assets/uss.png"
                alt="USS strategy team planning a growth campaign"
                fill
                priority
                sizes="(min-width: 1024px) 345px, 90vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#11100f] px-6 py-[78px] text-white  lg:py-[113px]">
          <div className="pointer-events-none absolute left-[-90px] top-[-110px] h-[360px] w-[360px] rounded-full bg-[#7a2609] opacity-80 blur-[110px]" />
          <div className="pointer-events-none absolute bottom-[-120px] right-[-80px] h-[360px] w-[360px] rounded-full bg-[#8a330d] opacity-80 blur-[112px]" />

          <div className="relative mx-auto grid max-w-[1150px] gap-12 md:grid-cols-[424px_minmax(0,420px)] md:items-center md:justify-between">
            <div className="relative mx-auto aspect-[424/505] w-full max-w-[424px] overflow-hidden rounded-[12px] bg-[#f6efe3]">
              <Image
                src="/assets/founder.jpg"
                alt="Emmanuel Cole Williams, Founder and CEO of USS"
                fill
                sizes="(min-width: 768px) 424px, 86vw"
                className="object-cover object-[center_62%]"
              />
            </div>

            <div className="max-w-[420px]">
              <h2 className="text-[44px] font-bold leading-[0.96] tracking-[-1.8px] sm:text-[52px]">
                meet our
                <span className="mt-2 block font-[var(--font-cormorant)] text-[56px] font-extralight timesFontFamily italic leading-[0.82] tracking-[-0.8px] text-[#ff5500] sm:text-[64px]">
                  founder
                </span>
              </h2>
              <p className="mt-[35px] text-[15px] font-normal leading-[1.65] text-white">
                Over the past 12 years, I have built & scaled multiple businesses across the US, UK & Middle East, both my own companies and for clients. Having worked with 50+ SME clients across multiple industries at different stages of growth.
In my experience most businesses fail because their marketing systems aren’t structured properly. 
              </p>
              <p className="mt-[28px] inline-flex min-h-11 items-center rounded-full bg-white/10 px-6 text-[11px] font-bold leading-none text-white">
                Emmanuel Cole Williams Founder &amp; CEO of USS
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#080808] px-6 py-[92px] text-white  lg:pb-[139px] lg:pt-[112px]">
          <div className="mx-auto max-w-[1150px]">
            <h2 className="px-0 text-[40px] font-bold leading-none tracking-[-1.5px] sm:text-[50px] lg:px-[52px]">
              meet USS{" "}
              <span className="font-[var(--font-cormorant)] text-[1.08em] font-extralight timesFontFamily italic tracking-[-0.7px]">
                team
              </span>
            </h2>

            <div className="mt-[38px] flex items-center gap-3">
              <ArrowButton label="Previous team member" direction="left" />
              <div className="grid min-w-0 flex-1 grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-4">
                {team.map((member) => (
                  <article
                    className="relative aspect-[280/490] overflow-hidden"
                    key={member.name}
                    style={{ backgroundColor: member.color }}
                  >
                    <Image
                      src={member.image}
                      alt={`${member.name} ${member.role}`}
                      fill
                      sizes="(min-width: 1024px) 280px, (min-width: 640px) 43vw, 82vw"
                      className="object-cover"
                      style={{ objectPosition: member.position }}
                    />
                  </article>
                ))}
              </div>
              <ArrowButton label="Next team member" direction="right" />
            </div>
          </div>
        </section>

        <section className="bg-[#f7f7f6] px-6 pb-[86px] pt-[80px] text-black  lg:pb-[124px] lg:pt-[91px]">
          <div className="mx-auto max-w-[1150px]">
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase leading-none tracking-[7px] text-[#ff5500]">
                OUR APPROACH
              </p>
              <h2 className="mt-[35px] text-[42px] font-normal leading-[0.98] tracking-[-1.5px] sm:text-[55px]">
                a strategic process.
                <span className="mt-[13px] block font-[var(--font-cormorant)] text-[51px] font-extralight timesFontFamily italic leading-[0.8] tracking-[-0.8px] text-[#ff5500] sm:text-[62px]">
                  built for growth.
                </span>
              </h2>
              <p className="mx-auto mt-[37px] max-w-[500px] text-[17px] leading-[1.6]">
                We combine insight, strategy, and execution to create measurable growth that
                lasts.
              </p>
            </div>

            <div className="mt-[93px] grid gap-y-12 md:grid-cols-3 md:gap-y-0">
              {process.map((step, index) => (
                <article
                  className={`relative px-0 md:min-h-[355px] md:px-[38px] ${
                    index > 0 ? "md:border-l md:border-black/10" : ""
                  }`}
                  key={step.number}
                >
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-[var(--font-cormorant)] text-[118px] font-medium leading-[0.72] tracking-[-4px]">
                      {step.number}
                    </span>
                    <span className="grid size-[86px] shrink-0 place-items-center rounded-full bg-white text-[22px] font-normal text-[#ff5500] shadow-[0_18px_32px_rgba(0,0,0,0.08)]">
                      <img className="size-[20px]" src={step.icon} alt="" />
                    </span>
                  </div>
                  <div className="mt-[48px] h-px w-9 bg-[#ff5500]" />
                  <h3 className="mt-[33px] text-[24px] font-bold leading-none tracking-[-0.3px]">
                    {step.title}
                  </h3>
                  <p className="mt-[30px] max-w-[280px] text-[14px] font-normal leading-[1.7] text-black/70">
                    {step.copy}
                  </p>
                </article>
              ))}
            </div>

            <div className="mx-auto mt-[107px] grid max-w-[800px] overflow-hidden rounded-[16px] border border-black/[0.03] bg-white shadow-[0_22px_42px_rgba(0,0,0,0.08)] md:min-h-[110px] md:grid-cols-[452px_1fr]">
              <div className="flex items-center gap-[21px] px-8 py-7 md:px-[38px]">
                <span className="grid size-[46px] shrink-0 place-items-center border border-gray-200 p-3.5 rounded-full text-[22px] font-normal text-white shadow-[0_8px_16px_rgba(0,0,0,0.08)]">
                  <img src="/assets/star.png" alt="" />
                </span>
                <div>
                  <h3 className="text-[14px] font-bold leading-none tracking-[-0.2px]">
                    More Than a Process. A Partnership.
                  </h3>
                  <p className="mt-[11px] max-w-[350px] text-[11.5px] leading-[1.55] text-black/60">
                    We don&apos;t just follow a process &ndash; we partner with you at every
                    stage to drive sustainable, long-term growth.
                  </p>
                </div>
              </div>
              <div className="flex items-center border-t border-black/[0.06] px-8 py-7 md:border-l md:border-t-0 md:px-[31px]">
                <a
                  href="#contact"
                  className="inline-flex h-11 w-full max-w-[300px] items-center justify-center rounded-full bg-[#ff5500] px-6 text-[8.2px] font-medium uppercase tracking-[2px] text-white transition hover:bg-[#ff6b1f]"
                >
                  Let&apos;s Build Your Growth Story 
                  <span className="ml-[14px] text-[14px] leading-none">
                    <img className="size-[16px]" src="/assets/smallRightArrow.png" alt="" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
