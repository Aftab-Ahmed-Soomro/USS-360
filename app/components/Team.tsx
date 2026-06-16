import Image from "next/image";

const teamMembers = [
  {
    name: "MEET EMMANUEL",
    role: "CEO/Founder",
    image: "/assets/team/emanuel.png",
    color: "#72cc3b",
  },
  {
    name: "MEET MEERAL",
    role: "Marketing Director",
    image: "/assets/team/meeral.png",
    color: "#f45122",
  },
  {
    name: "MEET RUSS",
    role: "Content Creator",
    image: "/assets/team/russ.png",
    color: "#ff8f1a",
  },
  {
    name: "MEET SAADAT",
    role: "Creative Director",
    image: "/assets/team/saadat.png",
    color: "#45a9e9",
  },
];

function TeamArrow({ direction }: { direction: "left" | "right" }) {
  return (
    <button
      aria-label={direction === "left" ? "Previous team member" : "Next team member"}
      className="grid size-[42px] place-items-center rounded-full bg-white font-sans text-[24px] leading-none text-[#0a0a0a] transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {direction === "left" ? "\u2190" : "\u2192"}
    </button>
  );
}

export function Team() {
  return (
    <section className="relative z-10 bg-[#0a0a0a] px-6 text-white">
      <div className="mx-auto flex max-w-[1150px] flex-col items-center gap-8 py-[82px]">
        <h2 className="w-full px-0 font-[var(--font-be-vietnam)] text-[38px] font-medium leading-[1.12] tracking-[-2px] sm:px-[18px] sm:text-[50px] sm:leading-[68px] sm:tracking-[-3px]">
          meet USS{" "}
          <span className="font-serif text-[1.08em] font-extralight timesFontFamily italic tracking-[-1px]">
            team
          </span>
        </h2>

        <div className="relative w-full">
          <div className="grid w-full gap-[15px] sm:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <article
                className="relative aspect-[287.96/511.92] w-full overflow-hidden"
                key={member.name}
                style={{ backgroundColor: member.color }}
              >
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`${member.name} ${member.role}`}
                    fill
                    sizes="(min-width: 1280px) 288px, (min-width: 640px) 45vw, 88vw"
                  className="object-cover object-bottom"
                />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-end px-8 pt-9 text-right">
                    <h3 className="font-[var(--font-be-vietnam)] text-[22px] font-bold leading-none tracking-[-1px]">
                      {member.name}
                    </h3>
                    <p className="mt-3 font-[var(--font-be-vietnam)] text-[13px] font-normal leading-none text-white/90">
                      {member.role}
                    </p>
                    <div className="absolute bottom-0 left-1/2 h-[58%] w-[54%] -translate-x-1/2 rounded-t-full bg-black/15" />
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="pointer-events-none absolute left-[-36px] right-[-36px] top-1/2 hidden -translate-y-1/2 items-center justify-between xl:flex">
            <div className="pointer-events-auto">
              <TeamArrow direction="left" />
            </div>
            <div className="pointer-events-auto">
              <TeamArrow direction="right" />
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-5 xl:hidden">
            <TeamArrow direction="left" />
            <TeamArrow direction="right" />
          </div>
        </div>
      </div>
    </section>
  );
}
