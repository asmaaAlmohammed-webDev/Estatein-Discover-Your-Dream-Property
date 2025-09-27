import React from "react";
import { useSearch } from "../../../SearchContext";
import Container from "../../../layouts/Container";
import PropertiesCard from "../../cards/PropertiesCard";
import Slider from "../../sharedComponents/Slider";

const SearchResults: React.FC = () => {
  const { searchResults, hasSearched, clearFilters } = useSearch();

  if (!hasSearched) {
    return null;
  }

  const resultCards = searchResults.map(property => (
    <div key={property.id} className="h-full">
      <PropertiesCard
        showInfo={true}
        details={property.details}
        fullDescription={property.fullDescription}
        image={property.image}
        discoverDescription={property.discoverDescription}
        price={property.price}
        title={property.title}
        btnText={property.btnText}
        btnLink={property.btnLink}
      />
    </div>
  ));

  return (
    <Container className="my-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-White">
          Search Result {searchResults.length >= 0 ? `(${searchResults.length})` : ''}
        </h2>
        <button
          onClick={clearFilters}
          className="text-sm xl:text-lg text-nowrap cursor-pointer px-3 py-2.5 xs:px-5 xs:py-3.5 xl:px-6 xl:py-4.5 rounded-lg xl:rounded-[10px] flex items-center justify-center font-medium bg-Purple-60 hover:bg-gradient-to-br hover:from-40% hover:from-Purple-65/65 hover:via-50% dark:hover:via-Purple-75 hover:via-Purple-95 hover:to-70% hover:to-Purple-65/65 bg-[length:200%_200%] bg-[position:0%_0%] transition-[background-position] duration-500 ease-in-out hover:bg-[position:100%_100%] text-white"
        >
          Clear Filters
        </button>
      </div>
      
      {searchResults.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-Grey-60 text-lg">No Data Found</p>
        </div>
      ) : (
        searchResults.length > 1 ? (
          <Slider
            cards={resultCards}
            num_Of_Cards_in_sm_screen={1}
            num_Of_Cards_in_md_screen={2}
            num_Of_Cards_in_xl_screen={3}
            gap_cards="gap-6"
          />
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {resultCards}
          </div>
        )
      )}
    </Container>
  );
};

export default SearchResults;