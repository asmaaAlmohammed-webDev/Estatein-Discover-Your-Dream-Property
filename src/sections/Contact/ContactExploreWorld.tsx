import { contactExplorePhotosData } from "../../data/Contact/ContactData";
import Container from "../../layouts/Container";
import WavyBackdrop from "../../svg/WavyBackdrop";
import ContactExploreWorldContent from "./ContactExploreWorldContent";
import ContactExploreWorldImages from "./ContactExploreWorldImages";

const ContactExploreWorld = () => {
  return (
    <Container>
      <div className="relative z-10 p-[6.1538vw] lg:p-[4.1667vw] 2xl:p-[5.5556vw] bg-Grey-10 border border-Grey-15 rounded-xl overflow-hidden flex flex-col gap-[14.35897vw] md:gap-[6vw] lg:gap-5">
      <div className="absolute inset-0 -top-[20%] left-0 w-[250%] h-[120%] md:-top-[20%] md:left-0 md:w-[130%] md:h-[130%] object-center z-0 pointer-events-none">
        <WavyBackdrop />
      </div>
      <ContactExploreWorldImages photos={contactExplorePhotosData.photos} />

      <ContactExploreWorldContent
        White={contactExplorePhotosData.contactExploreEstateinData}
        mainImage={contactExplorePhotosData.titlePhoto}
      />
    </div>
    </Container>
  );
};

export default ContactExploreWorld;
