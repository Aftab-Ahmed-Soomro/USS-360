"use client";

const regions = [
  {
    name: "United States",
    description:
      "Supporting growth-focused businesses through strategy, creative, and performance marketing.",
    // Replace the src below with your actual image path, e.g. "/images/us.jpg"
    image: "/assets/Global/global1.jpg",
    alt: "United States skyline at sunset",
  },
  {
    name: "United Kingdom",
    description:
      "Helping brands scale through structured marketing systems and execution.",
    // Replace the src below with your actual image path, e.g. "/images/uk.jpg"
    image: "/assets/Global/global2.jpg",
    alt: "United Kingdom skyline at night",
  },
  {
    name: "United Arab Emirates",
    description:
      "Partnering with ambitious companies looking to accelerate growth and market presence.",
    // Replace the src below with your actual image path, e.g. "/images/uae.jpg"
    image: "/assets/Global/global3.jpg",
    alt: "UAE skyline at dusk",
  },
];

export default function WeAreGlobal() {
  return (
    <>
      <style>{`
        .wag-section {
          background-color: #000;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 50px 48px;
          box-sizing: border-box;
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
        }

        .wag-heading {
          font-size: clamp(2.6rem, 4.5vw, 3.8rem);
          font-weight: 400;
          color: #ffffff;
          margin: 0 0 20px 0;
          line-height: 1.1;
          letter-spacing: -0.015em;
          text-align: center;
        }

        .wag-heading em {
          color: #E04E14;
          font-style: italic;
          font-family: 'Georgia', 'Times New Roman', serif;
          font-weight: 400;
        }

        .wag-subtitle {
          color: #888888;
          font-size: clamp(0.875rem, 1.4vw, 1rem);
          text-align: center;
          max-width: 540px;
          line-height: 1.65;
          margin: 0 0 72px 0;
          font-weight: 400;
        }

        .wag-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1120px;
          width: 100%;
        }

        .wag-card {
          background-color: #000;
          border-radius: 16px;
          border: 1px solid #252525;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s ease;
        }

        .wag-card:hover {
          border-color: #363636;
        }

        .wag-image-wrapper {
          margin: 10px 10px 0 10px;
          border-radius: 10px;
          overflow: hidden;
          aspect-ratio: 4 / 3;
          flex-shrink: 0;
        }

        .wag-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 10px;
        }

        .wag-card-body {
          padding: 22px 22px 30px 22px;
        }

        .wag-card-title {
          color: #ffffff;
          font-size: clamp(1rem, 1.4vw, 1.2rem);
          font-weight: 700;
          margin: 0 0 10px 0;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }

        .wag-card-desc {
          color: #787878;
          font-size: clamp(0.8125rem, 1.05vw, 0.9375rem);
          line-height: 1.65;
          margin: 0;
          font-weight: 400;
        }

        @media (max-width: 860px) {
          .wag-grid {
            grid-template-columns: 1fr;
            max-width: 460px;
          }
          .wag-section {
            padding: 64px 24px;
          }
        }

        @media (max-width: 480px) {
          .wag-section {
            padding: 48px 16px;
          }
        }
      `}</style>

      <section className="wag-section">
        {/* Title */}
        <h1 className="wag-heading">
          we are <em>global</em>
        </h1>

        {/* Subtitle */}
        <p className="wag-subtitle">
          Serving ambitious brands across the United States, United Kingdom,
          <br />
          and United Arab Emirates.
        </p>

        {/* Cards */}
        <div className="wag-grid">
          {regions.map((region) => (
            <div key={region.name} className="wag-card">
              <div className="wag-image-wrapper">
                {/*
                  Replace `region.image` with your actual image source.
                  If using Next.js <Image>, swap the <img> tag below:
                  <Image src={region.image} alt={region.alt} fill style={{ objectFit: 'cover' }} />
                  (and make the wrapper position: relative)
                */}
                <img src={region.image} alt={region.alt} />
              </div>
              <div className="wag-card-body">
                <h2 className="wag-card-title">{region.name}</h2>
                <p className="wag-card-desc">{region.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}