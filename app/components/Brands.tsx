import Image from "next/image";

const brandCards = [
  {
    // title: "AGENCY 8",
    image: "/assets/brands/agent.png",
    // instagram: "10.5K",
  },
  {
    // title: "SADIA PSYCHOLOGY",
    image: "/assets/brands/sadia-psychology.png",
    // instagram: "735K",
    // youtube: "859K",
  },
  {
    // title: "UNILEVER",
    image: "/assets/brands/unilever-forest.png",
    // instagram: "234K",
    // youtube: "29K",
    // mark: "U",
  },
  {
    // title: "ADIDAS UAE",
    image: "/assets/brands/adidas.png",
    // instagram: "200K",
  },
];

const trustedBrandImages = [
  {
    name: "Agency 8",
    image: "/assets/100brands/image 1.png",
    className: "w-[170px] sm:w-[180px]",
  },
  {
    name: "Vodafone",
    image: "/assets/brands/vodafone.png",
    className: "w-[150px] sm:w-[160px]",
  },
  {
    name: "Sadia Psychology",
    image: "/assets/brands/sadia.png",
    className: "w-[170px] sm:w-[180px]",
  },
  {
    name: "Flowork",
    image: "/assets/brands/flowork.png",
    className: "w-[170px] sm:w-[180px]",
  },
  {
    name: "Unilever",
    image: "/assets/100brands/image 3.png",
    className: "w-[130px] sm:w-[140px]",
  },
];

export function Brands() {
  return (
    <section className="relative z-10 px-6 pb-[100px] pt-[58px] text-white lg:pb-[111px]">
      <h2 className="text-center text-[31px] font-medium leading-tight tracking-[-0.4px] sm:text-[35px]">
        brands we work with
      </h2>

      <div className="mx-auto mt-[26px] grid max-w-[1150px] grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-4">
        {brandCards.map((brand) => (
          <article
            className="group relative mx-auto aspect-[176/314] w-full max-w-[246px] overflow-hidden rounded-[22px] bg-[#151515]"
            key={brand.image}
          >
            <Image
              src={brand.image}
              alt="Brand campaign"
              fill
              sizes="(min-width: 1024px) 246px, (min-width: 640px) 42vw, 82vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </article>
        ))}
      </div>

      <div className="mt-[180px] text-center">
        <h2 className="text-[31px] font-medium leading-tight tracking-[-0.4px] sm:text-[34px]">
          trusted by 100+s brands worldwide
        </h2>

        <div className="mx-auto mt-[30px] flex max-w-[1150px] flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-12 lg:flex-nowrap lg:justify-between lg:gap-x-8">
          {trustedBrandImages.map((brand) => (
            <article className={`group relative h-[100px] max-w-full ${brand.className}`} key={brand.name}>
              <Image
                src={brand.image}
                alt={`${brand.name} brand image`}
                fill
                sizes="(min-width: 1024px) 260px, (min-width: 640px) 220px, 46vw"
                className="object-contain opacity-90 saturate-[0.9] transition duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
