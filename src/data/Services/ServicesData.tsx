import type {
  ContactHeroDataType,
} from "../../types/Contact/ContactType";
import type { ServiceCards } from "../../types/Services/ServicesTypes";

// hero section

export const servicesHeroData: ContactHeroDataType = {
  title: "Elevate Your Real Estate Experience",
  description:
    "Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.",
};

// unlock property section

export const unlockPropertyHeader: ContactHeroDataType = {
  title: "Unlock Property Value",
  description:
    "Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey",
};

export const unlockPropertyCards: ServiceCards = {
  cards: [
    {
      id: 1,
      icon: "/assets/icons/signalIcon.svg",
      title: "Valuation Mastery",
      description:
        "Discover the true worth of your property with our expert valuation services.",
    },
    {
      id: 2,
      icon: "/assets/icons/chartIcon.svg",
      title: "Strategic Marketing",
      description:
        "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
    },
    {
      id: 3,
      icon: "/assets/icons/dbIcon.svg",
      title: "Negotiation Wizardry",
      description:
        "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
    },
    {
      id: 4,
      icon: "/assets/icons/speakerIcon.svg",
      title: "Closing Success",
      description:
        "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
    },
  ],
  promotionalCard: {
    title: "Unlock the Value of Your Property Today",
    description:
      "Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.",

    link: "#",
  },
};

// effortless property

export const effortlessPropertyHeader: ContactHeroDataType = {
  title: "Effortless Property Management",
  description:
    "Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you",
};

export const effortlessProperty: ServiceCards = {
  cards: [
    {
      id: 1,
      icon: "/assets/icons/storeIcon.svg",
      title: "Tenant Harmony",
      description:
        "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.",
    },
    {
      id: 2,
      icon: "/assets/icons/ticketIcon.svg",
      title: "Maintenance Ease",
      description:
        "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
    },
    {
      id: 3,
      icon: "/assets/icons/iusterIcon.svg",
      title: "Financial Peace of Mind",
      description:
        "Managing property finances can be complex. Our financial experts take care of rent collection",
    },
    {
      id: 4,
      icon: "/assets/icons/servicesSunIcon.svg",
      title: "Legal Guardian",
      description:
        "Stay compliant with property laws and regulations effortlessly.",
    },
  ],
  promotionalCard: {
    title: "Experience Effortless Property Management",
    description:
      "Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.",

    link: "#",
  },
};

// smart investments

export const smartInvestmentsHeader: ContactHeroDataType = {
  title: "Smart Investments, Informed Decisions",
  description:
    "Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions.",
};

export const smartInvestments: ServiceCards = {
  cards: [
    {
      id: 1,
      icon: "/assets/icons/signalIcon.svg",
      title: "Market Insight",
      description:
        "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions",
    },
    {
      id: 2,
      icon: "/assets/icons/fireIcon.svg",
      title: "ROI Assessment",
      description:
        "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments",
    },
    {
      id: 3,
      icon: "/assets/icons/lightIcon.svg",
      title: "Customized Strategies",
      description:
        "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs",
    },
    {
      id: 4,
      icon: "/assets/icons/servicesSunIcon.svg",
      title: "Diversification Mastery",
      description:
        "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations",
    },
  ],
  promotionalCard: {
    title: "Unlock Your Investment Potential",
    description:
      "Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.",
    link: "#",
  },
};
