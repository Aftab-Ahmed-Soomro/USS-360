import { Button } from "./common/Button";

const navItems = ["About", "Solutions", "Projects", "Contact"];

export function Header() {
  return (
    <header className="relative z-10 flex h-[72px] items-center justify-between px-6 sm:px-10 lg:px-[119px]">
      <nav aria-label="Main navigation" className="hidden items-center gap-[112px] md:flex">
        {navItems.map((item) => (
          <a
            className="text-[13px] font-extrabold tracking-[0] text-white transition hover:text-[#ff6b1f]"
            href={`#${item.toLowerCase()}`}
            key={item}
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex w-full items-center justify-between md:w-auto md:justify-end">
        <span className="text-[13px] font-extrabold text-white md:hidden">Scale</span>
        <Button className="h-[42px] px-[27px] text-[12px]">Book a Consultation</Button>
      </div>
    </header>
  );
}
