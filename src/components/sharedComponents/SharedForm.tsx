import { Link } from "react-router-dom";
import SelectField from "../form/FormFieldsComponents/SelectField";
import TextareaField from "../form/FormFieldsComponents/TextareaField";
import TextInput from "../form/FormFieldsComponents/TextInput";
import { useState } from "react";
import FormButton from "../form/FormButton";
import CheckboxField from "../form/FormFieldsComponents/CheckboxField";
import SuccessMessage from "../kit/SuccessMessage";

// Base field types to match new form components
interface BaseField {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  label?: string;
  required?: boolean;
  icon?: React.ReactNode;
  options?: string[];
}

interface FormProps {
  data: BaseField[];
  areaText: BaseField;
  detailsForm?: boolean;
  propertiesForm?: boolean;
  // Optional items for checkbox group when propertiesForm is true
  checkboxItems?: Array<{ id: string; name: string; placeholder: string; icon?: React.ReactNode }>;
}

const SharedForm = ({
  data,
  areaText,
  detailsForm,
  propertiesForm,
  checkboxItems = [],
}: FormProps) => {
  const [checked, setChecked] = useState(false);
  const [checkboxValid, setCheckboxValid] = useState(true);
  const [showErrors, setShowErrors] = useState(false);
  const [showTermsError, setShowTermsError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show errors on first submission attempt
    setShowErrors(true);
    setShowTermsError(true);
    
    // Check if form is valid
    if (propertiesForm && !checkboxValid) {
      alert("Please fill in all required contact method fields.");
      return;
    }
    
    if (!checked) {
      alert("Please agree to the Terms of Use and Privacy Policy.");
      return;
    }
    
    // Form is valid, show success message
    setShowSuccess(true);
    
    // Reset form after successful submission
    setTimeout(() => {
      setChecked(false);
      setShowErrors(false);
      setShowTermsError(false);
      setShowSuccess(false);
    }, 1000);
  };

  // Check if form is ready for submission
  const isFormValid = checked && (propertiesForm ? checkboxValid : true);

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className={`rounded-xl p-5 md:p-10 border border-Grey-15 flex flex-col gap-5 ${
          detailsForm
            ? "lg:p-[2.77778vw] xl:p-12.5 md:gap-5 xl:gap-7.5"
            : propertiesForm
            ? "lg:gap-7.5 xl:gap-12.5 p-5 md:p-[3.47223vw] lg:p-[5.20834vw]"
            : "lg:p-20 xl:p-25 md:gap-7.5 xl:gap-12.5 "
        }`}
      >
        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            detailsForm
              ? "lg:grid-cols-2 md:gap-5 xl:gap-7.5"
              : propertiesForm
              ? "lg:grid-cols-4 lg:gap-[2.08334vw] xl:gap-[2.604167vw]"
              : "lg:grid-cols-3 md:gap-7.5 xl:gap-12.5"
          } gap-5`}
        >
          {data.map((item: BaseField) => {
            return item.options ? (
              <div key={item.id} className={`${item.id === "budget" && "md:col-span-2"}`}>
                <SelectField field={{ ...item, icon: item.icon || <></> }} />
              </div>
            ) : (
              <div
                key={item.id}
                className={`${item.id === "selected_property" && "md:col-span-2"}`}
              >
                <TextInput field={item} />
              </div>
            );
          })}
          {propertiesForm && (
            <CheckboxField 
              label="Preferred Contact Method" 
              items={checkboxItems} 
              onValidationChange={setCheckboxValid}
              showErrors={showErrors}
            />
          )}
        </div>
        <TextareaField field={areaText} />
        <div
          className={`flex flex-col lg:flex-row justify-between gap-5 lg:gap-1 w-full mt-2.5 ${
            detailsForm ? "md:mt-5" : "md:mt-0"
          }`}
        >
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex gap-1.5 xl:gap-2.5 items-center">
              <div className="relative w-6 h-6 xl:w-7 xl:h-7">
                {checked && (
                  <input
                    id="check-here"
                    type="checkbox"
                    checked={checked}
                    onChange={() => {
                      setChecked(!checked);
                      if (!checked) setShowTermsError(false);
                    }}
                    className="w-6 h-6 xl:w-7 xl:h-7 border border-Grey-15 accent-Grey-15 rounded-sm cursor-pointer"
                  />
                )}
                {checked === false && (
                  <span
                    onClick={() => {
                      setChecked(!checked);
                      if (!checked) setShowTermsError(false);
                    }}
                    className="absolute inset-0 w-6 h-6 xl:w-7 xl:h-7 border border-Grey-15 bg-Grey-10 rounded-sm cursor-pointer"
                  ></span>
                )}
              </div>
              <label
                onClick={() => {
                  setChecked(!checked);
                  if (!checked) setShowTermsError(false);
                }}
                className="text-sm/[150%] md:text-base/[150%] xl:text-lg/[150%] font-medium text-Grey-60 cursor-pointer"
              >
                I agree to the{" "}
                <Link to="/terms" className="underline text-Purple-60 hover:text-Purple-75 transition-colors">
                  Terms of Use
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="underline text-Purple-60 hover:text-Purple-75 transition-colors">
                  Privacy Policy
                </Link>
              </label>
            </div>
            {showTermsError && !checked && (
              <div className="text-red-500 text-xs ml-7 xl:ml-8">
                You must agree to the Terms of Use and Privacy Policy to continue.
              </div>
            )}
          </div>
          <FormButton 
            content="Send Your Message" 
            disabled={!isFormValid}
            className={!isFormValid ? "opacity-50 cursor-not-allowed" : ""}
          />
        </div>
      </form>

      {/* Success Message Modal */}
      <SuccessMessage
        isVisible={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Message Sent Successfully!"
        message="Thank you for your inquiry. We'll get back to you within 24 hours."
        autoClose={true}
        autoCloseDelay={4000}
      />
    </>
  );
};

export default SharedForm;
