import {
  contactHeroCard,
  contactHeroData,
  contactLetsConnectData,
  contactLetsConnectFormData,
} from "../data/Contact/ContactData.tsx";
import ContactExploreWorld from "../sections/Contact/ContactExploreWorld.tsx";
import Features from "../sections/sharedSections/Features.tsx";
import ContactForm from "../sections/Contact/ContactForm.tsx";
import OurOfficeSection from "../sections/Contact/OurOfficeSection.tsx";
import HeaderHero from "../sections/sharedSections/HeaderHero.tsx";

const Contact = () => {
  return (
    <div className="space-y-20 md:space-y-30 xl:space-y-37.5">
      <div>
        <HeaderHero
          title={contactHeroData.title}
          description={contactHeroData.description}
        />
        <Features data={contactHeroCard} />
      </div>
      <ContactForm title={contactLetsConnectData.title} description={contactLetsConnectData.description} data={contactLetsConnectFormData.conactForm} areaText={contactLetsConnectFormData.areaText} />
      <OurOfficeSection/>
      <ContactExploreWorld />
    </div>
  );
};

export default Contact;
