import Header from "../../components/sharedComponents/Header";
import {
  contactDiscoverLocationsData,
  contactDiscoverLocationsFilterData,
} from "../../data/Contact/ContactData";

import Container from "../../layouts/Container";
import OurOfficeFilters from "./OurOfficeFilters";

const OurOfficeSection = () => {
  return (
    <Container>
      <Header
        hash="contact-offices"
        title={contactDiscoverLocationsData.title}
        description={contactDiscoverLocationsData.description}
      />
      <OurOfficeFilters data={contactDiscoverLocationsFilterData}/>
    </Container>
  );
};

export default OurOfficeSection;
