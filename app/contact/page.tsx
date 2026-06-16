import { Brands } from "../components/Brands";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const contactItems = [
  {
    icon: "⌖",
    eyebrow: "OFFICE",
    title: "USS",
    lines: ["Dubai Hills Business Park 4 Flowork", "Office Floor 7, Unit 57, Dubai"],
  },
  {
    icon: "☎",
    eyebrow: "PHONE",
    title: "+971 4 000 0000",
    lines: ["Sun - Thu, 9:00 - 18:00 GST"],
  },
  {
    icon: "✉",
    eyebrow: "EMAIL",
    title: "hello@uss.com",
    lines: ["We reply within one business day."],
  },
];

const inputClass =
  "mt-[7px] h-[36px] w-full rounded-[8px] border border-[#d8dee8] bg-white px-[13px] font-[var(--font-inter)] text-[11px] font-normal text-[#111] outline-none shadow-[0_1px_2px_rgba(15,23,42,0.04)] placeholder:text-[#9aa4b2] focus:border-[#ff5500]";

function ContactForm() {
  return (
    <section className="w-full max-w-[508px] rounded-[22px] border border-[#d8dee8] bg-white px-[26px] py-[35px] text-black shadow-[0_32px_70px_rgba(15,23,42,0.08)] sm:px-[34px] sm:py-[39px]">
      <h2 className="font-[var(--font-be-vietnam)] text-[22px] font-medium leading-none tracking-[-0.45px]">
        Book a Call
      </h2>
      <p className="mt-[12px] max-w-[330px] font-[var(--font-inter)] text-[12.5px] font-normal leading-[1.45] tracking-[-0.1px] text-[#596b8b]">
        Tell us about your business — we&apos;ll reply within 24 hours.
      </p>

      <form className="mt-[29px]">
        <div className="grid gap-x-[16px] gap-y-[19px] sm:grid-cols-2">
          <label className="font-[var(--font-inter)] text-[12px] font-medium leading-none text-black">
            Name
            <input className={inputClass} placeholder="Your name" />
          </label>
          <label className="font-[var(--font-inter)] text-[12px] font-medium leading-none text-black">
            Email
            <input className={inputClass} placeholder="you@company.com" type="email" />
          </label>
          <label className="font-[var(--font-inter)] text-[12px] font-medium leading-none text-black">
            Phone
            <input className={inputClass} placeholder="+971..." />
          </label>
          <label className="font-[var(--font-inter)] text-[12px] font-medium leading-none text-black">
            Business Name <span className="text-[#54617a]">(optional)</span>
            <input className={inputClass} placeholder="Company" />
          </label>
        </div>

        <label className="mt-[22px] block font-[var(--font-inter)] text-[12px] font-medium leading-none text-black">
          Message / Requirement
          <textarea
            className="mt-[7px] min-h-[78px] w-full resize-none rounded-[8px] border border-[#d8dee8] bg-white px-[13px] py-[12px] font-[var(--font-inter)] text-[11px] font-normal text-[#111] outline-none shadow-[0_1px_2px_rgba(15,23,42,0.04)] placeholder:text-[#9aa4b2] focus:border-[#ff5500]"
            placeholder="What do you want to achieve?"
          />
        </label>

        <button
          className="mt-[20px] inline-flex h-[44px] w-full items-center justify-center rounded-full bg-[#ff5500] font-[var(--font-be-vietnam)] text-[13px] font-bold leading-none text-white transition hover:bg-[#ff6b1f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5500]"
          type="button"
        >
          Book a Call <span className="ml-[8px]">-&gt;</span>
        </button>
      </form>

      <p className="mt-[18px] text-center font-[var(--font-inter)] text-[10.5px] font-normal leading-none text-[#596b8b]">
        No spam. Your details stay with us.
      </p>
    </section>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="bg-black px-6 pb-[74px] pt-[80px] text-center text-white sm:px-10 sm:pb-[90px] sm:pt-[80px] lg:px-12 lg:pb-[105px]">
        <div className="mx-auto max-w-[700px]">
          <p className="font-[var(--font-be-vietnam)] text-[11px] font-bold uppercase leading-none tracking-[1px] text-[#ff5500]">
            CONTACT
          </p>
          <h1 className="mt-[28px] font-[var(--font-be-vietnam)] text-[46px] font-bold lowercase leading-[0.95] tracking-[-1.8px] sm:text-[60px] lg:text-[64px]">
            let&apos;s{" "}
            <span className="font-[var(--font-cormorant)] text-[1.18em] font-extralight timesFontFamily italic tracking-[-0.045em] text-[#ff5500]">
              talk
            </span>
          </h1>
          <p className="mx-auto mt-[27px] max-w-[650px] font-[var(--font-be-vietnam)] text-[16px] font-normal leading-[1.35] tracking-[-0.2px] text-white/80 sm:text-[18px]">
            Whether you&apos;ve got a clear plan or you&apos;re just exploring ideas,
            we&apos;re happy to chat and see how we can help. Drop us a message and
            we&apos;ll get back to you soon.
          </p>
        </div>
      </section>

      <section className="bg-[#f7f7f5] px-6 py-[74px] text-black sm:py-[84px] lg:py-[80px]">
        <div className="mx-auto grid max-w-[1150px] gap-[56px] lg:grid-cols-[420px_508px] lg:justify-between">
          <div className="pt-[5px]">
            <p className="font-[var(--font-inter)] text-[13px] font-normal leading-none text-[#395072]">
              Get in touch
            </p>
            <h2 className="mt-[25px] font-[var(--font-be-vietnam)] text-[31px] font-medium lowercase leading-[1.08] tracking-[-1.3px] sm:text-[34px]">
              reach out directly
            </h2>

            <div className="mt-[45px] flex flex-col gap-[43px]">
              {contactItems.map((item) => (
                <article className="grid grid-cols-[42px_minmax(0,1fr)] gap-[19px]" key={item.eyebrow}>
                  <div className="grid size-[42px] place-items-center rounded-full border border-[#d8dee8] bg-white font-[var(--font-inter)] text-[17px] leading-none text-black">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-[var(--font-inter)] text-[10px] font-normal uppercase leading-none tracking-[2px] text-[#687897]">
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-[15px] font-[var(--font-be-vietnam)] text-[16px] font-normal leading-none tracking-[-0.15px] text-black">
                      {item.title}
                    </h3>
                    <div className="mt-[12px] space-y-[4px]">
                      {item.lines.map((line) => (
                        <p
                          className="font-[var(--font-inter)] text-[14px] font-normal leading-[1.35] tracking-[-0.15px] text-[#546b8e]"
                          key={line}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <div className="bg-[#080808]">
        <Brands />
      </div>

      <Footer />
    </main>
  );
}
