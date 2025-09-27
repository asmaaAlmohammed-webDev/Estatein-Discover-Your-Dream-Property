import { detailsFormData, detailsFormHeaderData, PropertyDetailsData } from "../data/PropertyDetails/PropertyDetailsData";
import ContactForm from "../sections/Contact/ContactForm";
import PricingDetailsSection from "../sections/propertiesDetails/PricingDetailsSection";
import { ComprehensivePricingDetails } from "../data/PropertyDetails/ComprehensivePricingDetails";
import FAQSection from "../sections/HomePageSections/FAQSection";
import { faqSectionData } from "../data/Home/HomeData";
import Images from "../sections/Images";
const PropertyDetails = () => {
  return (
    <div className="space-y-20 md:space-y-30 xl:space-y-37.5">
      <Images data={PropertyDetailsData}/>
      <ContactForm title={detailsFormHeaderData.title} description={detailsFormHeaderData.description} data={detailsFormData.conactForm} areaText={detailsFormData.areaText} detailsPage />
      <PricingDetailsSection data={ComprehensivePricingDetails}/>
      <FAQSection data={faqSectionData}/>
    </div>
  );
};

export default PropertyDetails;