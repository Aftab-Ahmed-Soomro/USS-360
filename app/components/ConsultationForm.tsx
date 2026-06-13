import { Button } from "./common/Button";

const inputClass =
  "h-[33px] w-full rounded-[7px] border border-white/80 bg-black px-[10px] text-[10px] font-medium text-white outline-none placeholder:text-[#777] focus:border-[#ff5a05]";

export function ConsultationForm() {
  return (
    <section className="w-full max-w-[431px] rounded-[18px] border border-white/90 bg-black px-[28px] py-[31px] text-white shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
      <h2 className="text-[18px] font-extrabold leading-tight">Book Your Free Consultation</h2>
      <p className="mt-[6px] text-[10px] font-semibold text-white/80">
        Get in touch with us, we&apos;d love to hear from you.
      </p>

      <form className="mt-[29px] space-y-[14px]">
        <div className="grid gap-[13px] sm:grid-cols-2">
          <label className="block text-[10px] font-semibold leading-none">
            Name
            <input className={`${inputClass} mt-[7px]`} placeholder="Your name" />
          </label>
          <label className="block text-[10px] font-semibold leading-none">
            Email
            <input className={`${inputClass} mt-[7px]`} placeholder="you@company.com" type="email" />
          </label>
        </div>

        <div className="grid gap-[13px] sm:grid-cols-2">
          <label className="block text-[10px] font-semibold leading-none">
            Business Name (optional)
            <input className={`${inputClass} mt-[7px]`} placeholder="Company" />
          </label>
          <label className="block text-[10px] font-semibold leading-none">
            Website URL (if applicable)
            <input className={`${inputClass} mt-[7px]`} placeholder="Website" />
          </label>
        </div>

        <label className="block text-[10px] font-semibold leading-none">
          Services You need
          <select className={`${inputClass} mt-[7px] appearance-none`}>
            <option>Select....</option>
            <option>Performance Marketing</option>
            <option>Creative Strategy</option>
            <option>Brand Scaling</option>
          </select>
        </label>

        <label className="block text-[10px] font-semibold leading-none">
          Message / Requirement
          <textarea
            className="mt-[7px] min-h-[67px] w-full resize-none rounded-[7px] border border-white/80 bg-black px-[10px] py-[10px] text-[10px] font-medium text-white outline-none placeholder:text-[#777] focus:border-[#ff5a05]"
            placeholder="What do you want to achieve?"
          />
        </label>

        <Button className="!mt-[15px] h-[39px] w-full text-[12px]">
          Book a Call <span className="ml-[9px]" aria-hidden="true">&rarr;</span>
        </Button>
      </form>

      <p className="mt-[17px] text-center text-[9px] font-medium text-white/80">
        No spam. Your details stay with us.
      </p>
    </section>
  );
}
