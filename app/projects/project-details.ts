export type ProjectImage = {
  src: string;
  alt: string;
  position?: string;
  overlay?: boolean;
};

export type WorkIcon = "creator" | "social" | "email" | "360";
export type OutcomeIcon = "megaphone" | "bars" | "shield" | "star";

export type ProjectDetail = {
  slug: string;
  productName: string;
  title: string;
  description: string;
  heroImage: ProjectImage;
  overviewSubtitle: string;
  galleryImages: ProjectImage[];
  goal: string;
  workIntro: string;
  workItems: {
    icon: WorkIcon;
    text: string;
  }[];
  approach: string;
  outcomes: {
    icon: OutcomeIcon;
    text: string;
  }[];
  focusAreas: string[];
  videoTitle: string;
  videoSubtitle: string;
  videoPreview: ProjectImage;
  metadata: {
    title: string;
    description: string;
  };
};

export const projectDetails = [
  {
    slug: "agency-8",
    productName: "Agency 8",
    title: "Real Estate Agency Email & WhatsApp Strategy",
    description:
      "Agency 8 is a real estate agency focused on delivering a modern and streamlined experience for buyers and investors. USS partnered with Agency 8 to build a strong digital foundation, combining a custom website with integrated marketing systems.",
    heroImage: {
      src: "/assets/agency/agency.png",
      alt: "Agency 8 luxury apartment interior overlooking the sea",
      position: "50% 50%",
    },
    overviewSubtitle: "Sneak peak into Agency 8",
    galleryImages: [
      {
        src: "/assets/agency/1.png",
        alt: "Agency 8 luxury waterfront property terrace",
        position: "50% 50%",
      },
      {
        src: "/assets/agency/2.png",
        alt: "Agency 8 Dubai penthouse terrace with skyline view",
        position: "50% 48%",
      },
      {
        src: "/assets/agency/3.png",
        alt: "Agency 8 premium apartment dining and living room",
        position: "50% 50%",
      },
      {
        src: "/assets/agency/4.png",
        alt: "Agency 8 modern beachfront residence exterior",
        position: "50% 52%",
      },
    ],
    goal:
      "Create a high-performing digital presence while implementing systems to capture, nurture, and convert leads more effectively.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
    workItems: [
      {
        icon: "creator",
        text: "Custom coded website design and development",
      },
      {
        icon: "social",
        text: "Email marketing setup and campaigns",
      },
      {
        icon: "email",
        text: "WhatsApp marketing integration",
      },
      {
        icon: "360",
        text: "Overall marketing strategy for market entry",
      },
    ],
    approach:
      "Our focus was on building more than just a website. We created a connected system. By combining a tailored web experience with direct communication channels, we enabled Agency 8 to engage leads more effectively and streamline their marketing efforts.",
    outcomes: [
      {
        icon: "megaphone",
        text: "A fully custom website aligned with the brand",
      },
      {
        icon: "bars",
        text: "Integrated communication channels for leads",
      },
      {
        icon: "shield",
        text: "Capturing and managing enquiries",
      },
      {
        icon: "star",
        text: "A scalable digital setup for continued growth",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Content Creation"],
    videoTitle: "mall of emirates launch",
    videoSubtitle: "See how we brought this campaign to life.",
    videoPreview: {
      src: "/assets/blurred.png",
      alt: "Blurred video preview of the Agency 8 real estate campaign",
      position: "50% 44%",
    },
    metadata: {
      title: "Agency 8 Email & WhatsApp Strategy | USS Projects",
      description:
        "A USS project overview for Agency 8, covering custom website development, email marketing, WhatsApp marketing integration, and digital strategy.",
    },
  },
  {
    slug: "sadia-psychology",
    productName: "Sadia Psychology",
    title: "Black Friday project with Sadia Psychology",
    description:
      "Sadia is a content creator and YouTuber with a strong global audience, including over 800K followers on Instagram. USS partnered with her to create and launch a 2024 planner designed as a daily resource, combining insights from her content into a structured, engaging product.",
    heroImage: {
      src: "/assets/sadia/Sadia.png",
      alt: "Sadia Psychology holding her planner",
      position: "50% 45%",
    },
    overviewSubtitle: "Sneak peak into Black Friday launch",
    galleryImages: [
      {
        src: "/assets/sadia/1.png",
        alt: "Sadia Psychology product launch studio portrait",
        position: "22% 50%",
      },
      {
        src: "/assets/sadia/2.png",
        alt: "Sadia Psychology seated portrait for campaign content",
        position: "50% 43%",
      },
      {
        src: "/assets/sadia/3.png",
        alt: "Sadia Psychology planner product close up",
        position: "74% 50%",
      },
      {
        src: "/assets/sadia/4.png",
        alt: "Sadia Psychology Black Friday launch portrait",
        position: "50% 35%",
      },
    ],
    goal:
      "Develop and launch a product that delivers value to her audience, while driving strong engagement and sales from day one.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
    workItems: [
      {
        icon: "creator",
        text: "Product concept development",
      },
      {
        icon: "social",
        text: "Planner design and production",
      },
      {
        icon: "email",
        text: "Marketing strategy",
      },
      {
        icon: "360",
        text: "Launch execution across digital channels",
      },
    ],
    approach:
      "Our focus was on turning existing audience demand into a tangible product. We built a launch strategy that combined content, storytelling, and direct engagement, guiding the audience from awareness to purchase through social and email touchpoints.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Thousands of units sold within the first two weeks",
      },
      {
        icon: "bars",
        text: "Strong engagement from current audience",
      },
      {
        icon: "shield",
        text: "Successful transition from content to product",
      },
      {
        icon: "star",
        text: "A scalable model for future product launches",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Content Creation"],
    videoTitle: "Black Friday product launch",
    videoSubtitle: "See how we brought this campaign to life.",
    videoPreview: {
      src: "/assets/blurred.png",
      alt: "Blurred video preview of the Sadia Psychology Black Friday launch",
      position: "50% 44%",
    },
    metadata: {
      title: "Sadia Psychology Black Friday Launch | USS Projects",
      description:
        "A USS project overview for launching Sadia Psychology's 2024 planner through product concept development, marketing strategy, and digital launch execution.",
    },
  },
  {
    slug: "women-who-thrive",
    productName: "Women Who Thrive",
    title: "Increasing memberships for Women Who Thrive",
    description:
      "Women Who Thrive is a Dubai based female networking organisation focused on empowering women through connection, business growth, and personal development. USS partnered with the team as their dedicated marketing partner, supporting their growth and expanding their community.",
    heroImage: {
      src: "/assets/women/Women.jpg",
      alt: "Women Who Thrive event portrait with three women",
      position: "50% 45%",
    },
    overviewSubtitle: "Sneak peak into Women Who Thrive networking",
    galleryImages: [
      {
        src: "/assets/women/1.jpg",
        alt: "Women Who Thrive campaign attendee moment",
        position: "18% 50%",
      },
      {
        src: "/assets/women/2.jpg",
        alt: "Women Who Thrive event branding and activation",
        position: "38% 50%",
      },
      {
        src: "/assets/women/3.jpg",
        alt: "Women Who Thrive networking event guests",
        position: "56% 50%",
      },
      {
        src: "/assets/women/4.jpg",
        alt: "Women Who Thrive community event audience",
        position: "78% 50%",
      },
    ],
    goal:
      "Increase membership, strengthen brand presence, and build a highly engaged community all through organic growth.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
    workItems: [
      {
        icon: "creator",
        text: "Marketing strategy",
      },
      {
        icon: "social",
        text: "Social media management",
      },
      {
        icon: "email",
        text: "Content creation",
      },
      {
        icon: "360",
        text: "Email marketing",
      },
    ],
    approach:
      "Our focus was on building a strong, community-driven brand. We combined consistent storytelling, value-driven content, and audience engagement to create a sense of connection, turning followers into active members.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Membership base tripled within 15 months",
      },
      {
        icon: "bars",
        text: "Organic Instagram growth from 0K to 22K",
      },
      {
        icon: "shield",
        text: "Engagement without relying on paid ads",
      },
      {
        icon: "star",
        text: "A highly active and connected community",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Content Creation"],
    videoTitle: "building a strong, community driven brand",
    videoSubtitle: "See how we brought this campaign to life.",
    videoPreview: {
      src: "/assets/blurred.png",
      alt: "Blurred video preview of the Women Who Thrive community campaign",
      position: "50% 44%",
    },
    metadata: {
      title: "Women Who Thrive Membership Growth | USS Projects",
      description:
        "A USS project overview for growing Women Who Thrive through community-led marketing strategy, social media management, content creation, and email marketing.",
    },
  },
  {
    slug: "picksperience",
    productName: "Picksperience",
    title: "Sampling Agency Launching from UK to UAE",
    description:
      "Picksperience is a startup focused on product sampling, helping brands deliver samples directly to targeted audiences, from office workers and students to gym members and beyond. The goal is to drive real engagement, build brand loyalty, and influence future purchasing decisions. USS partnered with Picksperience to support their growth and build awareness for the platform.",
    heroImage: {
      src: "/assets/picksperience/Pickspereince.png",
      alt: "Picksperience launch venue and sampling activation space",
      position: "50% 43%",
    },
    overviewSubtitle: "Sneak peak into Picksperience launch",
    galleryImages: [
      {
        src: "/assets/picksperience/1.png",
        alt: "Picksperience product sampling activation venue",
        position: "18% 50%",
      },
      {
        src: "/assets/picksperience/2.jpg",
        alt: "Picksperience sampling campaign setup",
        position: "38% 50%",
      },
      {
        src: "/assets/picksperience/3.png",
        alt: "Picksperience audience engagement launch content",
        position: "58% 50%",
      },
      {
        src: "/assets/picksperience/4.jpg",
        alt: "Picksperience brand sampling platform launch",
        position: "78% 50%",
      },
    ],
    goal:
      "Position Picksperience as a go-to solution for brands looking to connect with their audience in a more direct and engaging way.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
    workItems: [
      {
        icon: "creator",
        text: "Content creation",
      },
      {
        icon: "social",
        text: "Social media management",
      },
      {
        icon: "email",
        text: "Email marketing setup and campaigns",
      },
      {
        icon: "360",
        text: "Paid social campaigns",
      },
    ],
    approach:
      "Our focus was on showcasing the value of real-world engagement. We created content and campaigns that highlighted how product sampling can build stronger connections between brands and their audiences, while driving interest from both businesses and consumers.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Increased awareness of the platform",
      },
      {
        icon: "bars",
        text: "Engagement across digital channels",
      },
      {
        icon: "shield",
        text: "Clear positioning within the product sampling space",
      },
      {
        icon: "star",
        text: "A solid foundation for ongoing growth",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Content Creation"],
    videoTitle: "mall of emirates launch",
    videoSubtitle: "See how we brought this campaign to life.",
    videoPreview: {
      src: "/assets/blurred.png",
      alt: "Blurred video preview of the Picksperience launch campaign",
      position: "50% 44%",
    },
    metadata: {
      title: "Picksperience Sampling Agency Launch | USS Projects",
      description:
        "A USS project overview for launching Picksperience from the UK to UAE through content creation, social media management, email marketing, and paid social campaigns.",
    },
  },
  {
    slug: "supperclub",
    productName: "SupperClub",
    title: "Scaling SupperClub Membership",
    description:
      "SupperClub is a premium dining and lifestyle membership offering access to exclusive benefits across 700+ venues, including top restaurants and 5-star hotels. USS partnered with SupperClub to support their growth and increase membership through a full-scale marketing approach.",
    heroImage: {
      src: "/assets/supperclub/Supperclub.png",
      alt: "SupperClub poolside dining and cocktail experience",
      position: "50% 53%",
    },
    overviewSubtitle: "Sneak peak into SupperClub project",
    galleryImages: [
      {
        src: "/assets/supperclub/1.png",
        alt: "SupperClub dining experience with cocktail by the pool",
        position: "20% 50%",
      },
      {
        src: "/assets/supperclub/2.png",
        alt: "SupperClub premium restaurant dish and table setting",
        position: "42% 58%",
      },
      {
        src: "/assets/supperclub/3.png",
        alt: "SupperClub lifestyle membership poolside moment",
        position: "58% 30%",
      },
      {
        src: "/assets/supperclub/4.png",
        alt: "SupperClub hospitality campaign food and drink detail",
        position: "72% 56%",
      },
    ],
    goal:
      "Drive membership growth while maintaining a premium brand image and attracting the right audience.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
    workItems: [
      {
        icon: "creator",
        text: "Marketing strategy",
      },
      {
        icon: "social",
        text: "Content creation",
      },
      {
        icon: "email",
        text: "Social media management",
      },
      {
        icon: "360",
        text: "Email marketing",
      },
    ],
    approach:
      "Our focus was on positioning SupperClub as an exclusive and high-value offering. We combined consistent content, strategic messaging, and targeted communication to attract and convert a premium audience.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Increased membership growth",
      },
      {
        icon: "bars",
        text: "Stronger brand presence across digital channels",
      },
      {
        icon: "shield",
        text: "Improved engagement with target audiences",
      },
      {
        icon: "star",
        text: "Clear and scalable marketing foundation",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Content Creation"],
    videoTitle: "mall of emirates launch",
    videoSubtitle: "See how we brought this campaign to life.",
    videoPreview: {
      src: "/assets/blurred.png",
      alt: "Blurred video preview of the SupperClub membership campaign",
      position: "50% 53%",
    },
    metadata: {
      title: "SupperClub Membership Growth | USS Projects",
      description:
        "A USS project overview for scaling SupperClub membership through marketing strategy, content creation, social media management, and email marketing.",
    },
  },
  {
    slug: "cinamood",
    productName: "Cinnamood",
    title: "Launching Cinnamood in the UAE",
    description:
      "Cinnamood is a German bakery franchise known for its signature cinnamon rolls and strong brand presence across Europe. We worked alongside their German team to support their entry into the UAE market, helping establish their presence in Dubai and adapt their brand for a new audience.",
    heroImage: {
      src: "/assets/cinamood/cinamood.jpg",
      alt: "Cinnamood cinnamon roll with chocolate topping",
      position: "50% 48%",
    },
    overviewSubtitle: "Sneak peak into Cinnamood launch",
    galleryImages: [
      {
        src: "/assets/cinamood/1.jpg",
        alt: "Close up of a Cinnamood cinnamon roll",
        position: "34% 62%",
      },
      {
        src: "/assets/cinamood/2.jpg",
        alt: "Cinnamood drink held on an escalator",
        position: "49% 34%",
      },
      {
        src: "/assets/cinamood/3.jpg",
        alt: "Cinnamood pastries on a studio backdrop",
        position: "64% 48%",
        overlay: true,
      },
      {
        src: "/assets/cinamood/4.png",
        alt: "Cinnamood launch content in Mall of Emirates",
        position: "50% 45%",
      },
    ],
    goal:
      "Successfully launch Cinnamood in Mall of Emirates, while building local awareness and demand from day one, without losing the essence of the original brand.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
    workItems: [
      {
        icon: "creator",
        text: "Content creation tailored for the UAE audience",
      },
      {
        icon: "social",
        text: "Social media management",
      },
      {
        icon: "email",
        text: "Email marketing setup and campaigns",
      },
      {
        icon: "360",
        text: "Overall marketing strategy for market entry",
      },
    ],
    approach:
      "Our focus was on making the brand feel both globally consistent and locally relevant. We adapted content, messaging, and strategy to fit the Dubai market while maintaining Cinnamood's identity.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Strong awareness during launch phase",
      },
      {
        icon: "bars",
        text: "Growth in local audience engagement",
      },
      {
        icon: "shield",
        text: "Consistent brand presence across platforms",
      },
      {
        icon: "star",
        text: "Set new standards for support system activations",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Content Creation"],
    videoTitle: "mall of emirates launch",
    videoSubtitle: "See how we brought this campaign to life.",
    videoPreview: {
      src: "/assets/blurred.png",
      alt: "Blurred video preview of the Cinnamood Mall of Emirates launch",
      position: "50% 44%",
    },
    metadata: {
      title: "Cinnamood UAE Launch | USS Projects",
      description:
        "A USS project overview for launching Cinnamood in the UAE through content, social media, and 360 marketing.",
    },
  },
  {
    slug: "yula-beach-lounge",
    productName: "Yula Lounge",
    title: "Transforming Yalseh into Yula Lounge",
    description:
      "Yula Lounge is a Dubai based beach club and restaurant, rebranded from its original identity as Yalseh Lounge. USS led this transition, helping transform the brand from a traditional Arabic style beach lounge into a more modern, elevated concept creating strong content, supporting social media management and email marketing.",
    heroImage: {
      src: "/assets/yula/yula.jpg",
      alt: "Yula Lounge beach club terrace with Dubai skyline",
      position: "50% 44%",
    },
    overviewSubtitle: "Sneak peak into rebrand project",
    galleryImages: [
      {
        src: "/assets/yula/1.jpg",
        alt: "Yula Lounge dessert with chocolate sauce",
        position: "50% 37%",
      },
      {
        src: "/assets/yula/2.jpg",
        alt: "Yula Lounge terrace and skyline at night",
        position: "50% 48%",
      },
      {
        src: "/assets/yula/3.jpg",
        alt: "Yula Lounge terrace with city lights",
        position: "48% 50%",
      },
      {
        src: "/assets/yula/4.jpg",
        alt: "Yula Lounge brunch plate and dessert",
        position: "50% 38%",
      },
    ],
    goal:
      "Ensure a smooth and successful rebrand, while repositioning Yula Lounge to cater to a broader, more contemporary audience.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
    workItems: [
      {
        icon: "creator",
        text: "Content creation aligned with the new brand direction",
      },
      {
        icon: "social",
        text: "Social media management",
      },
      {
        icon: "email",
        text: "Email marketing setup and campaigns",
      },
      {
        icon: "360",
        text: "PR and launch support",
      },
    ],
    approach:
      "To USS, rebranding wasn't just about visuals, it's about perception. Our focus was on delivering a consistent and refined identity across all channels, making sure the new direction felt premium, aligned with Yula's business direction and wider marketing goals.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Smooth transition from Yalseh to Yula Lounge",
      },
      {
        icon: "bars",
        text: "Consistent brand presence across platforms",
      },
      {
        icon: "shield",
        text: "Strong alignment between concept and content",
      },
      {
        icon: "star",
        text: "A clear foundation for post-launch growth",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Content Creation"],
    videoTitle: "beach lounge in Dubai",
    videoSubtitle: "See how we brought this campaign to life.",
    videoPreview: {
      src: "/assets/blurred.png",
      alt: "Blurred video preview of the Yula Lounge rebrand campaign",
      position: "50% 42%",
    },
    metadata: {
      title: "Yula Beach Lounge Rebrand | USS Projects",
      description:
        "A USS project overview for transforming Yalseh into Yula Lounge through rebrand support, content, social media, and email marketing.",
    },
  },
  {
    slug: "flowork",
    productName: "Flowork",
    title: "Launching Flowork in Dubai Hills & Business Bay",
    description:
      "Flowork is a modern business centre offering flexible co-working spaces in Dubai Hills. The offer: private offices, virtual rooms and podcast studios. USS partnered with Flowork to support the launch of their first location in Dubai Hills and second location in Business Bay, helping establish a strong brand awareness ahead of opening.",
    heroImage: {
      src: "/assets/flowork/flowork.jpg",
      alt: "Flowork lounge with warm shelving and tan seating",
      position: "50% 48%",
    },
    overviewSubtitle: "Sneak peak into Flowork opening",
    galleryImages: [
      {
        src: "/assets/flowork/1.jpg",
        alt: "Flowork workspace corridor and office interior",
        position: "20% 52%",
      },
      {
        src: "/assets/flowork/2.jpg",
        alt: "Flowork reception lounge and brand wall",
        position: "45% 48%",
      },
      {
        src: "/assets/flowork/3.jpg",
        alt: "Flowork working lounge with contemporary seating",
        position: "62% 48%",
      },
      {
        src: "/assets/flowork/4.jpg",
        alt: "Flowork private office lounge detail",
        position: "78% 50%",
      },
    ],
    goal:
      "Build awareness, generate demand and position Flowork as a go to workspace solution in Dubai ahead of its official launch.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
    workItems: [
      {
        icon: "creator",
        text: "Paid media campaigns to drive visibility and leads",
      },
      {
        icon: "social",
        text: "SEO to improve search presence and organic traffic",
      },
      {
        icon: "email",
        text: "Targeted email marketing",
      },
      {
        icon: "360",
        text: "Social media management across key platforms",
      },
    ],
    approach:
      "Our focus was on combining brand awareness with engagement. We used paid and organic channels together to create consistent digital presence, while delivering content that showcased the space, communicated value and built interest before launch.",
    outcomes: [
      {
        icon: "megaphone",
        text: "We sold 50% of total offices before opening",
      },
      {
        icon: "bars",
        text: "Strong awareness leading up to launch",
      },
      {
        icon: "shield",
        text: "Consistent presence across multiple platforms",
      },
      {
        icon: "star",
        text: "A solid foundation for growth post-launch",
      },
    ],
    focusAreas: ["Social Media", "Paid Media", "Content Creation"],
    videoTitle: "Dubai Hills & Business Bay launch",
    videoSubtitle: "See how we brought this campaign to life.",
    videoPreview: {
      src: "/assets/blurred.png",
      alt: "Blurred video preview of the Flowork launch campaign",
      position: "50% 48%",
    },
    metadata: {
      title: "Flowork Dubai Launch | USS Projects",
      description:
        "A USS project overview for launching Flowork in Dubai Hills and Business Bay through paid media, social media, SEO, and content creation.",
    },
  },
  {
    slug: "blank-dxb",
    productName: "Blank DXB",
    title: "Building Blank DXB from the ground up",
    description:
      "Blank DXB is a new concept focused on transforming a warehouse space into a versatile venue for corporate events, private hire, and special occasions in Dubai. USS partnered with Blank DXB from the early stages, supporting everything from initial setup to building a complete go-to-market strategy.",
    heroImage: {
      src: "/assets/blank/blank.jpg",
      alt: "Blank DXB warehouse venue space",
      position: "50% 50%",
    },
    overviewSubtitle: "Sneak peak into Blank DXB launch",
    galleryImages: [
      {
        src: "/assets/blank/1.png",
        alt: "Blank DXB event venue with dramatic lighting",
        position: "18% 50%",
      },
      {
        src: "/assets/blank/2.jpg",
        alt: "Blank DXB corporate event setup concept",
        position: "40% 50%",
      },
      {
        src: "/assets/blank/3.jpg",
        alt: "Blank DXB warehouse event launch atmosphere",
        position: "62% 50%",
      },
      {
        src: "/assets/blank/4.jpg",
        alt: "Blank DXB empty warehouse venue space",
        position: "82% 50%",
      },
    ],
    goal:
      "Create and launch a fully operational venue concept, from business setup to generating demand and bookings.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
    workItems: [
      {
        icon: "creator",
        text: "Business setup and operational support",
      },
      {
        icon: "social",
        text: "Branding and creative direction",
      },
      {
        icon: "email",
        text: "Website design and build",
      },
      {
        icon: "360",
        text: "Paid media strategy across Google Ads and paid social",
      },
    ],
    approach:
      "This wasn't just a marketing project, it was about building a business from the ground up. We focused on creating a strong brand identity, a clear market position, and a performance-driven strategy to attract the right audience and drive bookings.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Clear positioning within events and venue space",
      },
      {
        icon: "bars",
        text: "Strong foundation across brand and digital presence",
      },
      {
        icon: "shield",
        text: "Targeted strategy for corporate and private events",
      },
      {
        icon: "star",
        text: "Scalable setup ready for ongoing growth",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Content Creation"],
    videoTitle: "bringing a new concept to life",
    videoSubtitle: "See how we brought this campaign to life.",
    videoPreview: {
      src: "/assets/blurred.png",
      alt: "Blurred video preview of the Blank DXB launch campaign",
      position: "50% 50%",
    },
    metadata: {
      title: "Blank DXB Launch | USS Projects",
      description:
        "A USS project overview for building Blank DXB from the ground up through business setup, branding, website design, and paid media strategy.",
    },
  },
  {
    slug: "reclaim-us",
    productName: "Reclaim",
    title: "Launching reclaim in the US",
    description:
      "Reclaim is a US travel service designed to simplify the airport experience by allowing passengers to skip check-in entirely. By collecting luggage directly from a customer's home, hotel, or Airbnb and checking it in with the airline, reclaim offers a more seamless and convenient way to travel.",
    heroImage: {
      src: "/assets/reclaim/reclaim.png",
      alt: "Travelers with luggage inside an airport terminal",
      position: "50% 50%",
    },
    overviewSubtitle: "Sneak peak into reclaim launch in US",
    galleryImages: [
      {
        src: "/assets/reclaim/1.png",
        alt: "Reclaim travel luggage in airport terminal",
        position: "16% 50%",
      },
      {
        src: "/assets/reclaim/2.jpg",
        alt: "Reclaim branded luggage service concept",
        position: "38% 50%",
      },
      {
        src: "/assets/reclaim/3.png",
        alt: "Traveler with luggage before boarding",
        position: "58% 50%",
      },
      {
        src: "/assets/reclaim/4.png",
        alt: "US travel destination skyline and airport route",
        position: "82% 50%",
      },
    ],
    goal:
      "Introduce and position reclaim as a trusted, time-saving solution for modern travelers, while building awareness in a new and competitive market.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
    workItems: [
      {
        icon: "creator",
        text: "Marketing strategy",
      },
      {
        icon: "social",
        text: "Paid media",
      },
      {
        icon: "email",
        text: "Email marketing",
      },
      {
        icon: "360",
        text: "Content creation",
      },
    ],
    approach:
      "Our focus was on clearly communicating the value of the service: convenience, time-saving, and simplicity. We built a cohesive strategy across channels to educate the audience, build trust, and drive adoption.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Clear positioning within the travel space",
      },
      {
        icon: "bars",
        text: "Increased awareness in the US market",
      },
      {
        icon: "shield",
        text: "Consistent messaging across all channels",
      },
      {
        icon: "star",
        text: "Strong foundation for ongoing growth",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Content Creation"],
    videoTitle: "mall of emirates launch",
    videoSubtitle: "See how we brought this campaign to life.",
    videoPreview: {
      src: "/assets/blurred.png",
      alt: "Blurred video preview of the Reclaim US launch campaign",
      position: "50% 50%",
    },
    metadata: {
      title: "Reclaim US Launch | USS Projects",
      description:
        "A USS project overview for launching Reclaim in the US travel market through marketing strategy, paid media, email marketing, and content creation.",
    },
  },
  {
    slug: "adidas-middle-east",
    productName: "Adidas Middle East",
    title: "Adidas Middle East Product Launch",
    description:
      "USS partnered with Adidas Dubai to support the launch of a new product, delivering an event-led activation alongside content creation. The project focused on creating a strong brand moment that connected with the local audience and extended beyond the event itself.",
    heroImage: {
      src: "/assets/adidas/Adidas.jpg",
      alt: "Adidas Middle East launch event crowd",
      position: "50% 40%",
    },
    overviewSubtitle: "Sneak peak into Adidas event",
    galleryImages: [
      {
        src: "/assets/adidas/1.jpg",
        alt: "Adidas campaign talent in red track jacket",
        position: "50% 47%",
      },
      {
        src: "/assets/adidas/2.jpg",
        alt: "Adidas Originals event product moment",
        position: "38% 48%",
      },
      {
        src: "/assets/adidas/3.jpg",
        alt: "Adidas Middle East launch DJ and event crowd",
        position: "52% 38%",
      },
      {
        src: "/assets/adidas/4.jpg",
        alt: "Adidas Middle East launch guests",
        position: "72% 42%",
      },
    ],
    goal:
      "Execute a successful product launch event while capturing high-quality content to amplify the campaign across digital platforms.",
    workIntro: "We supported the launch with a full 360 scope marketing approach:",
    workItems: [
      {
        icon: "creator",
        text: "Event execution and on-ground support",
      },
      {
        icon: "social",
        text: "Content creation during the launch",
      },
      {
        icon: "email",
        text: "Capturing assets for ongoing digital use",
      },
      {
        icon: "360",
        text: "Creative vision and concept",
      },
    ],
    approach:
      "Our focus was on combining experience with content. We ensured the event delivered a strong in-person impact, while producing content that could extend the campaign's reach across social and digital channels.",
    outcomes: [
      {
        icon: "megaphone",
        text: "Successful product launch event",
      },
      {
        icon: "bars",
        text: "High-quality content captured for digital use",
      },
      {
        icon: "shield",
        text: "Strong alignment between brand and event",
      },
      {
        icon: "star",
        text: "Extended value beyond the launch moment",
      },
    ],
    focusAreas: ["Social Media", "360 Marketing", "Content Creation"],
    videoTitle: "showcase your new product properly",
    videoSubtitle: "See how we brought this campaign to life.",
    videoPreview: {
      src: "/assets/blurred.png",
      alt: "Blurred video preview of the Adidas Middle East product launch",
      position: "50% 40%",
    },
    metadata: {
      title: "Adidas Middle East Product Launch | USS Projects",
      description:
        "A USS project overview for supporting Adidas Middle East with product launch event activation, content creation, and digital campaign assets.",
    },
  },
] satisfies ProjectDetail[];

export function getProjectDetail(slug: string) {
  return projectDetails.find((project) => project.slug === slug);
}
