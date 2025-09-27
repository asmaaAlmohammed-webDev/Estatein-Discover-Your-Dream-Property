import CardImage from "../../components/sharedComponents/CardImage";
import Header from "../../components/sharedComponents/Header";

import type { ContactHeroDataType } from "../../types/Contact/ContactType";

const ContactExploreWorldContent = ({
  White,
  mainImage,
}: {
  White: ContactHeroDataType;
  mainImage: string;
}) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 z-10">
      <div className="lg:my-auto pt-0 lg:pt-3">
        <Header title={White.title} description={White.description} withIcon />
      </div>

      <CardImage
        data-aos="zoom-out"
        src={mainImage}
        alt="main-image"
      />
    </section>
  );
};

export default ContactExploreWorldContent;
