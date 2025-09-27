import Statistics from "../../components/sharedComponents/statistics/Statistics";
import Button from "../../components/sharedComponents/Button";
import HeroArrowIcon from "../../components/sharedComponents/HeroArrowIcon";
import WavyBackdrop from "../../svg/WavyBackdrop";
import { HERO_PATH } from "../../svg/Paths";

const Hero = () => {
  const description =
    "Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.";
  const headline = "Discover Your Dream Property with Estatein";
  const heroImage = "/assets/images/Home/heroBuilding.webp";

  return (
    <section id={'hero'} className="px-[4.1025%] md:px-[5.5555%] xl:px-[8.4375%] min-h-screen max-lg:gap-14 pt-[108px] lg:pt-[77px] xl:pt-[99px] flex justify-between items-center max-lg:flex-col-reverse lg:pr-0 xl:pr-0">
      {/* Left Content */}
      <div className="h-full w-full max-lg:mb-10 lg:w-[43.1171%] flex flex-col gap-10 lg:gap-12.5 xl:gap-15">
        <div className="flex flex-col gap-4 lg:gap-6">
          <h2 className="text-2xl lg:text-[46px] xl:text-[60px] text-White font-semibold leading-[120%] tracking-[0]" data-aos="fade-up">
            {headline}
          </h2>
          <p className="font-medium text-[18px] text-Grey-60 leading-[150%] tracking-[0] lg:text-lg" data-aos="fade-up">
            {description}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col lg:flex-row gap-4">
          <Button content="Learn More" withBorder className="text-White" link="/about"/>
          <Button content="Browse Properties" className="bg-Purple-60 text-white" link="/properties"/>
        </div>

        {/* Stats */}
        <Statistics />
      </div>

      {/* Right Image */}
      <div className="relative lg:w-[52.3321%] w-full max-lg:h-[44.3618vh] max-lg:border border-Grey-15 max-lg:rounded-xl self-stretch bg-Grey-10">
        {/* Clipping wrapper for images */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Background Image - cover */}
          <div className="absolute inset-0 w-[200%] h-[200%] -top-[25%] -left-[50%] object-cover z-10">
            <WavyBackdrop paths={HERO_PATH} />
          </div>
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 z-20 pointer-events-none max-lg:rounded-tr-xl dark:bg-[linear-gradient(238.21deg,#2A213F_8.76%,rgba(25,25,25,0)_50.09%)]
                      bg-[linear-gradient(238.21deg,#703bf790_8.76%,rgba(25,25,25,0)_50.09%)]"
          ></div>

          {/* Foreground Image - contain */}
          <img
            data-aos="fade-up"
            src={heroImage}
            alt="hero"
            className="absolute left-1/2 bottom-0 translate-x-[-50%] object-bottom inset-0 w-full h-full object-contain z-30"
          />
        </div>

        {/* Center Circle in middle of the section - rotate animation */}
        <div className="absolute z-40 left-0 bottom-[-40px] lg:translate-x-[-50%] lg:top-[95px] xl:top-[144px]" data-aos="fade-down">
          <HeroArrowIcon />
        </div>
      </div>
    </section>
  );
};

export default Hero;