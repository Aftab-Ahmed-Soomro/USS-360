import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import type { OutcomeIcon, ProjectDetail, WorkIcon } from "./project-details";

function CornerFrame() {
  return (
    <>
      <span className="absolute left-[13px] top-[13px] size-[23px] border-l border-t border-[#ff5500]" />
      <span className="absolute right-[13px] top-[13px] size-[23px] border-r border-t border-[#ff5500]" />
      <span className="absolute bottom-[13px] left-[13px] size-[23px] border-b border-l border-[#ff5500]" />
      <span className="absolute bottom-[13px] right-[13px] size-[23px] border-b border-r border-[#ff5500]" />
    </>
  );
}

function LineIcon({ type }: { type: OutcomeIcon }) {
  if (type === "megaphone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className="size-[31px]">
        <path d="M4 13.5h3.6l9.4 4.2V6.3L7.6 10.5H4v3z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M7.5 14l1.1 4.5h3" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M19.1 9.2c.8.7 1.2 1.7 1.2 2.8s-.4 2.1-1.2 2.8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "bars") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className="size-[31px]">
        <path d="M5 19V9m7 10V5m7 14v-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M3.5 19.5h17" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className="size-[31px]">
        <path d="M12 3.5l7 2.8v5.4c0 4.1-2.8 7.7-7 8.8-4.2-1.1-7-4.7-7-8.8V6.3l7-2.8z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 12.1l2 2 4-4.2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-[31px]">
      <path d="M12 3.8l2.3 5.2 5.7.5-4.3 3.8 1.3 5.6-5-2.9-5 2.9 1.3-5.6L4 9.5 9.7 9 12 3.8z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function WorkIconView({ type }: { type: WorkIcon }) {
  if (type === "social") {
    return (
      <svg viewBox="0 0 18 18" aria-hidden className="size-[15px]">
        <path d="M4 4h10v8H7.2L4 14.5V4z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M6.6 6.9h4.8M6.6 9h3.2" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg viewBox="0 0 18 18" aria-hidden className="size-[15px]">
        <path d="M2.5 5h13v9h-13V5z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M3.2 5.7L9 10l5.8-4.3" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "360") {
    return (
      <span className="grid size-[17px] place-items-center rounded-full border border-current font-[var(--font-inter)] text-[7px] font-bold leading-none tracking-[-0.3px]">
        360
      </span>
    );
  }

  return (
    <svg viewBox="0 0 18 18" aria-hidden className="size-[15px]">
      <path d="M4.2 15V6.1h9.6V15H4.2zM6.2 6.1V4.9A2.8 2.8 0 0 1 9 2.3a2.8 2.8 0 0 1 2.8 2.6v1.2" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 9.4h4M7 11.7h3" fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  );
}

export function ProjectDetailPage({ project }: { project: ProjectDetail }) {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <section className="bg-[#f7f7f5] px-6 pb-[38px] pt-[42px] sm:pb-[44px] sm:pt-[55px] lg:pt-[64px]">
        <div className="mx-auto grid max-w-[1150px] items-start justify-between gap-10 lg:grid-cols-[470px_428px] lg:gap-[74px]">
          <div className="lg:pt-[11px]">
            <Link
              href="/projects"
              className="font-[var(--font-inter)] flex items-center gap-2 text-[12px] font-normal leading-none tracking-[-0.05px] text-[#777] transition hover:text-[#ff5500]"
            >
              <span>
                <img className="w-[14px] h-[14px]" src="/assets/leftArrow.png" alt="" />
              </span>
              Back to Projects
            </Link>

            <p className="mt-[59px] w-24 block rounded-full bg-[#e9e9e7] px-[12px] py-[8px] font-[var(--font-inter)] text-[10px] font-medium uppercase leading-none tracking-[0.4px] text-[#242424] lg:mt-[58px]">
              {project.productName}
            </p>

            <h1 className="mt-[28px] max-w-[450px] font-[var(--font-be-vietnam)] text-[32px] font-bold leading-[1.35] tracking-[1.05px] text-[#141414] sm:text-[35px]">
              {project.title}
            </h1>

            <p className="mt-[15px] max-w-[470px] font-[var(--font-inter)] text-[12px] font-normal leading-[1.72] tracking-[-0.18px] text-[#707070] sm:text-[14px]">
              {project.description}
            </p>
          </div>

          <div className="relative aspect-[428/377] overflow-hidden rounded-[13px] bg-[#8f512f]">
            <Image
              src={project.heroImage.src}
              alt={project.heroImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 428px, 92vw"
              className="object-cover"
              style={{ objectPosition: project.heroImage.position ?? "center" }}
            />
            <CornerFrame />
          </div>
        </div>
      </section>

      <section className="bg-black px-5 pb-[40px] pt-[68px] text-white sm:px-8 sm:pb-[43px] lg:px-12">
        <div className="mx-auto max-w-[1150px] text-center">
          <h2 className="font-[var(--font-be-vietnam)] text-[30px] font-bold lowercase leading-none tracking-[-1.6px] sm:text-[43px]">
            project{" "}
            <span className="font-[var(--font-cormorant)] text-[1.15em] font-extralight italic timesFontFamily tracking-[-0.04em]">
              overview.
            </span>
          </h2>
          <p className="mt-[17px] font-[var(--font-be-vietnam)] text-[13px] font-light uppercase leading-none tracking-[-0.1px] sm:text-[17px]">
            {project.overviewSubtitle}
          </p>

          <div className="mt-[15px] grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-[20px]">
            {project.galleryImages.map((image) => (
              <div
                className="relative h-[310px] overflow-hidden bg-[#171717] sm:h-[390px] lg:h-[510px]"
                key={image.alt}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                  style={{ objectPosition: image.position ?? "center" }}
                />
                {image.overlay ? (
                  <div className="absolute inset-0 -z-0 bg-[#36023d]/45 mix-blend-multiply" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f5] px-6 pb-[70px] pt-[72px] sm:pb-[82px] sm:pt-[82px]">
        <div className="mx-auto grid max-w-[1150px] gap-14 lg:grid-cols-[840px_226px] lg:gap-[96px]">
          <div>
            <div>
              <div className="flex items-center gap-[15px]">
                <span className="grid size-[25px] shrink-0 place-items-center text-[#ff5500]">
                  <img src="/assets/goalIcon.png" alt="" />
                </span>
                <h2 className="font-[var(--font-be-vietnam)] text-[18px] font-bold leading-none tracking-[0.85px] text-[#111]">
                  The Goal
                </h2>
              </div>
              <p className="mt-[20px] max-w-[680px] font-[var(--font-inter)] text-[15px] font-normal leading-[1.58] tracking-[0.28px] text-[#6c6c6c]">
                {project.goal}
              </p>
            </div>

            <div className="mt-[70px]">
              <h3 className="font-[var(--font-be-vietnam)] text-[16px] font-bold leading-none tracking-[0.85px] text-[#111]">
                What We Did
              </h3>
              <p className="mt-[21px] font-[var(--font-inter)] text-[12px] font-bold leading-none tracking-[0.85px] text-[#777]">
                {project.workIntro}
              </p>
              <ul className="mt-[13px] flex flex-col gap-[12px]">
                {project.workItems.map((item) => (
                  <li
                    className="flex items-center gap-[10px] font-[var(--font-inter)] text-[12px] font-normal leading-none tracking-[0.38px] text-[#747474]"
                    key={item.text}
                  >
                    <span className="grid size-[17px] shrink-0 place-items-center text-[#ff5500]">
                      <WorkIconView type={item.icon} />
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-[54px]">
              <h3 className="font-[var(--font-be-vietnam)] text-[16px] font-bold leading-none tracking-[0.85px] text-[#111]">
                The Approach
              </h3>
              <p className="mt-[21px] max-w-[560px] font-[var(--font-inter)] text-[12px] font-normal leading-[1.48] tracking-[0.38px] text-[#747474]">
                {project.approach}
              </p>
            </div>

            <div className="mt-[56px]">
              <h3 className="font-[var(--font-be-vietnam)] text-[16px] font-bold leading-none tracking-[0.85px] text-[#111]">
                The Outcome
              </h3>
              <div className="mt-[17px] max-w-[560px] grid grid-cols-2 gap-[17px] sm:grid-cols-4">
                {project.outcomes.map((outcome) => (
                  <div
                    className="flex min-h-[104px] w-full max-w-[130px] flex-col items-center justify-start rounded-[7px] border border-[#dededb] px-[10px] pb-[10px] pt-[12px] text-center text-[#ff5500]"
                    key={outcome.text}
                  >
                    <LineIcon type={outcome.icon} />
                    <p className="mt-[10px] font-[var(--font-inter)] text-[11px] font-normal leading-[1.48] tracking-[0.3px] text-black">
                      {outcome.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:pt-[1px]">
            <h3 className="font-[var(--font-inter)] text-[14px] font-normal leading-none tracking-[0.28px] text-black">
              What We Focused On
            </h3>
            <div className="mt-[18px] flex max-w-[210px] flex-wrap gap-x-[7px] gap-y-[8px]">
              {project.focusAreas.map((area) => (
                <span
                  className="rounded-full bg-[#e9e9e7] px-[12px] py-[7px] font-[var(--font-inter)] text-[11px] font-normal leading-none tracking-[-0.18px] text-black"
                  key={area}
                >
                  {area}
                </span>
              ))}
            </div>
            <Link
              href="/#contact"
              className="mt-[31px] inline-flex h-[35px] w-full max-w-[226px] items-center justify-center rounded-full bg-[#f0522b] px-7 font-[var(--font-be-vietnam)] text-[11px] font-medium leading-none text-white transition hover:bg-[#ff6b1f]"
            >
              Book Your Consultation
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-black px-5 pb-[80px] pt-[80px] text-center text-white sm:px-8 sm:pb-[107px] sm:pt-[83px] lg:px-12">
        <div className="mx-auto max-w-[1180px]">
          <h2 className="font-[var(--font-be-vietnam)] text-[31px] font-bold lowercase leading-none tracking-[-1.5px] sm:text-[43px]">
            {project.videoTitle}
          </h2>
          <p className="mt-[20px] font-[var(--font-be-vietnam)] text-[13px] font-light uppercase leading-none tracking-[0] text-white/70 sm:text-[17px]">
            {project.videoSubtitle}
          </p>

          <div className="relative mx-auto mt-[48px] aspect-[1014/540] max-w-[1014px] overflow-hidden rounded-[10px] bg-[#181818] shadow-[0_0_65px_rgba(255,255,255,0.23)]">
            <Image
              src={project.videoPreview.src}
              alt={project.videoPreview.alt}
              fill
              sizes="(min-width: 1024px) 1014px, 92vw"
              className="scale-[1.03] object-cover blur-[8px]"
              style={{ objectPosition: project.videoPreview.position ?? "center" }}
            />
            <div className="absolute inset-0 bg-black/12" />
            <button
              aria-label={`Play ${project.productName} campaign video`}
              className="absolute left-1/2 top-1/2 grid size-[82px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#f47700] text-white transition hover:bg-[#ff861b] sm:size-[94px]"
              type="button"
            >
              <span className="ml-[5px] h-0 w-0 border-y-[13px] border-l-[19px] border-y-transparent border-l-white sm:border-y-[15px] sm:border-l-[22px]" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
