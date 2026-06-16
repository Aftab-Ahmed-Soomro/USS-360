import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const filters = [
  "Web Design & Development",
  "Meta Ads",
  "Google Ads",
  "Email marketing",
  "Content Creation",
  "Social Management",
  "WhatsApp & SMS",
];

const projects = [
  {
    title: "Agency 8",
    href: "/projects/agency-8",
    image: "/assets/allProjects/agency8.png",
    alt: "Luxury property terrace overlooking Dubai",
    description:
      "USS partnered with Agency 8 to build a strong digital foundation, combining a custom website with integrated marketing systems.",
    tags: ["Website", "Email Marketing", "Web App Marketing"],
  },
  {
    title: "Yula Beach Lounge",
    href: "/projects/yula-beach-lounge",
    image: "/assets/allProjects/yula.jpg",
    imagePosition: "50% 47%",
    alt: "Beach lounge and pool terrace at night",
    description:
      "We worked closely with Yula Lounge to ease the process of their rebrand from Yulava Lounge. An Arabic beach lounge turned into a modern beach club restaurant.",
    tags: ["Content Creation", "Social Media", "Email Marketing"],
  },
  {
    title: "Sadia Psychology",
    href: "/projects/sadia-psychology",
    image: "/assets/allProjects/sadia.png",
    imagePosition: "50% 45%",
    alt: "Portrait of Sadia Psychology founder",
    description:
      "Black Friday launch with Sadia Psychology. Launching her first product, a journal, selling out 45% of total sales in first 24 hours.",
    tags: ["Marketing Strategy", "Email Marketing", "Content"],
  },
  {
    title: "Cinnamood",
    href: "/projects/cinamood",
    image: "/assets/allProjects/cinamood.jpg",
    imagePosition: "50% 48%",
    alt: "Cinnamood drink campaign",
    description:
      "Successfully launched Cinnamood in Dubai while building local awareness and demand from day one, without losing the essence of the original German franchise.",
    tags: ["SEO Marketing", "Content Creation", "Social Media"],
  },
  {
    title: "SupperClub",
    href: "/projects/supperclub",
    image: "/assets/allProjects/supper.png",
    imagePosition: "50% 53%",
    alt: "Dessert and drink hospitality campaign",
    description:
      "Drawing members in-growth while maintaining a premium brand image and attracting the right audience for hotels, spas and beach club spaces across the world.",
    tags: ["360 Marketing", "Marketing Strategy", "Content"],
  },
  {
    title: "Adidas Middle East",
    href: "/projects/adidas-middle-east",
    image: "/assets/allProjects/addidas.png",
    imagePosition: "50% 42%",
    alt: "Adidas Middle East launch event",
    description:
      "USS partnered with Adidas Dubai to support the launch of a new product, delivering an event-led activation alongside content creation.",
    tags: ["End To End", "Content Creation", "Product Launch"],
  },
  {
    title: "Women Who Thrive",
    href: "/projects/women-who-thrive",
    image: "/assets/allProjects/women.jpg",
    alt: "Women Who Thrive campaign event",
    description:
      "Increase membership, strengthen brand presence and build a highly engaged community with marketing approach across all platforms.",
    tags: ["360 Marketing", "Membership", "Social Media"],
  },
  {
    title: "Blank DXB",
    href: "/projects/blank-dxb",
    image: "/assets/allProjects/blank.jpg",
    alt: "Large blank production space",
    description:
      "End-to-end management of new concept in Dubai from ideation and content through Google and Meta ads to build awareness and drive sales.",
    tags: ["360 Marketing", "End-To-End", "Paid Media"],
  },
  {
    title: "Afro Maya",
    image: "/assets/allProjects/afro.png",
    imagePosition: "50% 38%",
    alt: "Fashion portrait campaign",
    description:
      "Fashion brand looking for global domination. USS created a fully functional website, design along with strong digital presence to increase purchases.",
    tags: ["Website Design", "Email Marketing", "Social Media"],
  },
  {
    title: "Picksperience",
    href: "/projects/picksperience",
    image: "/assets/allProjects/pick.png",
    imagePosition: "50% 43%",
    alt: "Warm interior venue space",
    description:
      "Picksperience is a startup focused on product sampling, helping brands deliver samples directly to targeted audiences.",
    tags: ["Paid Media", "UX Design", "Content Creation"],
  },
  {
    title: "Reclaim US",
    href: "/projects/reclaim-us",
    image: "/assets/allProjects/reclaim.jpg",
    imagePosition: "50% 43%",
    alt: "Airport travel scene",
    description:
      "Reclaim is a travel service in the United States designed to simplify the airport experience by allowing passengers to skip check-in entirely.",
    tags: ["360 Marketing", "Paid Media", "Social Media"],
  },
  {
    title: "Flowork",
    href: "/projects/flowork",
    image: "/assets/allProjects/flowork.png",
    imagePosition: "50% 48%",
    alt: "Premium workspace interior",
    description:
      "Flowork is a modern business centre offering flexible workspace solutions, including coworking spaces, private offices, virtual rooms and podcast studios.",
    tags: ["SEO Marketing", "Strategy", "Content Creation"],
  },
];

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const content = (
    <article className="min-w-0">
      <div className="relative aspect-[376/280] overflow-hidden rounded-[7px] bg-[#e8e8e5]">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(min-width: 1280px) 376px, (min-width: 768px) 31vw, 92vw"
          className="object-cover"
          style={{ objectPosition: project.imagePosition ?? "center" }}
        />
      </div>
      <h2 className="mt-[22px] font-[var(--font-be-vietnam)] text-[23px] font-medium leading-[1.05] tracking-[-0.7px] text-black sm:text-[24px]">
        {project.title}
      </h2>
      <p className="mt-[11px] min-h-[54px] max-w-[350px] font-[var(--font-inter)] text-[12px] font-normal leading-[1.48] tracking-[-0.25px] text-[#5d5d5d] sm:text-[12.5px]">
        {project.description}
      </p>
      <div className="mt-[18px] flex flex-wrap gap-[7px]">
        {project.tags.map((tag) => (
          <span
            className="rounded-full border border-[#d7d7d2] bg-white px-[13px] py-[5px] font-[var(--font-inter)] text-[9.5px] font-normal leading-none tracking-[-0.15px] text-[#424242]"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );

  if (project.href) {
    return (
      <Link
        aria-label={`View ${project.title} project`}
        className="block rounded-[7px] transition duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff5500]"
        href={project.href}
      >
        {content}
      </Link>
    );
  }

  return content;
}

function ProjectsCta() {
  return (
    <section className="bg-[#080808] px-6 pb-[74px] pt-[63px] text-white sm:px-10 sm:pb-[88px] sm:pt-[70px] lg:px-12">
      <div className="mx-auto flex max-w-[650px] flex-col items-center text-center">
        <p className="font-[var(--font-be-vietnam)] text-[9px] font-bold uppercase leading-none tracking-[3px] text-white">
          <span className="mr-[8px] text-[#ff5500]">•</span>FULL STACK MARKETING
        </p>
        <h2 className="mt-[24px] font-[var(--font-be-vietnam)] text-[36px] font-medium lowercase leading-[1.08] tracking-[-1.9px] sm:text-[48px] lg:text-[52px]">
          we are your{" "}
          <span className="font-[var(--font-cormorant)] text-[1.18em] font-extralight timesFontFamily italic tracking-[-0.04em]">
            360°
            <br />
            marketing agency
          </span>
        </h2>
        <p className="mt-[34px] max-w-[560px] font-[var(--font-inter)] text-[12px] font-normal leading-[1.75] tracking-[-0.1px] text-white/88">
          Calling ourselves a data-driven, problem solving, people connecting, digital
          crazy, talent engaging creative agency is too long winded... so we call
          ourselves USS.
        </p>
        <p className="mt-[28px] font-[var(--font-inter)] text-[12px] font-normal leading-[1.7] text-white/88">
          We bring all digital platforms to one connected system designed to scale.
        </p>
        <div className="mt-[29px] flex w-full max-w-[512px] flex-col items-center justify-center gap-[14px] sm:flex-row">
          <Link
            className="inline-flex h-[40px] w-full items-center justify-center rounded-full bg-[#ff5500] px-8 font-[var(--font-be-vietnam)] text-[12px] font-bold leading-none text-white transition hover:bg-[#ff6b1f] sm:w-[230px]"
            href="/#contact"
          >
            Book a Call
          </Link>
          <Link
            className="inline-flex h-[40px] w-full items-center justify-center rounded-full border border-white px-8 font-[var(--font-be-vietnam)] text-[12px] font-bold leading-none text-white transition hover:border-[#ff5500] hover:text-[#ff5500] sm:w-[230px]"
            href="/#services"
          >
            See How We Scale&nbsp;→
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="bg-black px-6 pb-[76px] pt-[112px] text-center text-white sm:pb-[92px] sm:pt-[132px] lg:pb-[112px] lg:pt-[145px]">
        <div className="mx-auto max-w-[1150px]">
          <p className="font-[var(--font-be-vietnam)] text-[9px] font-bold uppercase leading-none tracking-[3.2px] text-white">
            OUR PORTFOLIO
          </p>
          <h1 className="mt-[25px] font-[var(--font-be-vietnam)] text-[38px] font-bold lowercase leading-[1.03] tracking-[-1.8px] text-white sm:text-[58px] sm:tracking-[-3px] lg:text-[64px]">
            projects that make an{" "}
            <span className="font-[var(--font-cormorant)] text-[1.15em] font-extralight timesFontFamily italic tracking-[-0.035em] text-[#ff5500]">
              impact
            </span>
          </h1>
          <p className="mt-[30px] font-[var(--font-be-vietnam)] text-[14px] font-medium uppercase leading-[1.35] tracking-[-0.3px] text-white sm:text-[18px]">
            TAKE A LOOK AT USS PROJECTS ACROSS UK, US AND MIDDLE EAST
          </p>
        </div>
      </section>

      <section className="bg-[#f7f7f5] px-6 pb-[124px] pt-[33px] text-black sm:pb-[150px]">
        <div className="mx-auto max-w-[1150px]">
          <div className="flex gap-[10px] overflow-x-auto pb-[28px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:justify-center">
            {filters.map((filter, index) => (
              <button
                className={`h-[39px] shrink-0 rounded-full border px-[22px] font-[var(--font-inter)] text-[10.5px] font-normal leading-none tracking-[-0.25px] transition ${
                  index === 0
                    ? "border-black bg-black text-white"
                    : "border-black bg-white text-black hover:bg-black hover:text-white"
                }`}
                key={filter}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid gap-x-[31px] gap-y-[35px] sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
        </div>
      </section>

      <ProjectsCta />
      <Footer />
    </main>
  );
}
