// import SearchAndFilters from "../../components/form/FormFieldsComponents/SearchAndFilters"
// import { propertiesData } from "../../data/Properties/PropertisData"
// import Container from "../../layouts/Container"


// function SearchAndFiltersSection() {
//     return (
//         <Container className="mt-[-40px] lg:mt-[-120px] xl:mt-[-150px] lg:translate-y-[-26.1538%]">
//             <SearchAndFilters searchData={propertiesData.searchSection} filterData={propertiesData.searchFilterSection}/>
//         </Container>
//     )
// }

// export default SearchAndFiltersSection
import SearchAndFilters from "../../components/form/FormFieldsComponents/SearchAndFilters"
import SearchResults from "../../components/form/FormFieldsComponents/SearchResults";
import { propertiesData } from "../../data/Properties/PropertisData"
import Container from "../../layouts/Container"
import { SearchProvider } from "../../SearchContext";

const allProperties = propertiesData.propertySliderSection.cards.map(prop => ({
  id: prop.id,
  title: prop.mainTitle,
  price: prop.price,
  fullDescription: prop.description,
  image: prop.image,
  discoverDescription: prop.smallTitle,

  location: prop.smallTitle.includes("Coastal") ? "Coastal" :
    prop.smallTitle.includes("Urban") ? "Urban" : "Countryside",
  propertyType: prop.mainTitle.includes("Villa") ? "Villa" :
    prop.mainTitle.includes("Apartment") ? "Apartment" : "Cottage",


  bedrooms: prop.mainTitle.includes("Villa") ? 4 :
    prop.mainTitle.includes("Apartment") ? 2 : 3,
  bathrooms: prop.mainTitle.includes("Villa") ? 3 :
    prop.mainTitle.includes("Apartment") ? 2 : 2,
  size: prop.mainTitle.includes("Villa") ? 2500 :
    prop.mainTitle.includes("Apartment") ? 1200 : 1800,
  buildYear: prop.mainTitle.includes("Villa") ? 2022 :
    prop.mainTitle.includes("Apartment") ? 2018 : 2020,

  details: [
    { label: `${prop.mainTitle.includes("Villa") ? 4 : prop.mainTitle.includes("Apartment") ? 2 : 3} Bedrooms` },
    { label: `${prop.mainTitle.includes("Villa") ? 3 : prop.mainTitle.includes("Apartment") ? 2 : 2} Bathrooms` },
    { label: `${prop.mainTitle.includes("Villa") ? 2500 : prop.mainTitle.includes("Apartment") ? 1200 : 1800} sqft` }
  ],
  btnText: prop.button.text,
  btnLink: prop.button.link
}));

function SearchAndFiltersSection() {
  return (
    <SearchProvider allProperties={allProperties}>
      <Container className="mt-[-40px] lg:mt-[-120px] xl:mt-[-150px] lg:translate-y-[-26.1538%] relative z-30">
        <SearchAndFilters
          searchData={propertiesData.searchSection}
          filterData={propertiesData.searchFilterSection}
        />
      </Container>
      <div className="translate-y-[-5%] md:translate-y-[-10%] lg:translate-y-[-15%] mb-0 relative z-30">

        <SearchResults />
      </div>
    </SearchProvider>
  )
}

export default SearchAndFiltersSection