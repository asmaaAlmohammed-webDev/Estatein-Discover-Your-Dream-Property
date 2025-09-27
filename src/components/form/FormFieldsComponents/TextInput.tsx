import React from "react";
import FormLabel from "./FormLabel";

type IconType =
  | string
  | React.ReactElement
  | React.ComponentType<{ className?: string }>
  | React.ReactNode;

interface BaseTextField {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  label?: string;
  required?: boolean;
  icon?: IconType;
}

const renderIcon = (icon?: IconType, className?: string) => {
  if (!icon) return null;
  
  if (typeof icon === "string") {
    return <img src={icon} alt="" className={className} />;
  }
  
  if (typeof icon === "function") {
    const Icon = icon as React.ComponentType<{ className?: string }>;
    return <Icon className={className} />;
  }
  
  if (React.isValidElement(icon)) {
    const existingClassName = (icon.props as { className?: string })?.className;
    return React.cloneElement(icon, {
      className: [className, existingClassName]
        .filter(Boolean)
        .join(" "),
    } as React.HTMLAttributes<HTMLElement>);
  }
  
  // For ReactNode that's not a valid element (like null, string, number)
  return null;
};

const TextInput: React.FC<{ field: BaseTextField }> = ({ field }) => {
  return (
    <div className="flex flex-col gap-2.5 md:gap-3.5 xl:gap-4 font-medium w-full">
      <FormLabel id={field.id} label={field.label} required={field.required} />
      <div className="relative">
        <div className="flex items-center bg-Grey-10 border border-Grey-15 rounded-md xl:rounded-lg focus-within:border-Purple-60 transition-all duration-200">
          <input
            id={field.id}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            className="flex-1 bg-transparent text-White dark:placeholder:text-Grey-40 px-5 py-4 xl:py-6 text-sm/[20px] xl:text-lg/[20px] outline-none"
            required={field.required}
            aria-required={field.required}
            aria-describedby={field.label ? `${field.id}-label` : undefined}
          />
          {field.icon && (
            <div className="flex items-center justify-center px-4 xl:px-6">
              {renderIcon(
                field.icon,
                "w-5 h-5 xl:w-6 xl:h-6 text-White-90"
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextInput;
