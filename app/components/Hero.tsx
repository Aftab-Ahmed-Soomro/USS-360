import { Button } from "./common/Button";
import { ConsultationForm } from "./ConsultationForm";

export function Hero() {
  return (
    <main className="relative z-10 grid flex-1 items-center gap-12 px-6 pb-12 pt-10 sm:px-10 md:grid-cols-[minmax(0,1fr)_431px] md:gap-14 lg:px-[97px] lg:pb-[74px] lg:pt-[75px] xl:grid-cols-[560px_431px] xl:gap-[82px]">
      <section className="max-w-[560px] text-white">
        <h1 className="max-w-[550px] text-[43px] font-extrabold leading-[0.98] tracking-[-1px] sm:text-[54px] lg:text-[56px]">
          we don&apos;t just{" "}
          <span className="font-serif text-[1.24em] font-semibold italic leading-[0.7] tracking-[-1px]">
            market
          </span>
          <br />
          we scale{" "}
          <span className="font-serif text-[1.24em] font-semibold italic leading-[0.7] tracking-[-1px]">
            brands
          </span>
        </h1>

        <p className="mt-[59px] max-w-[538px] text-[17px] font-medium leading-[1.68] tracking-[-0.2px] text-white/90 sm:text-[18px]">
          We are a 360 digital marketing agency that combine strategy, creative and performance
          marketing into one connected system designed to scale your business.
        </p>

        <p className="mt-[33px] text-[17px] font-medium leading-normal text-white/90 sm:text-[18px]">
          Trusted by 100+ SMEs across UK, US & UAE.
        </p>

        <Button className="mt-[34px] w-[272px]">Book a Consultation</Button>
      </section>

      <div className="flex justify-center md:justify-end">
        <ConsultationForm />
      </div>
    </main>
  );
}
