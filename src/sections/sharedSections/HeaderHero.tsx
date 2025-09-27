import Container from "../../layouts/Container";
import Header from "../../components/sharedComponents/Header";
import StyledWrapper from "../../svg/StyledWrapper";

interface HeaderHeroProps {
  title: string;
  description: string;
}

const HeaderHero = ({ title, description }: HeaderHeroProps) => {
  return (
    <Container
      className="pt-[68px] lg:pt-[77px] xl:pt-[99px] relative
    dark:bg-[linear-gradient(95.93deg,var(--color-Grey-15)_-26.82%,transparent_40.46%)]"
    >
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-white/50 dark:hidden pointer-events-none"></div>
      <div className={`absolute top-0 left-0 w-full h-full z-0 dark:hidden`}>
       <StyledWrapper gradient={"bg-[linear-gradient(-95.93deg,#d5c3ff,#d5c3ff,#703bf7)]"}/>
     </div>
      <Header className="z-20 py-12.5 lg:py-25 xl:pt-37.5 xl:pb-25 w-full lg:w-[85.0877%] m-0" title={title} description={description} />
    </Container>
  );
};

export default HeaderHero;
