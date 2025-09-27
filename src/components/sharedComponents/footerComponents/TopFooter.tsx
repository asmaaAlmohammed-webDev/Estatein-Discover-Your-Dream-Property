import { useSelector } from "react-redux";
import FooterImg from "../../../svg/FooterImg";
import type { CtaSectionType } from "../../../types/Home/HomeTypes";
import Button from "../Button";
import Header from "../Header";

function TopFooter({ data }: { data: CtaSectionType }) {
  const darkMode = useSelector(
    (state: { theme: { darkMode: boolean } }) => state.theme.darkMode
  );
  const hoverColor = darkMode ? "#DBCEFD" : "#703bf7aa";
  const strokeHoverColor = darkMode ? "#FBFAFF" : "#dbcefd";
  const glowSize = 3;
  const neonShadow = darkMode
                   ? `drop-shadow(0 0 ${glowSize / 2}px #A685FA)
                      drop-shadow(0 0 ${glowSize}px #703BF7)
                      drop-shadow(0 0 ${glowSize * 1.5}px #DBCEFD)`
                   : `drop-shadow(0 0 ${glowSize * 2}px #703bf7aa)
                      drop-shadow(0 0 ${glowSize}px #ede7fe)
                      drop-shadow(0 0 ${glowSize * 2.5}px #703bf7aa)`;
  return (
    <div className="relative w-full flex flex-col md:flex-row md:items-center px-4 py-12.5 md:px-20 md:py-15 xl:px-40.5 xl:py-25 border-t border-b border-t-Grey-15 border-b-Grey-15 gap-7.5 md:gap-37.5 xl:gap-50 overflow-hidden dark:bg-Grey-08 bg-Purple-95 ">
      <div className="absolute z-0 right-0 bottom-0 text-Purple-90/50 dark:text-Grey-10">
        <FooterImg hoverColor={hoverColor} strokeHoverColor={strokeHoverColor} neonShadow={neonShadow} />
      </div>
      <Header
        title={data.headline}
        description={data.description}
        gap="gap-1.5"
        className="z-1"
      />
      <Button
        content="Explore Properties"
        className="bg-Purple-60 z-1"
        link="/properties"
      />
      <div className="absolute z-0 -left-[100%] xs:-left-[110%] md:left-0 -top-[120%] xs:-top-[75%] md:top-0 md:bottom-0  md:rotate-y-180 md:rotate-x-0 text-Purple-90/50 dark:text-Grey-10">
        <FooterImg hoverColor={hoverColor} strokeHoverColor={strokeHoverColor} neonShadow={neonShadow} />
      </div>
    </div>
  );
}

export default TopFooter;
