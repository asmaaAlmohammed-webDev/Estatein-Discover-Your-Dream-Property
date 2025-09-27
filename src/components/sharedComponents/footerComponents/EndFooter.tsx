import { Link } from "react-router-dom";
import type { EndFooterType } from "../../../types/Home/HomeTypes";

function EndFooter({ endFooterData }: { endFooterData: EndFooterType }) {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between gap-5 px-4 py-5 md:px-20 md:py-3 xl:px-40.5 xl:py-7.5 border-t border-t-Grey-15 w-full dark:bg-Grey-08 bg-Purple-95">
      <div
        className="flex flex-col md:flex-row md:justify-between items-center justify-center gap-2.5 md:gap-5 xl:gap-9.5 py-2.5
         text-sm xl:text-[18px] font-medium leading-6 text-White"
      >
        <span>{endFooterData.copyright}</span>
          <Link
            to={"/terms"}
            className={`underline text-Purple-60 hover:text-Purple-75`}
          >
            {"Terms & Conditions"}
          </Link>
      </div>
      <div className="flex items-center justify-center gap-2">
        {endFooterData.socialLinks.map((icon, index) => (
          <div className="relative group">
            <div
              className={`absolute z-10 w-fit h-fit px-2 py-1 rounded-full text-white text-xs xl:text-sm -top-9 left-1/2 translate-x-[-50%] opacity-0 transition-all ease-in-out duration-300
              ${
                icon.name == "Facebook"
                  ? "bg-[#0035bb] group-hover:opacity-100 group-hover:-top-3/4"
                  : icon.name == "LinkedIn"
                  ? "bg-[#0274b3] group-hover:opacity-100 group-hover:-top-3/4"
                  : icon.name == "Twitter"
                  ? "bg-[#1c96e8] group-hover:opacity-100 group-hover:-top-3/4"
                  : icon.name == "YouTube"
                  ? "bg-[#ff0000] group-hover:opacity-100 group-hover:-top-3/4"
                  : "bg-[#00ff00] group-hover:top-0"
              }
              `}
            >
              {icon.name}
            </div>
            <Link
              to={icon.link}
              key={index}
              className={`relative flex items-center justify-center group-hover:text-white text-White w-15 h-15 p-5 md:w-10 md:h-10 md:p-2.5 xl:w-13.5 xl:h-13.5 xl:p-3.5 bg-Grey-08 rounded-full
              group overflow-hidden
              `}
            >
              {icon.icon}
              <div
                className={`absolute z-0 w-full h-full top-full transition-all ease-in-out duration-300 
              ${
                icon.name == "Facebook"
                  ? "bg-[#0035bb] group-hover:top-0"
                  : icon.name == "LinkedIn"
                  ? "bg-[#0274b3] group-hover:top-0"
                  : icon.name == "Twitter"
                  ? "bg-[#1c96e8] group-hover:top-0"
                  : icon.name == "YouTube"
                  ? "bg-[#ff0000] group-hover:top-0"
                  : "bg-[#00ff00] group-hover:top-0"
              }`}
              ></div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EndFooter;
