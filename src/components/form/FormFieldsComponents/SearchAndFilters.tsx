// import React from "react";
// import type {
//   CTAButton,
//   SearchFilterSection,
//   SearchSection,
// } from "../../../types/Properties/PropertiesTypes";
// import SearchSelect from "./SearchSelect";

// interface Props {
//   searchData: SearchSection;
//   filterData: SearchFilterSection;
// }

// const SearchAndFilters: React.FC<Props> = ({ searchData, filterData }) => {
//   const { searchField, searchButton } = searchData;
//   const { formFields } = filterData;

// const renderButton = (btn: CTAButton) => (

//         <button
//         className="flex items-center text-sm lg:text-lg font-medium justify-center gap-2 w-fit lg:w-46 h-[63px] px-5 py-3.5 xl:px-6 xl:py-4.5 rounded-[10px] bg-Purple-60 text-white hover:bg-gradient-to-br 
//         hover:from-40% hover:from-Purple-65/65
//         hover:via-50% hover:via-Purple-75 
//         hover:to-70% hover:to-Purple-65/65
//         bg-[length:200%_200%] bg-[position:0%_0%]
//         transition-[background-position] duration-500 ease-in-out
//         hover:bg-[position:100%_100%]"
//     >    {btn.icon && (

//         <img
//           src={btn.icon.toString()}
//           alt="search icon"
//           className="w-5 h-5 lg:w-6 lg:h-6"
//         />
//       )}
//       <span className="min-w-max hidden lg:flex text-sm xl:text-lg font-medium ">
//         {btn.text}
//       </span>
//     </button>
//   );

//     return (
//         <div className="flex flex-col gap-y-5 lg:gap-y-0 ">
//             <div className=" mx-auto w-full lg:max-w-[81.45363%] ">
//                 <div className="relative w-full  h-[80px] xl:h-[103px]">
//                     <input
//                     type={searchField.type}
//                     id={searchField.id}
//                     placeholder={searchField.placeholder}
//                     className="pl-3.5 md:pl-5 xl:pl-6 w-full h-full text-base md:text-xl rounded-xl  lg:rounded-b-none border border-Grey-15 
//                     shadow-[0px_0px_0px_4px_var(--color-Grey-10)] lg:shadow-[0px_0px_0px_10px_var(--color-Grey-10)] bg-Grey-08 placeholder:text-Grey-60 focus:outline-none "
//           />
//           <div className="absolute top-1/2 right-[20px] transform -translate-y-1/2 ">
//             {renderButton(searchButton)}
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-5 gap-[10px] p-3.5 rounded-xl bg-Grey-10">
//         {formFields.map(
//           (field) =>
//             field.type === "select" && (
//               <SearchSelect key={field.id} field={field} />
//             )
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchAndFilters;
// SearchAndFilters.tsx
import React, { useState, useEffect } from "react";
import type {
  CTAButton,
  SearchFilterSection,
  SearchSection,
} from "../../../types/Properties/PropertiesTypes";
import SearchSelect from "./SearchSelect";
import { useSearch } from "../../../SearchContext";

interface Props {
  searchData: SearchSection;
  filterData: SearchFilterSection;
}

const SearchAndFilters: React.FC<Props> = ({ searchData, filterData }) => {
  const { searchField, searchButton } = searchData;
  const { formFields } = filterData;
  const { setSearchQuery, setFilter, performSearch,  searchQuery, filters } = useSearch();
  
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  const [localFilters, setLocalFilters] = useState<Record<string, string>>(filters);

  useEffect(() => {
    setLocalSearchQuery(searchQuery);
    setLocalFilters(filters);
  }, [searchQuery, filters]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchQuery(localSearchQuery);
    performSearch();
  };

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...localFilters, [key]: value };
    setLocalFilters(newFilters);
    setFilter(key, value);
  };

 

  const renderButton = (btn: CTAButton) => (
    <button
      onClick={handleSearchClick}
      className="flex items-center text-sm lg:text-lg font-medium justify-center gap-2 w-fit lg:w-46 h-[63px] px-5 py-3.5 xl:px-6 xl:py-4.5 rounded-[10px] bg-Purple-60 text-white hover:bg-gradient-to-br 
      hover:from-40% hover:from-Purple-65/65
      hover:via-50% hover:via-Purple-75 
      hover:to-70% hover:to-Purple-65/65
      bg-[length:200%_200%] bg-[position:0%_0%]
      transition-[background-position] duration-500 ease-in-out
      hover:bg-[position:100%_100%]"
    >
      {btn.icon && (
        <img
          src={btn.icon.toString()}
          alt="search icon"
          className="w-5 h-5 lg:w-6 lg:h-6"
        />
      )}
      <span className="min-w-max hidden lg:flex text-sm xl:text-lg font-medium ">
        {btn.text}
      </span>
    </button>
  );

  return (
    <div className="flex flex-col gap-y-5 lg:gap-y-0 " data-aos="zoom-in">
      <div className=" mx-auto w-full lg:max-w-[81.45363%] ">
        <div className="relative w-full  h-[80px] xl:h-[103px] z-40">
          <input
            type={searchField.type}
            id={searchField.id}
            placeholder={searchField.placeholder}
            value={localSearchQuery}
            onChange={handleSearchChange}
            className="pl-3.5 md:pl-5 xl:pl-6 w-full h-full text-base md:text-xl rounded-xl  lg:rounded-b-none border border-Grey-15 
            shadow-[0px_0px_0px_4px_var(--color-Grey-10)] lg:shadow-[0px_0px_0px_10px_var(--color-Grey-10)] bg-Grey-08 placeholder:text-Grey-60 focus:outline-none "
          />
          <div className="absolute top-1/2 right-[20px] transform -translate-y-1/2 ">
            {renderButton(searchButton)}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-[10px] p-3.5 rounded-xl bg-Grey-10">
        {formFields.map(
          (field) =>
            field.type === "select" && (
              <SearchSelect 
                key={field.id} 
                field={{
                  ...field,
                  value: localFilters[field.id] || ""
                }}
                onChange={(value) => handleFilterChange(field.id, value)}
              />
            )
        )}
      </div>
    </div>
  );
};

export default SearchAndFilters;