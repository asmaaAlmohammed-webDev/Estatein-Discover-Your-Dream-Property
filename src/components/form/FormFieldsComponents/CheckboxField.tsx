import { useState, useEffect } from "react";
import FormLabel from "./FormLabel";

interface CheckboxItem {
  id: string;
  name: string;
  placeholder: string;
  icon?: React.ReactNode;
}

interface CheckboxFieldProps {
  label?: string;
  items?: CheckboxItem[];
  onValidationChange?: (isValid: boolean) => void;
  showErrors?: boolean;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({ 
  label, 
  items = [], 
  onValidationChange,
  showErrors = false
}) => {
  // Initialize with first item checked by default
  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    if (items.length > 0) {
      initial[items[0].id] = true; // Pre-check the first item
    }
    return initial;
  });

  // Track input values for validation
  const [inputValues, setInputValues] = useState<Record<string, string>>({});

  const handleCheckboxChange = (id: string) => {
    setChecked((prevChecked) => {
      const newChecked = {
        ...prevChecked,
        [id]: !prevChecked[id],
      };
      
      // Count how many are checked
      const checkedCount = Object.values(newChecked).filter(Boolean).length;
      
      // If trying to uncheck and it's the last checked item, prevent it
      if (checkedCount === 0) {
        return prevChecked; // Keep the previous state
      }
      
      return newChecked;
    });
  };

  const handleInputChange = (id: string, value: string) => {
    setInputValues(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Validate that all checked items have values
  const validateInputs = () => {
    const checkedItems = Object.keys(checked).filter(id => checked[id]);
    const hasValidInputs = checkedItems.every(id => {
      const value = inputValues[id] || '';
      return value.trim().length > 0;
    });
    
    // Call parent validation callback
    onValidationChange?.(hasValidInputs);
    return hasValidInputs;
  };

  // Update checked state when items change
  useEffect(() => {
    if (items.length > 0 && Object.keys(checked).length === 0) {
      setChecked({ [items[0].id]: true });
    }
  }, [items]);

  // Validate on input changes
  useEffect(() => {
    validateInputs();
  }, [inputValues, checked]);

  return (
    <div className="flex flex-col gap-2.5 md:gap-3.5 xl:gap-4 md:col-span-2">
      {label && <FormLabel label={label} required={true} />}

      <div className="flex flex-col md:flex-row gap-4">
        {items.map((item) => (
          <div key={item.id} className="relative w-full">
            <div className="w-4 h-4 xl:w-6 xl:h-6 text-White absolute top-1/2 -translate-y-1/2 left-5 xl:left-6 flex items-center justify-center">
              {item.icon}
            </div>
            <input
              type="text"
              aria-disabled={!checked[item.id]}
              disabled={!checked[item.id]}
              placeholder={item.placeholder}
              value={inputValues[item.id] || ''}
              onChange={(e) => handleInputChange(item.id, e.target.value)}
              required={checked[item.id]}
              className={`w-full text-sm/[20px] xl:text-lg/[20px] font-medium focus:outline-none pl-11.5 xl:pl-15 pr-7.5 xl:pr-10 py-4 xl:py-6 bg-Grey-10 text-White border rounded-md xl:rounded-lg dark:placeholder:text-Grey-40 focus:border-Purple-60 transition-colors ${
                checked[item.id] 
                  ? 'border-Grey-15' 
                  : 'border-Grey-15 opacity-50'
              } ${
                showErrors && checked[item.id] && !inputValues[item.id]?.trim() 
                  ? 'border-red-500 focus:border-red-500' 
                  : ''
              }`}
            />
            <input
              type="checkbox"
              id={item.id}
              name={item.name}
              className="w-2.5 h-2.5 xl:w-4 xl:h-4 appearance-none border rounded-full bg-transparent border-Purple-60 checked:bg-Purple-60 focus:outline-none transition duration-200 cursor-pointer absolute right-5 xl:right-6 top-1/2 -translate-y-1/2"
              checked={!!checked[item.id]}
              onChange={() => handleCheckboxChange(item.id)}
              aria-checked={!!checked[item.id]}
            />
            {showErrors && checked[item.id] && !inputValues[item.id]?.trim() && (
              <div className="text-red-500 text-xs mt-1 ml-4">
                This field is required
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxField;
