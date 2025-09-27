const FormLabel = ({ id, label }: { id?: string; label?: string; required?: boolean }) => {
  return (
    <label
      htmlFor={id}
      className="text-White font-semibold text-base/[150%] xl:text-xl/[150%]"
    >
      {label}
    </label>
  );
};

export default FormLabel;
