import React from "react";
import type { SearchFilterSection } from "../../../types/Properties/PropertiesTypes";
import SelectField from "../FormFieldsComponents/SelectField";

interface Props {
  data: SearchFilterSection;
}

const SearchDropDownComponent: React.FC<Props> = ({ data }) => {
  const { formFields } = data;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-[10px] mt-10 md:mt-4 p-3.5 rounded-[12px] bg-Grey-10">
      {formFields.map(
        (field) =>
          field.type === "select" && (
            <SelectField key={field.id} field={field} />
          )
      )}
    </div>
  );
};

export default SearchDropDownComponent;
