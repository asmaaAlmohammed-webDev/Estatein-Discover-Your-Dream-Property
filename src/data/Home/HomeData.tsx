import TopRightArrow from "../../svg/TopRightArrow";

import Bedroom from "../../svg/Bedroom";
import Bathroom from "../../svg/Bathroom";
import Villa from "../../svg/Villa";
import Facebook from "../../svg/FaceBook";
import LinkedIn from "../../svg/LinkedIn";
import TwitterIcon from "../../svg/Twitter";
import YouTube from "../../svg/YouTube";
// Hero Data

import type {
  CtaSectionType,
  EndFooterType,
  FaqSectionType,
  FeaturedPropertiesSectionType,
  FooterNavColumn,
  HeroStat,
  NavItem,
  SiteInfoType,
  TestimonialsSectionType,
  TopBannerType,
} from "../../types/Home/HomeTypes";
import type { FeaturesType } from "../../types/Contact/ContactType";

export const Stats: HeroStat[] = [
  { value: "200+", label: "Happy Customers" },
  { value: "10k+", label: "Properties For Clients" },
  { value: "16+", label: "Years of Experience" },
];

export const featuresSectionData: FeaturesType[] = [
  {
    arrow: <TopRightArrow />,
    icon: "/assets/icons/market.svg",
    title: "Find Your Dream Home",
    link: "/properties"
  },
  {
    arrow: <TopRightArrow />,
    icon: "/assets/icons/camera.svg",
    title: "Unlock Property Value",
    link: "/services#Unlock_Property_Value"
  },
  {
    arrow: <TopRightArrow />,
    icon: "/assets/icons/building.svg",
    title: "Effortless Property Management",
    link: "/services#Effortless_Property_Management"
  },
  {
    arrow: <TopRightArrow />,
    icon: "/assets/icons/sun.svg",
    title: "Smart Investments, Informed Decisions",
    link: "/services#Smart_Investments_Informed_Decisions"
  },
];

export const navigationData: NavItem[] = [
  { name: "Home", link: "#" },
  { name: "About Us", link: "#" },
  { name: "Properties", link: "#" },
  { name: "Services", link: "#" },
  { name: "Contact Us", link: "#" },
];

export const topBannerData: TopBannerType = {
  text: "Discover Your Dream Property with Estatein",
  linkText: "Learn More",
  link: "/properties",
};

export const siteInfo: SiteInfoType = {
  siteTitle: "Estatein",
  logo: "/assets/icons/estateinLogo.svg",
};

// Featured Properties Data

export const featuredPropertiesSectionData: FeaturedPropertiesSectionType = {
  headline: "Featured Properties",
  description:
    "Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click 'View Details' for more information.",
  button: {
    text: "View All Properties",
    link: "/properties",
  },
  properties: [
    {
      id: "property-1",
      image: "/assets/images/Home/villaSliderCard1.webp",
      title: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood, featuring a spacious open-plan living area, a modern gourmet kitchen, and a beautifully landscaped garden perfect for family gatherings or quiet relaxation. With ample natural light, elegant finishes, and a private garage, this home combines comfort, style, and convenience in one exceptional package",
      readMoreLink: "#",
      details: [
        { icon: <Bedroom />, label: "4-Bedroom" },
        { icon: <Bathroom />, label: "3-Bathroom" },
        { icon: <Villa />, label: "Villa" },
      ],
      price: "$550,000",
      button: {
        text: "View Property Details",
        link: "#",
      },
    },
    {
      id: "property-2",
      image: "/assets/images/Home/buildingSliderCard2.webp",
      title: "Metropolitan Haven",
      description:
        "A chic and fully-furnished 2-bedroom apartment with panoramic city views, featuring a modern open-plan living area, a sleek kitchen with top-of-the-line appliances, and a balcony perfect for enjoying sunsets. Residents also have access to premium amenities, including a fitness center, rooftop terrace, and 24-hour security, offering the ultimate blend of comfort, convenience, and urban sophistication",
      readMoreLink: "#",
      details: [
        { icon: <Bedroom />, label: "4-Bedroom" },
        { icon: <Bathroom />, label: "3-Bathroom" },
        { icon: <Villa />, label: "Villa" },
      ],
      price: "$550,000",
      button: {
        text: "View Property Details",
        link: "#",
      },
    },
    {
      id: "property-3",
      image: "/assets/images/Home/modernCitySliderCard3.webp",
      title: "Rustic Retreat Cottage",
      description:
        "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community, featuring a spacious open-concept living and dining area, a modern kitchen with high-end appliances, and a private backyard perfect for relaxing or entertaining. Residents enjoy access to exclusive amenities such as a swimming pool, fitness center, and beautifully landscaped communal areas, all within a safe and serene neighborhood that combines comfort, style, and convenience",
      readMoreLink: "#",
      details: [
        { icon: <Bedroom />, label: "4-Bedroom" },
        { icon: <Bathroom />, label: "3-Bathroom" },
        { icon: <Villa />, label: "Villa" },
      ],
      price: "$550,000",
      button: {
        text: "View Property Details",
        link: "#",
      },
    },
    {
      id: "property-1",
      image: "/assets/images/Home/villaSliderCard1.webp",
      title: "Seaside Serenity Villa",
      description:
        "A chic and fully-furnished 2-bedroom apartment with panoramic city views, featuring a modern open-plan living area, a sleek kitchen with top-of-the-line appliances, and a balcony perfect for enjoying sunsets. Residents also have access to premium amenities, including a fitness center, rooftop terrace, and 24-hour security, offering the ultimate blend of comfort, convenience, and urban sophistication",
      readMoreLink: "#",
      details: [
        { icon: <Bedroom />, label: "4-Bedroom" },
        { icon: <Bathroom />, label: "3-Bathroom" },
        { icon: <Villa />, label: "Villa" },
      ],
      price: "$550,000",
      button: {
        text: "View Property Details",
        link: "#",
      },
    },
    {
      id: "property-2",
      image: "/assets/images/Home/buildingSliderCard2.webp",
      title: "Metropolitan Haven",
      description:
        "A chic and fully-furnished 2-bedroom apartment with panoramic city views, featuring a modern open-plan living area, a sleek kitchen with top-of-the-line appliances, and a balcony perfect for enjoying sunsets. Residents also have access to premium amenities, including a fitness center, rooftop terrace, and 24-hour security, offering the ultimate blend of comfort, convenience, and urban sophistication",
      readMoreLink: "#",
      details: [
        { icon: <Bedroom />, label: "4-Bedroom" },
        { icon: <Bathroom />, label: "3-Bathroom" },
        { icon: <Villa />, label: "Villa" },
      ],
      price: "$550,000",
      button: {
        text: "View Property Details",
        link: "#",
      },
    },
    {
      id: "property-3",
      image: "/assets/images/Home/modernCitySliderCard3.webp",
      title: "Rustic Retreat Cottage",
      description:
        "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community, featuring a spacious open-concept living and dining area, a modern kitchen with high-end appliances, and a private backyard perfect for relaxing or entertaining. Residents enjoy access to exclusive amenities such as a swimming pool, fitness center, and beautifully landscaped communal areas, all within a safe and serene neighborhood that combines comfort, style, and convenience",
      readMoreLink: "#",
      details: [
        { icon: <Bedroom />, label: "4-Bedroom" },
        { icon: <Bathroom />, label: "3-Bathroom" },
        { icon: <Villa />, label: "Villa" },
      ],
      price: "$550,000",
      button: {
        text: "View Property Details",
        link: "#",
      },
    },
  ],
};

// What Our Clients Say Data

export const testimonialsSectionData: TestimonialsSectionType = {
  headline: "What Our Clients Say",
  description:
    "Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.",
  button: {
    text: "View All Testimonials",
    link: "/testimonials",
  },
  testimonials: [
    {
      id: "testimonial-1",
      rating: 5,
      icon: "/assets/icons/star.svg",
      title: "Exceptional Service!",
      text: "Our experience with Estatein was outstanding. Their teams dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      author: {
        name: "Wade Warren",
        location: "USA, California",
        avatar: "/assets/images/Home/person1.webp",
      },
    },
    {
      id: "testimonial-2",
      rating: 5,
      icon: "/assets/icons/star.svg",
      title: "Efficient and Reliable",
      text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      author: {
        name: "Emelie Thomson",
        location: "USA, Florida",
        avatar: "/assets/images/Home/person2.webp",
      },
    },
    {
      id: "testimonial-3",
      rating: 5,
      icon: "/assets/icons/star.svg",
      title: "Trusted Advisors",
      text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      author: {
        name: "John Mans",
        location: "USA, Nevada",
        avatar: "/assets/images/Home/person3.webp",
      },
    },
  ],
};

// Frequently Asked Questions Data

export const faqSectionData: FaqSectionType = {
  headline: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.",
  button: {
    text: "View All FAQ's",
    link: "/faq",
  },
  faqs: [
    {
      id: "faq-1",
      question: "How do I search for properties on Estatein?",
      answer:
        "Learn how to use our user-friendly search tools to find properties that match your your criteria.",
      btnText: "Read More",
      readMoreLink: "#",
    },
    {
      id: "faq-2",
      question:
        "What documents do I need to sell my property through Estatein?",
      answer:
        "Find out about the necessary documentation for listing your property with us.",
      btnText: "Read More",
      readMoreLink: "#",
    },
    {
      id: "faq-3",
      question: "How can I contact an Estatein agent?",
      answer:
        "Discover the different ways you can get in touch with our experienced agents.",
      btnText: "Read More",
      readMoreLink: "#",
    },
  ],
};

export const ctaSectionData: CtaSectionType = {
  background: "/assets/images/Home/backgroundSection.webp",
  headline: "Start Your Real Estate Journey Today",
  description:
    "Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice. Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.",
  button: {
    text: "Explore Properties",
    link: "#",
  },
};

export const footerLayout: {
  left: FooterNavColumn[];
  right: FooterNavColumn[];
} = {
  left: [
    {
      title: "Home",
      links: [
        { name: "Hero Section", link: "/#hero" },
        { name: "Features", link: "/#features" },
        { name: "Properties", link: "/#properties" },
        { name: "Testimonials", link: "/#testimonials" },
        { name: "FAQs", link: "/#faqs" },
      ],
    },
    {
      title: "Properties",
      links: [
        { name: "Portfolio", link: "/properties#properties-portfolio" },
        { name: "Categories", link: "/properties#properties-categories" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        { name: "Contact Form", link: "/contact#contact-form" },
        { name: "Our Offices", link: "/contact#contact-offices" },
      ],
    },
  ],
  right: [
    {
      title: "About Us",
      links: [
        { name: "Our Story", link: "/about#story" },
        { name: "Our Works", link: "/about#works" },
        { name: "How It Works", link: "/about#how-it-works" },
        { name: "Our Team", link: "/about#team" },
        { name: "Our Clients", link: "/about#clients" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Valuation Mastery", link: "/services#valuation_mastery" },
        { name: "Strategic Marketing", link: "/services#strategic_marketing" },
        { name: "Negotiation Wizardry", link: "/services#negotiation_wizardry" },
        { name: "Closing Success", link: "/services#closing_success" },
        { name: "Property Management", link: "/services#effortless_property_management" },
      ],
    },
  ],
};

export const endFooterData: EndFooterType = {
  copyright: "©2023 Estatein. All Rights Reserved.",
  termsAndConditionsLink: {
    text: "Terms & Conditions",
    link: "#terms",
  },
  socialLinks: [
    { name: "Facebook", icon: <Facebook />, link: "#" },
    { name: "LinkedIn", icon: <LinkedIn />, link: "#" },
    { name: "Twitter", icon: <TwitterIcon />, link: "#" },
    { name: "YouTube", icon: <YouTube />, link: "#" },
  ],
};
