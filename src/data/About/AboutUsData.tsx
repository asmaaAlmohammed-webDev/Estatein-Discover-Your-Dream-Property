import Gradution from "../../svg/Gradution";
import Peopole from "../../svg/Peopole";
import Star from "../../svg/Star";
import type {
  OurValueSectionType,
  OurAchievementsSectionType,
  NavigatingEstateinExperienceSectionType,
  MeetEstateinTeamCardSectionType,
  OurValuedClientsSectionType,
} from "../../types/About/AboutType";
// Our Values section Data

export const OurValueSectionData: OurValueSectionType = {
  headline: "Our Values",
  description:
    "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.",
  values: [
    {
      id: "1",
      icon: <Star/>,
      title: "Trust",
      description:
        "Trust is the cornerstone of every successful real estate transaction.",
    },
    {
      id: "2",
      icon: <Gradution/>,
      title: "Excellence",
      description:
        "We set the bar high for ourselves. From the properties we list to the services we provide.",
    },
    {
      id: "3",
      icon: <Peopole/>,
      title: "Client-Centric",
      description:
        "Your dreams and needs are at the center of our universe. We listen, understand..",
    },
    {
      id: "4",
      icon: <Star/>,
      title: "Our Commitment",
      description:
        "We are dedicated to providing you with the highest level of service, professionalism, and support.",
    },
  ],
};

// Our Achievements section Data

export const OurAchievementsSectionData: OurAchievementsSectionType = {
  headline: "Our Achievements",
  description:
    "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.",
  properties: [
    {
      id: "property-1",
      title: "3+ Years of Excellence",
      description:
        "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
    },
    {
      id: "property-2",
      title: "Happy Clients",
      description:
        "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
    },
    {
      id: "property-3",
      title: "Industry Recognition",
      description:
        "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
    },
  ],
};

// Navigating the Estatein Experience section Data

export const NavigatingEstateinExperienceData: NavigatingEstateinExperienceSectionType =
  {
    headline: "Navigating the Estatein Experience",
    description:
      "At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.",
    steps: [
      {
        id: 1,
        title: "Discover a World of Possibilities",
        description:
          "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
      },
      {
        id: 2,
        title: "Narrowing Down Your Choices",
        description:
          "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
      },
      {
        id: 3,
        title: "Personalized Guidance",
        description:
          "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
      },
      {
        id: 4,
        title: "See It for Yourself",
        description:
          "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
      },
      {
        id: 5,
        title: "Making Informed Decisions",
        description:
          "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
      },
      {
        id: 6,
        title: "Getting the Best Deal",
        description:
          "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
      },
    ],
  };

// Meet the Estatein Team section Data

export const MeetEstateinTeamCardSectionData: MeetEstateinTeamCardSectionType =
  {
    headline: "Meet the Estatein Team",
    description:
      "At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.",
    properties: [
      {
        id: "property-1",
        image: "/assets/images/About/Image(1).webp",
        name: "Max Mitchell",
        job: "Founder",
      },
      {
        id: "property-2",
        image: "/assets/images/About/Image(4).webp",
        name: "Sarah Johnson",
        job: "Chief Real Estate Officer",
      },
      {
        id: "property-3",
        image: "/assets/images/About/Image(2).webp",
        name: "David Brown",
        job: "Head of Property Management",
      },
      {
        id: "property-4",
        image: "/assets/images/About/Image(3).webp",
        name: "Michael Turner",
        job: "Legal Counsel",
      },
    ],
  };
// Our Valued Clients section Data

export const OurValuedClientsSectionData: OurValuedClientsSectionType = {
  headline: "Our Valued Clients",
  description:
    "At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving",
  properties: [
    {
      id: "property-1",
      date: "Since 2019",
      button: {
        text: "Visit Website",
        link: "#",
      },
      title: "ABC Corporation",
      subCards: [
        {
          icon: "/assets/icons/domain.svg",
          subTitle: "Domain",
          title: "Commercial Real Estate",
        },
        {
          icon: "/assets/icons/category.svg",
          subTitle: "Category",
          title: "Luxury Home Development",
        },
      ],
      whatSay: "What They Said 🤗",
      say: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
    {
      id: "property-2",
      date: "Since 2018",
      button: {
        text: "Visit Website",
        link: "#",
      },
      title: "GreenTech Enterprises",
      subCards: [
        {
          icon: "/assets/icons/domain.svg",
          subTitle: "Domain",
          title: "Commercial Real Estate",
        },
        {
          icon: "/assets/icons/category.svg",
          subTitle: "Category",
          title: "Retail Space",
        },
      ],
      whatSay: "What They Said 🤗",
      say: "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
    },
  ],
};
