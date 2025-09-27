import React from "react";
import type {
  CTAButton,
  SearchSection,
} from "../../../types/Properties/PropertiesTypes";

interface Props {
  data: SearchSection;
}

const SearchFild: React.FC<Props> = ({ data }) => {
  const { searchField, searchButton } = data;

  const renderButton = (btn: CTAButton) => (
    <button className="flex items-center text-sm lg:text-lg font-medium justify-center gap-2 w-fit lg:w-46 h-[63px] px-[24px] py-[18px] rounded-[10px] bg-Purple-60 text-white hover:bg-Purple-75 transition">
      {btn.icon && (
        <img
          src={btn.icon.toString()}
          alt="search icon"
          className="w-5 h-5 lg:w-6 lg:h-6"
        />
      )}
      <span className="hidden md:flex text-sm font-medium">{btn.text}</span>
    </button>
  );

  return (
    <div className=" px-4 sm:px-6 md:px-20 lg:px-[148px] mx-auto py-4 w-full max-w-[1596px] h-[103px]">
      <div className="relative w-full h-[103px]">
        <input
          type={searchField.type}
          id={searchField.id}
          placeholder={searchField.placeholder}
          className="w-full h-full text-base md:text-xl  px-[24px] py-[20px] rounded-[12px]  md:rounded-bl-[0px] md:rounded-br-[0px] border border-[#262626] shadow-[0px_0px_0px_10px_#191919] bg-[#0E0E0E] text-white placeholder:text-gray-400 focus:outline-none "
        />
        <div className="absolute top-1/2 right-[20px] transform -translate-y-1/2">
          {renderButton(searchButton)}
        </div>
      </div>
    </div>
    
);

};

export default SearchFild;
