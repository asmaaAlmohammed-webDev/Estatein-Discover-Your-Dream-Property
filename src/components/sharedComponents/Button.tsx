import { Link } from "react-router-dom";

const Button = ({
  content,
  className,
  withBorder,
  link = "/",
}: {
  content: string;
  className?: string;
  withBorder?: boolean;
  link?: string;
}) => {
  return (
    <button
      className={`text-sm xl:text-lg text-nowrap cursor-pointer
        px-3 py-2.5 xs:px-5 xs:py-3.5 xl:px-6 xl:py-4.5 rounded-lg xl:rounded-[10px]
        flex items-center justify-center font-medium hover:bg-gradient-to-br 
        hover:from-40% hover:from-Purple-65/65
        hover:via-50% dark:hover:via-Purple-75 hover:via-Purple-95 
        hover:to-70% hover:to-Purple-65/65
        bg-[length:200%_200%] bg-[position:0%_0%]
        transition-[background-position] duration-500 ease-in-out
        hover:bg-[position:100%_100%]
      ${withBorder ? "border border-Grey-15 text-Purple-75 hover:text-white" : "text-white "} ${className}`}
    >
      <Link to={link} className="relative z-10">
        {content}
      </Link>
    </button>
  );
};

export default Button;
