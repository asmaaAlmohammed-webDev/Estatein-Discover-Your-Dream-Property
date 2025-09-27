import React, { useEffect, useRef, useState, type ReactNode } from "react";
import DownArrow from "../../../svg/DownArrow";
import FormLabel from "./FormLabel";

interface BaseSelectField {
  id: string;
  label?: string;
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
  options?: string[];
  icon:ReactNode;
}

const SelectField: React.FC<{ field: BaseSelectField }> = ({ field }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (

    <div className="flex flex-col gap-2.5 md:gap-3.5 xl:gap-4 w-full">
      <FormLabel id={field.id} label={field.label} required={field.required} />
      <div className="relative" ref={dropdownRef}>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-Grey-10 text-White placeholder:text-Grey-40 border border-Grey-15 rounded-md xl:rounded-lg px-5 py-4 xl:py-6 text-sm/[20px] xl:text-lg/[20px] outline-none focus:border-Purple-60 transition-all duration-200 flex items-center justify-between"
        >
          <span className={selectedOption ? "text-White" : "dark:text-Grey-40 text-[#8f88a4]"}>
            {selectedOption || field.placeholder}
          </span>
          <div className="flex items-center gap-2">
            <DownArrow className="w-4 h-4 xl:w-5 xl:h-5 text-White-90 transition-transform duration-200" />
          </div>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-Grey-10 border border-Grey-15 rounded-md xl:rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
            {field.options?.map((option, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleOptionSelect(option)}
                className="w-full px-5 py-3 xl:py-4 text-left text-sm/[20px] xl:text-lg/[20px] text-White hover:bg-Grey-15 transition-colors duration-200 first:rounded-t-md xl:first:rounded-t-lg last:rounded-b-md xl:last:rounded-b-lg"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


export default SelectField;

