
import { useState } from "react";
import LocationCard from "../../components/cards/LocationCard";
import { type CategoriesCardType, type ContactDiscoverLocationsFilterDataType } from "../../types/Contact/ContactType";
import Slider from "../../components/sharedComponents/Slider";

function OurOfficeFilters({ data }: { data: ContactDiscoverLocationsFilterDataType }) {
    const [activeTab, setActiveTab] = useState<string>("All");
    const filteredCards =
        activeTab === "All"
            ? data.categoriesCard
            : data.categoriesCard.filter(
                (item) => item.id.toLowerCase() === activeTab.toLowerCase()
            );

     const locationCards = filteredCards.map((item: CategoriesCardType, index) => (
        <div key={index} className="h-full">
            <LocationCard
                title={item.title}
                address={item.address}
                description={item.description}
                contactDetails={item.contactDetailes}
                btnLink={item.button.link}
                btnText={item.button.text}
            />
        </div>
    ));

    return (
        <div className="flex flex-col gap-7.5 md:gap-10 xl:gap-12.5">
            <div className="tabs flex gap-2.5 bg-Grey-10 rounded-lg xl:rounded-xl p-2.5 w-fit" data-aos="fade-up">
                {data.FilterOptions.map((option) => (
                    <button
                        key={option}
                        onClick={() => setActiveTab(option)}
                        className={`py-3 px-4 md:py-3.5 md:px-5 xl:py-4.5 xl:px-6 w-fit xs:min-w-25 md:min-w-28 xl:min-w-31 rounded-lg xl:rounded-[10px] border border-Grey-15 
                            transition-all duration-200 text-sm lg:text-lg font-medium whitespace-nowrap
                        ${activeTab === option
                                ? "bg-Grey-08 text-Purple-70"
                                : "bg-transparent hover:border-white text-White"
                            }`}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <div className="w-full">
                {filteredCards.length > 2 ? (
                    <Slider
                        cards={locationCards}
                        num_Of_Cards_in_sm_screen={1}
                        num_Of_Cards_in_md_screen={1}
                        num_Of_Cards_in_xl_screen={2}
                        gap_cards="gap-6"
                    />
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {locationCards}
                    </div>
                )}
            </div>
        </div>
    )
}

export default OurOfficeFilters