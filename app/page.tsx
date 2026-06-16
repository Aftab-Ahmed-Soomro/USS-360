import Image from "next/image";
import { Header } from "./components/Header";
import { Brands } from "./components/Brands";
import { EmailVisuals } from "./components/EmailVisuals";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Numbers } from "./components/Numbers";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Team } from "./components/Team";
import { Button } from "./components/common/Button";

const failPoints = [
  "No clear customer journey.",
  "Campaigns are sent randomly.",
  "Flows are missing or outdated.",
  "Revenue leaks after purchase.",
  "The audience does not feel nurtured.",
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
              className={`min-h-[180px] border-black/10 p-8 ${
                index % 2 ? "sm:border-l" : ""
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
    <section className="relative z-10 bg-black px-6 py-[78px] text-white ">
      <div className="mx-auto max-w-[1150px] text-center">
        <p className="text-[11px] font-bold uppercase tracking-[4px] text-[#ff5500]">START NOW</p>
        <h2 className="mt-8 text-[39px] font-medium leading-[1.08] tracking-[-1.6px] sm:text-[55px]">
          turn your database
          <br />
          into{" "}
          <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic text-[#ff5500]">
            repeat revenue
          </span>
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button className="h-[44px] px-8 text-[12px]">Book a Consultation</Button>
          <a className="text-[13px] font-bold text-white/80 transition hover:text-white" href="#services">
            View Services
          </a>
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
      <Hero />
      <Numbers />
      <EmailFails />
      <EmailSystem />
      <Brands />
      <Services />
      <EmailVisuals />
      <WorkWithUs />
      <Team />
      <Testimonials />
      <FinalCta />
      <Footer />
    </div>
  );
};

export default Page;
