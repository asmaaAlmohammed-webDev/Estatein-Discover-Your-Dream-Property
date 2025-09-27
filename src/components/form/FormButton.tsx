interface FormButtonProps {
  content: string;
  disabled?: boolean;
  className?: string;
}

const FormButton = ({ content, disabled = false, className = "" }: FormButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`px-8.5 py-3.5 lg:px-[2.36112vw] xl:px-11.5 xl:py-4.5 bg-Purple-60 text-white rounded-md xl:rounded-lg text-sm/[24px] xl:text-lg/[24px] font-medium transition-[background-position] duration-500 ease-in-out ${
        disabled 
          ? "opacity-50 cursor-not-allowed bg-Grey-30" 
          : "cursor-pointer hover:bg-gradient-to-br hover:from-40% hover:from-Purple-65/65 hover:via-50% hover:via-Purple-75 hover:to-70% hover:to-Purple-65/65 bg-[length:200%_200%] bg-[position:0%_0%] hover:bg-[position:100%_100%]"
      } ${className}`}
    >
      {content}
    </button>
  );
};

export default FormButton;
