export interface TermsSection {
  id: string;
  title: string;
  content: string | string[];
  subsections?: {
    title: string;
    content: string | string[];
  }[];
}

export const termsData: TermsSection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: [
      "Welcome to X2-ADV Real Estate (\"we,\" \"our,\" or \"us\"). These Terms of Use govern your use of our website, mobile applications, and services (collectively, the \"Service\") operated by X2-ADV Real Estate.",
      "By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service."
    ]
  },
  {
    id: "services",
    title: "2. Services Description",
    content: "X2-ADV Real Estate provides comprehensive real estate services including:",
    subsections: [
      {
        title: "Services List",
        content: [
          "Property listings and search functionality",
          "Real estate consultation and advisory services",
          "Property valuation and market analysis",
          "Buyer and seller representation",
          "Investment property guidance",
          "Property management services"
        ]
      }
    ]
  },
  {
    id: "accounts",
    title: "3. User Accounts",
    content: [
      "When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding the password and for all activities that occur under your account.",
      "You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account, whether or not you have authorized such activities or actions."
    ]
  },
  {
    id: "intellectual-property",
    title: "4. Intellectual Property Rights",
    content: [
      "The Service and its original content, features, and functionality are and will remain the exclusive property of X2-ADV Real Estate and its licensors. The Service is protected by copyright, trademark, and other laws.",
      "Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent."
    ]
  },
  {
    id: "user-content",
    title: "5. User-Generated Content",
    content: [
      "By posting content to the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the Service.",
      "You retain any and all of your rights to any content you submit, post, or display on or through the Service and you are responsible for protecting those rights."
    ]
  },
  {
    id: "privacy",
    title: "6. Privacy Policy",
    content: "Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices."
  },
  {
    id: "prohibited-uses",
    title: "7. Prohibited Uses",
    content: "You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:",
    subsections: [
      {
        title: "Prohibited Activities",
        content: [
          "In any way that violates any applicable federal, state, local, or international law or regulation",
          "To transmit, or procure the sending of, any advertising or promotional material",
          "To impersonate or attempt to impersonate the company, a company employee, another user, or any other person",
          "To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service",
          "To introduce viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful"
        ]
      }
    ]
  },
  {
    id: "disclaimers",
    title: "8. Disclaimers",
    content: [
      "The information on this Service is provided on an \"as is\" basis. To the fullest extent permitted by law, this Company excludes all representations, warranties, conditions and terms whether express or implied.",
      "Property information, including but not limited to prices, availability, and property details, is subject to change without notice and may not be accurate at the time of viewing."
    ]
  },
  {
    id: "limitation-liability",
    title: "9. Limitation of Liability",
    content: "In no event shall X2-ADV Real Estate, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses."
  },
  {
    id: "termination",
    title: "10. Termination",
    content: [
      "We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.",
      "If you wish to terminate your account, you may simply discontinue using the Service."
    ]
  },
  {
    id: "governing-law",
    title: "11. Governing Law",
    content: "These Terms shall be interpreted and governed by the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights."
  },
  {
    id: "changes",
    title: "12. Changes to Terms",
    content: [
      "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.",
      "What constitutes a material change will be determined at our sole discretion."
    ]
  },
  {
    id: "contact",
    title: "13. Contact Information",
    content: "If you have any questions about these Terms of Use, please contact us:"
  }
];

export const contactInfo = {
  company: "X2-ADV Real Estate",
  email: "legal@x2adv.com",
  phone: "+1 (555) 123-4567",
  address: "123 Real Estate Blvd, Suite 100, City, State 12345"
};
