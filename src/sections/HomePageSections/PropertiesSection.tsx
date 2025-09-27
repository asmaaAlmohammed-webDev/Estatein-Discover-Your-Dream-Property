import PropertiesCard from "../../components/cards/PropertiesCard";
import Header from "../../components/sharedComponents/Header";
import Slider from "../../components/sharedComponents/Slider";
import Container from "../../layouts/Container";
import type { FeaturedPropertiesSectionType } from "../../types/Home/HomeTypes";

function PropertiesSection({ data }: { data: FeaturedPropertiesSectionType }) {
  return (
    <Container>
      <Header
        hash="properties"
        title={data.headline}
        description={data.description}
        withIcon
        withBtn
        btnContent={data.button.text}
        link={data.button.link}
      />
      <Slider
        withBtn
        btnContent={data.button.text}
        link={data.button.link}
        cards={data.properties.map((property) => (
          <PropertiesCard
            image={property.image}
            title={property.title}
            fullDescription={property.description}
            price={property.price}
            details={property.details}
            showInfo={true}
            btnLink={property.button.link}
            btnText={property.button.text}
          />
        ))}
      />
    </Container>
  );
}

export default PropertiesSection;
