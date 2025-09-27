import type { JSX, ReactNode } from "react";

//Home Section
export interface HeroButtonTypes {
  text: string;
  link: string;
  primary?: boolean;
}

export interface HeroStat {
  value: string;
  label: string;
}


export interface FeatureItem {
  arrow: ReactNode;
  icon: ReactNode;
  title: string | string[];
}

export interface NavItem {
  name: string;
  link: string;
}

export interface TopBannerType {
  text: string;
  linkText: string;
  link: string;
}

export interface SiteInfoType {
  siteTitle: string;
  logo: string;
}

// Featured Properties Section
export interface FeaturedPropertyDetail {
  icon: ReactNode;
  label: string;
}

export interface FeaturedPropertyButton {
  text: string;
  link: string;
}

export interface FeaturedProperty {
  id: string;
  image: string;
  title: string;
  description: string;
  readMoreLink: string;
  details: FeaturedPropertyDetail[];
  price: string;
  button: FeaturedPropertyButton;
}

export interface FeaturedPropertiesSectionType {
  headline: string;
  description: string;
  button: FeaturedPropertyButton;
  properties: FeaturedProperty[];
}

// Author of testimonial
export interface TestimonialAuthor {
  name: string;
  location: string;
  avatar: string;
}

// فرد من التقييمات
export interface Testimonial {
  id: string;
  icon: string;
  rating: number;
  title: string;
  text: string;
  author: TestimonialAuthor;
}

export interface TestimonialsSectionType {
  headline: string;
  description: string;
  button: {
    text: string;
    link: string;
  };
  testimonials: Testimonial[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  btnText:string;
  readMoreLink: string;
}
export interface FaqSectionType {
  headline: string;
  description: string;
  button: {
    text: string;
    link: string;
  };
  faqs: FaqItem[];
}

// Start Your Real Estate Journey Today Types
export interface CtaSectionType {
  background: string;
  headline: string;
  description: string;
  button: {
    text: string;
    link: string;
  };
}

//footer
export interface EndFooterType {
  copyright: string;
  termsAndConditionsLink: {
    text: string;
    link: string;
  };
  socialLinks: {
    name: string;
    icon: JSX.Element;
    link: string;
  }[];
}
export interface FooterNavColumn  {
    title: string;
    links: {
        name: string;
        link: string;
    }[];
}

export interface SocialLink {
  name: string;
  icon: ReactNode;
  link: string;
}
