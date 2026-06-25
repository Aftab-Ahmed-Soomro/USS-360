"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactHero() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // hook up form submission logic here
    console.log(form);
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email Us",
      value: "hello@uss.agency",
      href: "mailto:hello@uss.agency",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "+1 (501) 123-4567",
      href: "tel:+15011234567",
    },
    {
      icon: MapPin,
      label: "Locations",
      value: "United States · United Kingdom · U.A.E",
      href: undefined,
    },
  ];

  return (
    <section className="relative w-full bg-[#000] overflow-hidden py-28">
      {/* Ambient radial glow, top-center, warm orange tint */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 max-w-[1150px] h-[700px]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,90,20,0.16) 0%, rgba(255,60,10,0.06) 35%, rgba(10,10,10,0) 70%)",
        }}
      />

      {/* Giant watermark heading */}
      <div className="pointer-events-none absolute top-[20px] left-0 w-full flex justify-center select-none">
        <h1
          className="font-bold uppercase text-[#1a1419] tracking-tight whitespace-nowrap"
          style={{ fontSize: "clamp(5rem, 14vw, 13rem)", fontFamily: "Poppins, sans-serif" }}
        >
          CONTACT
        </h1>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-[7.3%]">
        <div className="grid grid-cols-1 lg:grid-cols-[486fr_100fr_642fr] gap-y-12">

          {/* LEFT COLUMN */}
          <div className="flex flex-col order-1 lg:order-none pt-[160px] lg:pt-[200px]">
            {/* Badge pill */}
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/[0.03] px-5 py-[7px]">
              <span className="w-[7px] h-[7px] rounded-full bg-[#ff5a14]" />
              <span className="text-[11px] font-normal tracking-[0.18em] text-[#cfcfcf]">
                CONTACT
              </span>
            </div>

            {/* Heading */}
            <h2
              className="mt-6 font-semibold text-white leading-[1] whitespace-nowrap"
              style={{ fontSize: "clamp(2.6rem, 4.2vw, 3.75rem)", fontFamily: "Poppins, sans-serif" }}
            >
              get in{" "}
              <span
                className="text-[#ff5a14] italic font-medium"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                touch
              </span>
            </h2>

            {/* Paragraph */}
            <p className="mt-6 max-w-[380px] text-[#9d9d9d] text-[13px] leading-[1.6]">
              Ready to scale your business with USS? Let&apos;s discuss growth,
              creative strategy, and performance marketing.
            </p>

            {/* Contact info cards */}
            <div className="mt-10 flex flex-col gap-4">
              {contactItems.map(({ icon: Icon, label, value, href }) => {
                const Wrapper = href ? "a" : "div";
                return (
                  <Wrapper
                    key={label}
                    {...(href ? { href } : {})}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-[21px] py-[18px] min-h-[90px] transition-colors hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center gap-5">
                      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.06] shrink-0">
                        <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-white font-medium text-[13px]">
                          {label}
                        </span>
                        <span className="text-[#8c8c8c] text-[12px]">{value}</span>
                      </span>
                    </div>
                    <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 shrink-0">
                      <ArrowUpRight className="w-4 h-4 text-white/70" strokeWidth={1.75} />
                    </span>
                  </Wrapper>
                );
              })}
            </div>
          </div>

          {/* GAP COLUMN — intentionally empty, just spacing */}
          <div className="hidden lg:block" />

          {/* RIGHT COLUMN — Form */}
          <div className="order-2 lg:order-none flex items-end">
            <form
              onSubmit={handleSubmit}
              className="w-full rounded-[28px] border border-white/[0.06] bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-[21px] flex flex-col gap-[25px]"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="w-full h-[82px] rounded-2xl border border-white/10 bg-white/[0.04] px-6 text-white placeholder:text-white/90 text-[14px] outline-none focus:border-white/25 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full h-[82px] rounded-2xl border border-white/10 bg-white/[0.03] px-6 text-white placeholder:text-white/90 text-[14px] outline-none focus:border-white/25 transition-colors"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                className="w-full h-[206px] rounded-2xl border border-white/10 bg-[#161616] px-6 py-5 text-white placeholder:text-white/90 text-[14px] outline-none resize-none focus:border-white/25 transition-colors"
              />
              <button
                type="submit"
                className="w-full h-[60px] rounded-2xl bg-[#ff5a14] text-white font-semibold text-[14px] tracking-wide hover:bg-[#ff6b2c] transition-colors"
              >
                Send&nbsp;&nbsp;Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}