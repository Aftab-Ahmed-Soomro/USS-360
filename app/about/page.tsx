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
      </main>

      <Footer />
    </div>
  );
}
