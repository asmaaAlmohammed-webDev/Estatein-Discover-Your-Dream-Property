import { Link } from "react-router-dom";
import PlusEmail from "../../../svg/PlusEmail";
import SendBtn from "../../../svg/SendBtn";
import Logo from "../Logo";
import type { FooterNavColumn } from "../../../types/Home/HomeTypes";
import StyledWrapper from "../../../svg/StyledWrapper";

function FooterColumn({
  title,
  links,
}: {
  title?: string;
  links?: { name: string; link: string }[];
}) {
  if (!title || !links) return null;
  return (
    <div className="flex flex-col justify-items-start gap-4 md:gap-6 xl:gap-7.5 w-full h-fit pb-5 border-b border-b-Grey-15 md:border-0">  
      <h3
        className="text-base md:text-lg xl:text-xl leading-6 font-medium
        relative tracking-[4px] overflow-hidden 
        dark:bg-[linear-gradient(90deg,#999,#fff,#999)] 
        bg-[linear-gradient(90deg,#703bf7,#a685fa)] 
        bg-repeat bg-[length:80%_100%]
        animate-[text-shine_5s_linear_infinite]
        [background-clip:text] [-webkit-background-clip:text] 
        text-transparent
        dark:hover:bg-[linear-gradient(90deg,#fff_80%,#f4f0fe)] dark:hover:drop-shadow-[0_0_2px_#a685fa,0_0_3px_#a685fa] 
        hover:drop-shadow-[0_0_5px_#fff] hover:animate-[text-shine_3s_linear] hover:bg-[linear-gradient(90deg,#703bf7,#a685fa)]
      "
      >
        {title}
      </h3>
      <ul className="space-y-2 md:space-y-4 xl:space-y-5">
        {links.map((item, idx) => (
          <li key={idx}>
            <Link
              to={item.link}
              className="group relative inline-block text-sm md:text-base xl:text-lg leading-6 font-medium
                          text-transparent bg-clip-text [-webkit-background-clip:text]
                          bg-White 
                          transition-all duration-500 ease-out
                          hover:bg-[linear-gradient(90deg,#946cf9,#a685fa)]
                          bg-[length:100%_100%] hover:bg-no-repeat
                        "
            >
              {item.name}
              <span
                className="absolute left-0 -bottom-1 h-[2px] w-0 rounded-l-full opacity-0
                 bg-[linear-gradient(90deg,#a685fa,#dbcefd80)]
                 dark:bg-[linear-gradient(90deg,#703bf7,#a685fa,#a685fa)]
                 transition-all duration-500 ease-out
                 group-hover:w-full group-hover:opacity-100
                 dark:shadow-[0_0_6px_#00f6ff,0_0_12px_#ff00ff]"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MainFooter({
  navigationColumn,
}: {
  navigationColumn: { left: FooterNavColumn[]; right: FooterNavColumn[] };
}) {
  const home = navigationColumn.left.find((col) => col.title === "Home");
  const about = navigationColumn.right.find((col) => col.title === "About Us");
  const services = navigationColumn.right.find(
    (col) => col.title === "Services"
  );
  const properties = navigationColumn.left.find(
    (col) => col.title === "Properties"
  );
  const contact = navigationColumn.left.find(
    (col) => col.title === "Contact Us"
  );
  return (
    <div className="relative flex flex-col lg:flex-row px-4 py-12.5 md:px-20 md:py-20 xl:px-40.5 xl:py-25 gap-12.5 md:gap-20">
      <div className={`absolute top-0 left-0 w-full h-full z-0 dark:hidden`}>
       <StyledWrapper/>
     </div>
       <div className="absolute top-0 left-0 w-full h-full z-10 bg-white/70 dark:hidden pointer-events-none"></div>

      {/* logo and form */}
      <div className="flex flex-col gap-5 md:gap-6 xl:gap-7.5 w-full lg:w-[26%] z-20">
        <Logo type="footer" />
        <form className="focus-within:border focus-within:border-Purple-75/30 relative group px-5 py-3.5 border border-Grey-15 bg-Grey-08 rounded-lg flex items-center justify-between gap-1.5 xl:gap-2.5">
          <span className="pointer-events-none absolute -inset-[2px] rounded-lg opacity-0 transition-opacity duration-300 group-focus-within:opacity-100">
            <span
              className="absolute inset-0 rounded-[inherit] blur-[5px]
                 bg-[linear-gradient(-145deg,#a685fa,#703bf7cc,#fa85eadd,#703bf7cc,#a685fa,#8254f8,#a685fa)]
                 bg-[length:200%_200%] animate-[gradient-move_10s_ease-out_infinite]"
            ></span>
            <span className="absolute inset-[2px] rounded-[inherit] bg-Grey-08"></span>
          </span>
          <div className="w-[90%] flex items-center gap-1.5 xl:gap-2.5 relative z-10">
            <div className="min-w-5 xl:min-w-6 aspect-square">
              <PlusEmail />
            </div>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full bg-transparent placeholder:text-sm xl:placeholder:text-lg placeholder:text-Grey-60 placeholder:font-medium leading-6 focus:outline-0"
            />
          </div>

          <button className="relative z-10 max-w-6 xl:max-w-7.5 max-h-6 xl:max-h-7.5 text-White hover:text-Purple-65">
            <SendBtn />
          </button>
        </form>
      </div>
      {/* content */}

      {/*  small screens */}
      <div className="flex flex-col gap-5 md:hidden z-20">
        {/* First Row */}
        <div className="w-full flex justify-between gap-5">
          <FooterColumn title={home?.title} links={home?.links} />
          <div className="w-px bg-Grey-15"></div>
          <FooterColumn title={about?.title} links={about?.links} />
        </div>

        {/* Second Row */}
        <div className="w-full flex justify-between gap-5">
          <div className="w-full flex flex-col gap-5">
            <FooterColumn title={properties?.title} links={properties?.links} />
            <div className="mt-6">
              <FooterColumn title={contact?.title} links={contact?.links} />
            </div>
          </div>
          <div className="w-px bg-Grey-15"></div>
          <FooterColumn title={services?.title} links={services?.links} />
        </div>
      </div>

      {/* medium and larg screens */}
      <div className="hidden md:grid md:grid-cols-5 md:gap-8 lg:w-[72%] z-20">
        <FooterColumn title={home?.title} links={home?.links} />
        <FooterColumn title={about?.title} links={about?.links} />
        <FooterColumn title={properties?.title} links={properties?.links} />
        <FooterColumn title={services?.title} links={services?.links} />
        <FooterColumn title={contact?.title} links={contact?.links} />
      </div>
    </div>
  );
}

export default MainFooter;
