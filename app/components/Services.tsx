import Image from "next/image";

const services = [
  "Automation and Flow Setup",
  "Campaign Planning and Management",
  "Segmentation and Strategy",
  "Email Design and Copywriting",
  "Performance Tracking and Optimisation",
];

export function Services() {
  return (
    <section id="services" className="relative z-10 bg-[#080808] px-6 py-[86px] text-white ">
      <div className="mx-auto grid max-w-[1150px] gap-12 lg:grid-cols-[minmax(0,520px)_minmax(0,430px)] lg:items-center lg:justify-between">
        <div>
          <h2 className="max-w-[470px] text-[30px] font-medium leading-[1.05] tracking-[-1.7px] sm:text-[43px]">
            our{" "}
            <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic">
              email marketing
            </span>
            <br />
            services
          </h2>

          <div className="mt-[46px] border-t border-white/35">
            {services.map((service) => (
              <button
                className="flex min-h-[52px] w-full items-center justify-between border-b border-white/20 text-left text-[15px] font-medium"
                key={service}
                type="button"
              >
                {service}
                <span className="mr-4">
                  <img className="w-[16px] h-[16px]" src="/assets/red_arrow_icon.png" alt="" />
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative aspect-[430/520] overflow-hidden bg-[#141414]">
          <Image
            src="/assets/offer.png"
            alt="Email marketing service visual"
            fill
            sizes="(min-width: 1024px) 430px, 90vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
