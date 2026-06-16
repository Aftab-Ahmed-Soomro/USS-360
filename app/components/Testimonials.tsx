import Image from "next/image";

const testimonials = [
  {
    name: "Women Who Thrive",
    company: "DUBAI NETWORKING ORG",
    quote:
      "USS tripled our membership base within 15 months through organic growth alone. Their strategic approach to social and content has been transformative.",
    image: "/assets/testimonials/1st.png",
  },
  {
    name: "Residency Advanced",
    company: "CITIZENSHIP CONSULTANCY",
    quote:
      "125 high-quality conversions in a single month through Google Ads. The targeting, copy, structure everything was dialed in from day one.",
    image: "/assets/testimonials/2nd.png",
  },
  {
    name: "Cinnamood UAE",
    company: "GERMAN BAKERY FRANCHISE",
    quote:
      "From brand to content to strategy, USS helped us launch Cinnamood in Dubai while keeping our identity completely intact. Expert-led, seamless process.",
    image: "/assets/testimonials/3rd.png",
  },
];

function ArrowButton({ direction }: { direction: "left" | "right" }) {
  return (
    <button
      aria-label={direction === "left" ? "Previous testimonial" : "Next testimonial"}
      className="grid size-9 place-items-center rounded-full bg-[#ff5500] text-white transition hover:bg-[#ff6b1f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5500]"
    >
      <span className="text-[24px] leading-none">{direction === "left" ? "\u2190" : "\u2192"}</span>
    </button>
  );
}

export function Testimonials() {
  return (
    <section className="relative z-10 bg-white px-6 py-[58px] text-black lg:py-[66px]">
      <div className="mx-auto flex w-full max-w-[1150px] flex-col items-center">
        <div className="flex h-[15px] items-center gap-2">
          <span className="size-1 rounded-full bg-[#ff5500]" />
          <p className="font-[var(--font-be-vietnam)] text-[8px] font-bold uppercase leading-none tracking-[3px]">
            What Our Clients Say
          </p>
        </div>

        <h2 className="mt-[25px] w-full text-center font-[var(--font-be-vietnam)] text-[34px] font-medium lowercase leading-none tracking-[-0.7px] sm:text-[42px]">
          why brands stay with us
        </h2>

        <div className="mt-[58px] grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article className="relative" key={testimonial.name}>
              <div className="absolute left-[24px] top-[-45px] z-10 size-[75px] rounded-full ">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name} client portrait`}
                  fill
                  sizes="75px"
                  className="object-contain object-bottom"
                />
              </div>

              <div className="min-h-[210px] rounded-[16px] border border-[#ede9fc] bg-[#fbfafe] px-[24px] pb-[28px] pt-[42px]">
                <div className="w-full">
                  <h3 className="font-[var(--font-be-vietnam)] text-[14px] font-bold leading-[1.25] text-black">
                    {testimonial.name}
                  </h3>
                  <p className="mt-[6px] font-[var(--font-be-vietnam)] text-[12px] font-medium uppercase leading-none tracking-[0.2px] text-[#7b7b7b]">
                    {testimonial.company}
                  </p>
                </div>

                <div className="my-[17px] w-full border-t border-dashed border-[#e2dbfa]" />

                <p className="font-[var(--font-be-vietnam)] text-[14px] font-medium leading-[1.55] text-[#777]">
                  {testimonial.quote}
                </p>
              </div>

            </article>
          ))}
        </div>

        <div className="mt-[38px] flex items-center justify-center gap-6">
          <ArrowButton direction="left" />
          <ArrowButton direction="right" />
        </div>
      </div>
    </section>
  );
}
