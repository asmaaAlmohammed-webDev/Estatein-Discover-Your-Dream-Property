import CardImage from "../../components/sharedComponents/CardImage";
import type { ContactExplorePhotosType } from "../../types/Contact/ContactType";

const ContactExploreWorldImages = ({
  photos,
}: {
  photos: ContactExplorePhotosType[];
}) => {
  return (
    <section className="grid grid-cols-4 gap-2.5 lg:gap-5 z-10">
      {photos.map((photo, index) => (
        <CardImage
          key={photo.id}
          src={photo.image}
          alt={photo.id}
          data-aos="zoom-out"
          data-aos-delay={index * 100}
          className={index >= photos.length - 2 ? "col-span-1" : "col-span-2"}
          height="h-[18.3334vw] lg:h-[13.298612vw] 2xl:h-[12.29167vw]"
        />
      ))}
    </section>
  );
};

export default ContactExploreWorldImages;
