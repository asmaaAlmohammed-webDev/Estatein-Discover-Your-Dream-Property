// import React, { useEffect, useRef, useState, type ReactNode } from "react";
// import DownArrow from "../../../svg/DownArrow";

// interface BaseSelectField {
//     id: string;
//     label?: string;
//     type: string;
//     name: string;
//     placeholder: string;
//     required?: boolean;
//     options?: string[];
//     icon?: ReactNode;
//     }

    
//     const SearchSelect: React.FC<{ field: BaseSelectField }> = ({ field }) => {
//     const [selected, setSelected] = useState<string>("");
//     const [showList, setShowList] = useState<boolean>(false);
//     const selectRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//         if (
//             selectRef.current &&
//             !selectRef.current.contains(event.target as Node)
//         ) {
//             setShowList(false);
//         }
//         };

//         document.addEventListener("click", handleClickOutside);
//         return () => {
//         document.removeEventListener("click", handleClickOutside);
//         };
//     }, []);

//     const toggleList = () => setShowList((prev) => !prev);

//     return (
//         <div className="flex flex-col gap-2.5 md:gap-3.5 xl:gap-4 w-full relative">
//         <div ref={selectRef} className="relative">
//             <div className="flex py-3 px-3.5 xl:p-5 bg-Grey-08 rounded-xl border border-Grey-15 max-w-full">
//             <div className="flex gap-2.5">
//                 <div>
//                     {field.icon}
//                 </div>
//                 <div className="pl-2.5 border-l border-Grey-15">
//                     <input
//                         type={field.type}
//                         id={field.id}
//                         name={field.name}
//                         value={selected}
//                         placeholder={field.placeholder}
//                         readOnly
//                         onClick={toggleList}
//                         className={`dark:placeholder:text-Grey-40  rounded-md xl:rounded-lg  text-sm xl:text-lg outline-none transition-all duration-200 cursor-pointer ${
//                         showList ? "border-Purple-60" : ""
//                         }`}
//                         required={field.required}
//                         aria-haspopup="listbox"
//                         aria-expanded={showList}
//                     />
//                 </div>
//             </div>
//                 <button
//                 type="button"
//                 onClick={toggleList}
//                 aria-label="Open select options"
//                 className=" absolute top-1/2 -translate-y-1/2 right-4 xl:right-6 w-7 h-7 xl:w-8 xl:h-8 flex items-center justify-center text-White cursor-pointer rounded-full  bg-Grey-10"
//                 >
//                 <DownArrow />
//                 </button>
            
//             </div>
//             {showList && (
//             <div className="absolute top-full left-0 right-0 mt-1 bg-Grey-10 border border-Grey-15 rounded-md xl:rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
//                 {field.options?.map((option, index) => (
//                 <button
//                     key={option}
//                     type="button"
//                     onClick={() => {
//                     setSelected(option);
//                     setShowList(false);
//                     }}
//                     className="w-full px-5 py-3 xl:py-4 text-left text-sm/[20px] xl:text-lg/[20px] text-White hover:bg-Grey-15 transition-colors duration-200 first:rounded-t-md xl:first:rounded-t-lg last:rounded-b-md xl:last:rounded-b-lg"
//                 >
//                     {option}
//                 </button>
//                 ))}
//             </div>
//             )}
//         </div>
//         </div>
//     );
// };

// export default SearchSelect;
// SearchSelect.tsx
import React, { useEffect, useRef, useState, type ReactNode } from "react";
import DownArrow from "../../../svg/DownArrow";

interface BaseSelectField {
    id: string;
    label?: string;
    type: string;
    name: string;
    placeholder: string;
    required?: boolean;
    options?: string[];
    icon?: ReactNode;
    value?: string; 
}

interface SearchSelectProps {
    field: BaseSelectField;
    onChange?: (value: string) => void; 
}

const SearchSelect: React.FC<SearchSelectProps> = ({ field, onChange }) => {
    const [selected, setSelected] = useState<string>(field.value || "");
    const [showList, setShowList] = useState<boolean>(false);
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setSelected(field.value || "");
    }, [field.value]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                selectRef.current &&
                !selectRef.current.contains(event.target as Node)
            ) {
                setShowList(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const toggleList = () => setShowList((prev) => !prev);

    const handleSelect = (option: string) => {
        setSelected(option);
        setShowList(false);
        
        if (onChange) {
            onChange(option);
        }
    };

    return (
        <div className="flex flex-col gap-2.5 md:gap-3.5 xl:gap-4 w-full relative">
            <div ref={selectRef} className="relative">
                <div className="flex py-3 px-3.5 xl:p-5 bg-Grey-08 rounded-xl border border-Grey-15 max-w-full">
                    <div className="flex gap-2.5">
                        <div>
                            {field.icon}
                        </div>
                        <div className="pl-2.5 border-l border-Grey-15">
                            <input
                                type={field.type}
                                id={field.id}
                                name={field.name}
                                value={selected}
                                placeholder={field.placeholder}
                                readOnly
                                onClick={toggleList}
                                className={`dark:placeholder:text-Grey-40  rounded-md xl:rounded-lg  text-sm xl:text-lg outline-none transition-all duration-200 cursor-pointer ${
                                    showList ? "border-Purple-60" : ""
                                }`}
                                required={field.required}
                                aria-haspopup="listbox"
                                aria-expanded={showList}
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={toggleList}
                        aria-label="Open select options"
                        className=" absolute top-1/2 -translate-y-1/2 right-4 xl:right-6 w-7 h-7 xl:w-8 xl:h-8 flex items-center justify-center text-White cursor-pointer rounded-full  bg-Grey-10"
                    >
                        <DownArrow />
                    </button>
                </div>
                {showList && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-Grey-10 border border-Grey-15 rounded-md xl:rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                        {field.options?.map((option) => (
                            <button
                                key={option}
                                type="button"
                                onClick={() => handleSelect(option)}
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

export default SearchSelect;