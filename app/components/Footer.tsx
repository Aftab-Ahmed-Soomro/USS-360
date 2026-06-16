const companyLinks = ["About USS", "Our Projects", "Our Team", "Contact", "Book a Call"];
const socials = ["in", "ig", "fb", "tw"];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.05] bg-[#0a0a0a] px-6 pb-[24px] pt-[46px] text-white ">
      <div className="mx-auto flex max-w-[1150px] flex-col gap-[82px]">
        <div className="grid gap-10 md:grid-cols-[minmax(0,380px)_180px_minmax(0,260px)] md:justify-between lg:gap-14">
          <div className="flex max-w-[410px] flex-col">
            <h2 className="font-[var(--font-be-vietnam)] text-[34px] font-bold leading-none tracking-[1.2px]">
              USS
            </h2>

            <p className="mt-[13px] max-w-[400px] font-[var(--font-inter)] text-[11px] font-normal leading-[2.35] text-white">
              Built to Scale. Designed to Convert.
              <br />
              Helping brands across US, UK and the Middle East grow through strategy,
              <br className="hidden sm:block" />
              creative, and performance marketing.
            </p>

            <form className="mt-[14px] flex w-full max-w-[382px] flex-col gap-3 sm:h-[34px] sm:flex-row">
              <label className="sr-only" htmlFor="footer-email">
                Your email
              </label>
              <input
                id="footer-email"
                className="h-[34px] min-w-0 flex-1 rounded-full border border-white/10 bg-white/[0.05] px-[18px] font-[var(--font-be-vietnam)] text-[11px] font-normal leading-none text-white outline-none placeholder:text-white focus:border-white/25"
                placeholder="Your email"
                type="email"
              />
              <button
                className="h-[34px] w-[106px] rounded-full bg-[#ff5500] px-4 font-[var(--font-be-vietnam)] text-[11px] font-medium leading-none text-white transition hover:bg-[#ff6b1f]"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>

          <nav className="flex flex-col gap-[18px]" aria-label="Footer company navigation">
            <h3 className="font-[var(--font-be-vietnam)] text-[11px] font-bold leading-none tracking-[2px]">
              Company
            </h3>
            <ul className="flex flex-col gap-[10px]">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    className="font-[var(--font-inter)] text-[11px] font-normal leading-none text-white transition hover:text-[#ff5500]"
                    href="#"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col">
            <h3 className="font-[var(--font-be-vietnam)] text-[11px] font-bold leading-none tracking-[2px]">
              Contact
            </h3>
            <address className="mt-[24px] flex flex-col gap-[24px] not-italic">
              <span className="font-[var(--font-inter)] text-[11px] font-normal leading-none text-white">
                United Strategic Solutions
              </span>
              <span className="font-[var(--font-inter)] text-[11px] font-normal leading-none text-white">
                US - UK - UAE
              </span>
              <a
                className="font-[var(--font-inter)] text-[11px] font-normal leading-none text-white transition hover:text-[#ff5500]"
                href="mailto:hello@uss.agency"
              >
                hello@uss.agency
              </a>
            </address>

            <a
              className="mt-[38px] inline-flex h-[28px] w-[195px] items-center justify-center rounded-full bg-[#ff5500] px-[18px] font-[var(--font-inter)] text-[11px] font-bold leading-none tracking-[0.4px] text-white transition hover:bg-[#ff6b1f]"
              href="#contact"
            >
              Book a Strategy Call <span className="ml-[6px]">-&gt;</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="font-[var(--font-inter)] text-[10px] font-normal leading-none text-white">
            &copy; 2025 United Strategic Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-[11px]">
            {socials.map((social) => (
              <a
                className="grid size-[27px] place-items-center rounded-full border border-white/10 font-[var(--font-inter)] text-[9px] font-bold leading-none text-white transition hover:border-white/30 hover:text-[#ff5500]"
                href="#"
                key={social}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
