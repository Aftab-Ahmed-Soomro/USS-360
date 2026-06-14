import { Button } from "./common/Button";

const navItems = ["About", "Solutions", "Projects", "Contact"];

export function Header() {
  return (
    <div className="bg-black">
      <header className="relative z-10 flex h-[72px] items-center justify-between px-6 sm:px-10 lg:px-[119px] max-w-[1440px] mx-auto">
      <nav aria-label="Main navigation" className="hidden items-center gap-[112px] md:flex">
        {navItems.map((item) => (
          <a
            className="text-[16px] font-semibold tracking-[0] text-white transition hover:text-[#ff6b1f]"
            href={`#${item.toLowerCase()}`}
            key={item}
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex w-full items-center justify-between md:w-auto md:justify-end">
        <span className="text-[16px] font-semibold text-white md:hidden">Scale</span>
        <Button className="h-[42px] px-[27px] text-[16px] font-bold">Book a Consultation</Button>
      </div>
    </header>
    </div>
  );
}
