import Image from "next/image";
import { Header } from "./components/Header";
import { Brands } from "./components/Brands";
import { Footer } from "./components/Footer";
import { Numbers } from "./components/Numbers";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Team } from "./components/Team";
import { Button } from "./components/common/Button";
import { HomeHero } from "./components/HomeHero";
import { MarketingSystems } from "./components/MarketingSystems";
import { GoodCompanyMap } from "./components/GoodCompanyMap";

const failPoints = [
  "No clear customer journey.",
  "Campaigns are sent randomly.",
  "Flows are missing or outdated.",
  "Revenue leaks after purchase.",
  "The audience does not feel nurtured.",
];

const process = [
  {
    number: "01",
    title: "DISCOVER",
    copy: "We dive deep into your business, audience, and market to uncover real opportunities.",
    icon: "/assets/rigggght_arrow.png",
  },
  {
    number: "02",
    title: "STRATEGISE",
    copy: "We create a customised strategy with clear objectives, roadmap and success metrics.",
    icon: "/assets/rigggght_arrow.png",
  },
  {
    number: "03",
    title: "EXECUTE",
    copy: "We execute with precision, bringing your strategy to life and scaling measurable results.",
  },
];

const workWays = [
  {
    title: "Email System Audit",
    copy: "A clear review of what is leaking revenue and what needs to be fixed first.",
  },
  {
    title: "Strategy Buildout",
    copy: "We map flows, campaigns, segments and the customer journey for predictable retention.",
  },
  {
    title: "Design & Deployment",
    copy: "We create branded email visuals, write conversion copy and launch the system.",
  },
  {
    title: "Reporting & Scaling",
    copy: "We monitor performance, improve weak points and scale what generates repeat revenue.",
  },
];

function EmailFails() {
  return (
    <section className="relative z-10 bg-[#f4f4f3] px-6 py-[74px] text-black">
      <div className="mx-auto grid max-w-[1150px] gap-12 lg:grid-cols-[minmax(0,470px)_minmax(0,520px)] lg:items-start lg:justify-between">
        <div>
          <h2 className="text-[36px] font-medium leading-[1.02] tracking-[-1.4px] sm:text-[48px]">
            why most{" "}
            <span className="font-[var(--font-cormorant)] text-[1.12em] font-light italic">
              email
            </span>
            <br />
            marketing fails
          </h2>
          <p className="mt-[20px] max-w-[410px] text-[14px] leading-[1.7] text-black/70">
            Most brands do not have an email problem. They have a structure problem.
          </p>
          <ul className="mt-[32px] space-y-[17px]">
            {failPoints.map((point) => (
              <li className="flex items-center gap-3 text-[14px] text-black/80" key={point}>
                <span className="size-1.5 rounded-full bg-[#ff5500]" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative aspect-[250/315] overflow-hidden bg-white shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
            <Image src="/assets/email_visuals/1st.png" alt="Email campaign visual" fill sizes="260px" className="object-cover object-top" />
          </div>
          <div className="grid gap-4">
            <div className="relative aspect-[255/150] overflow-hidden bg-white shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
              <Image src="/assets/email_visuals/2nd.png" alt="Email design grid" fill sizes="260px" className="object-cover object-top" />
            </div>
            <div className="relative aspect-[255/150] overflow-hidden bg-white shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
              <Image src="/assets/email_visuals/4th.png" alt="Retention email design" fill sizes="260px" className="object-cover object-top" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmailSystem() {
  return (
    <section className="relative z-10 bg-black px-6 py-[82px] text-white ">
      <div className="mx-auto grid max-w-[1150px] gap-12 lg:grid-cols-[minmax(0,520px)_minmax(0,420px)] lg:items-center lg:justify-between">
        <div>
          <p className="mb-[32px] text-[11px] font-bold uppercase tracking-[4px] text-white/80">
            RETENTION GROWTH
          </p>
          <h2 className="text-[38px] font-medium leading-[1.06] tracking-[-1.8px] sm:text-[52px]">
            our{" "}
            <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic text-[#ff5500]">
              email system
            </span>
            <br />
            for retention and growth
          </h2>
          <div className="mt-[58px] grid gap-8 sm:grid-cols-2">
            {[
              ["Flow Automation", "Welcome, abandoned cart, post purchase and win-back journeys."],
              ["Campaign Strategy", "Monthly campaigns built around launches, stories and offers."],
              ["Segmentation & Personalisation", "Sharper messaging based on customer behaviour."],
              ["Retention Reporting", "Clear visibility on revenue, repeat orders and customer value."],
            ].map(([title, copy]) => (
              <article className="border-t border-white/20 pt-5" key={title}>
                <h3 className="text-[16px] font-bold">{title}</h3>
                <p className="mt-3 text-[13px] leading-[1.65] text-white/70">{copy}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-[360/560] w-full max-w-[360px] overflow-hidden bg-white">
          <Image src="/assets/email_visuals/3rd.png" alt="Email retention flow visuals" fill sizes="360px" className="object-cover object-top" />
        </div>
      </div>
    </section>
  );
}

function Strategic() {
  return (
    <section className="bg-[#f7f7f6] px-6 pb-[50px] pt-[80px] text-black lg:pt-[81px]">
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
          <p className="mx-auto mt-[37px] max-w-[400px] text-[17px] leading-[1.6]">
            We combine insight, strategy, and execution to create measurable growth that
            lasts.
          </p>
        </div>

        <div className="mt-[93px] grid gap-y-12 md:grid-cols-3 md:gap-y-0">
          {process.map((step, index) => (
            <article
              className={`relative px-0 md:min-h-[355px] md:px-[38px] ${index > 0 ? "md:border-l md:border-black/10" : ""
                }`}
              key={step.number}
            >
              <div className="flex items-start justify-between gap-6">
                <span className="font-[var(--font-cormorant)] text-[118px] font-medium leading-[0.72] timesFontFamily tracking-[-4px]">
                  {step.number}
                </span>
                {step.icon && (
                  <span className="grid border border-black size-[50px] shrink-0 place-items-center rounded-full bg-white text-[22px] font-normal text-[#ff5500] shadow-[0_18px_32px_rgba(0,0,0,0.08)]">
                    <img className="size-[30px]" src={step.icon} alt="" />
                  </span>
                )}
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

        <div className="mx-auto mt-[50px] grid max-w-[800px] overflow-hidden rounded-[16px] border border-black/[0.03] bg-white shadow-[0_22px_42px_rgba(0,0,0,0.08)] md:min-h-[110px] md:grid-cols-[452px_1fr]">
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
              className="inline-flex h-11 w-full max-w-[300px] items-center justify-center rounded-full bg-[#ff5500] px-6 text-[7.5px] font-medium uppercase tracking-[2px] text-white transition hover:bg-[#ff6b1f]"
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
  )
}

function WorkWithUs() {
  return (
    <section className="relative z-10 bg-[#f4f4f3] px-6 py-[86px] text-black ">
      <div className="mx-auto grid max-w-[1150px] gap-12 lg:grid-cols-[300px_minmax(0,1fr)]">
        <div>
          <h2 className="text-[36px] font-medium leading-[1.04] tracking-[-1.4px] sm:text-[48px]">
            ways to
            <br />
            <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic">
              work with us
            </span>
          </h2>
          <p className="mt-[24px] text-[14px] leading-[1.7] text-black/70">
            Choose the level of support that fits where your email system is today.
          </p>
        </div>
        <div className="grid gap-0 sm:grid-cols-2">
          {workWays.map((way, index) => (
            <article
              className={`min-h-[180px] border-black/10 p-8 ${index % 2 ? "sm:border-l" : ""
                } ${index > 1 ? "sm:border-t" : ""}`}
              key={way.title}
            >
              <h3 className="text-[16px] font-bold">{way.title}</h3>
              <p className="mt-4 text-[13px] leading-[1.7] text-black/65">{way.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative z-10 px-6 py-[80px] text-white overflow-hidden">
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-[-15%] top-[-10%] h-[600px] w-[600px] rounded-full bg-[#ff5500] opacity-20 blur-[100px]" />
      <div className="pointer-events-none absolute right-[-15%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-[#ff5500] opacity-20 blur-[100px]" />

      <div className="relative mx-auto max-w-[800px] text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="h-1.5 w-1.5 rounded-full bg-[#ff5500]"></div>
          <p className="text-[9px] font-bold uppercase tracking-[3px] text-white/90">
            FULL-STACK MARKETING
          </p>
        </div>

        <h2 className="mb-10 text-[42px] font-medium leading-[1.05] tracking-[-1.5px] sm:text-[60px]">
          we are your{" "}
          <span className="font-[var(--font-cormorant)] text-[1.1em] font-light timesFontFamily italic">
            360&deg;
          </span>
          <br />
          <span className="font-[var(--font-cormorant)] text-[1.1em] font-light timesFontFamily italic">
            marketing agency
          </span>
        </h2>

        <div className="mx-auto max-w-[600px] space-y-8 text-[12px] leading-[1.7] tracking-[1.4px] text-white/80">
          <p>
            Calling ourselves a data-driven, problem solving, people connecting, digital crazy,
            talent engaging creative agency is too long winded.. so we call ourselves USS.
          </p>
          <p>
            We bring all digital platforms to one connected system designed to scale.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="h-[40px] w-full sm:w-auto px-10 rounded-full bg-[#ff5500] text-[8px] font-bold text-white transition-colors hover:bg-[#ff6b1f]">
            Book a Call
          </button>
          <button className="flex h-[40px] w-full sm:w-auto px-8 items-center justify-center gap-2 rounded-full border border-white bg-transparent text-[8px] font-bold text-white transition-colors hover:bg-white/5">
            See How We Scale
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 opacity-80">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

const Page = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080808]">
      <div className="pointer-events-none absolute left-[-40px] top-[76px] h-[357px] w-[377px] rounded-full bg-[#7a2609] opacity-80 blur-[90px]" />
      <div className="pointer-events-none absolute right-[-62px] top-[183px] h-[536px] w-[360px] rounded-full bg-[#8a330d] opacity-80 blur-[98px]" />
      <div className="pointer-events-none absolute bottom-[-120px] left-0 h-[180px] w-full bg-[#5b1803] opacity-55 blur-[80px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[4px] bg-[#222]" />
      <Header />
      <HomeHero />
      <Numbers />
      <Brands />
      <MarketingSystems />
      <Strategic />
      <Testimonials />
      <GoodCompanyMap />
      {/* <EmailFails /> */}
      {/* <EmailSystem /> */}
      {/* <Services /> */}
      {/* <WorkWithUs /> */}
      <Team />
      {/* <Testimonials /> */}
      <FinalCta />
      <Footer />
    </div>
  );
};

export default Page;
