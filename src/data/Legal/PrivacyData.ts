export interface PrivacySection {
  id: string;
  title: string;
  content: string | string[];
  subsections?: {
    title: string;
    content: string | string[];
  }[];
}

export const privacyData: PrivacySection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: [
      "At X2-ADV Real Estate (\"we,\" \"our,\" or \"us\"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile applications, or engage with our real estate services.",
      "By using our services, you consent to the data practices described in this policy. If you do not agree with our policies and practices, please do not use our services."
    ]
  },
  {
    id: "information-collection",
    title: "2. Information We Collect",
    content: "We may collect the following types of information:",
    subsections: [
      {
        title: "2.1 Personal Information",
        content: [
          "Name, email address, and phone number",
          "Mailing address and property preferences",
          "Financial information for mortgage pre-approval",
          "Property search criteria and preferences",
          "Communication preferences and history",
          "Account credentials and profile information"
        ]
      },
      {
        title: "2.2 Automatically Collected Information",
        content: [
          "IP address and device information",
          "Browser type and version",
          "Pages visited and time spent on each page",
          "Referring website and search terms",
          "Cookies and similar tracking technologies"
        ]
      }
    ]
  },
  {
    id: "information-usage",
    title: "3. How We Use Your Information",
    content: [
      "Providing and improving our real estate services",
      "Processing property inquiries and requests",
      "Sending relevant property listings and market updates",
      "Facilitating communication between buyers, sellers, and agents",
      "Personalizing your experience and content",
      "Analyzing website usage and improving functionality",
      "Complying with legal obligations and regulations",
      "Preventing fraud and ensuring security"
    ]
  },
  {
    id: "information-sharing",
    title: "4. Information Sharing and Disclosure",
    content: "We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:",
    subsections: [
      {
        title: "Sharing Circumstances",
        content: [
          "Service Providers: With trusted third-party service providers who assist us in operating our website and services",
          "Legal Requirements: When required by law or to protect our rights and safety",
          "Business Transfers: In connection with a merger, acquisition, or sale of assets",
          "Consent: With your explicit consent for specific purposes",
          "Real Estate Partners: With other real estate professionals when necessary for transactions"
        ]
      }
    ]
  },
  {
    id: "cookies-tracking",
    title: "5. Cookies and Tracking Technologies",
    content: "We use cookies and similar tracking technologies to enhance your browsing experience and analyze website usage. These technologies help us:",
    subsections: [
      {
        title: "Cookie Benefits",
        content: [
          "Remember your preferences and settings",
          "Provide personalized content and recommendations",
          "Analyze website traffic and user behavior",
          "Improve website performance and functionality"
        ]
      }
    ]
  },
  {
    id: "data-security",
    title: "6. Data Security",
    content: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:",
    subsections: [
      {
        title: "Security Measures",
        content: [
          "Encryption of sensitive data in transit and at rest",
          "Regular security assessments and updates",
          "Access controls and authentication procedures",
          "Employee training on data protection practices",
          "Incident response and breach notification procedures"
        ]
      }
    ]
  },
  {
    id: "data-retention",
    title: "7. Data Retention",
    content: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Factors we consider when determining retention periods include:",
    subsections: [
      {
        title: "Retention Factors",
        content: [
          "The nature and purpose of the information collected",
          "Legal and regulatory requirements",
          "Ongoing business relationships and transactions",
          "Your consent and preferences"
        ]
      }
    ]
  },
  {
    id: "privacy-rights",
    title: "8. Your Privacy Rights",
    content: "Depending on your location, you may have the following rights regarding your personal information:",
    subsections: [
      {
        title: "User Rights",
        content: [
          "Access: Request access to your personal information",
          "Correction: Request correction of inaccurate or incomplete information",
          "Deletion: Request deletion of your personal information",
          "Portability: Request a copy of your data in a portable format",
          "Opt-out: Opt out of marketing communications and data sharing",
          "Restriction: Request restriction of processing in certain circumstances"
        ]
      }
    ]
  },
  {
    id: "children-privacy",
    title: "9. Children's Privacy",
    content: "Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately, and we will take steps to remove such information."
  },
  {
    id: "third-party-links",
    title: "10. Third-Party Links",
    content: "Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit."
  },
  {
    id: "international-transfers",
    title: "11. International Data Transfers",
    content: "Your personal information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information."
  },
  {
    id: "policy-changes",
    title: "12. Changes to This Privacy Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the \"Last updated\" date.",
      "We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information."
    ]
  },
  {
    id: "contact",
    title: "13. Contact Us",
    content: "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:"
  }
];

export const privacyContactInfo = {
  company: "X2-ADV Real Estate",
  email: "privacy@x2adv.com",
  phone: "+1 (555) 123-4567",
  address: "123 Real Estate Blvd, Suite 100, City, State 12345",
  dpo: "dpo@x2adv.com"
};
