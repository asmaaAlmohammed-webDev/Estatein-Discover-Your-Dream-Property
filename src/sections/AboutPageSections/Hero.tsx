import Header from "../../components/sharedComponents/Header";
import Statistics from "../../components/sharedComponents/statistics/Statistics";
import WavyBackdrop from "../../svg/WavyBackdrop";

const Hero = () => {
  const headline = "Our Journey";
  const description =
    "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.";
  const heroImage = "/assets/images/About/Hero-img.webp";

  return (
    <section className="px-[4.1025%] md:px-[5.5555%] xl:px-[8.4375%] min-h-screen pt-[108px] lg:pt-[77px] xl:pt-[99px] flex justify-between items-center max-lg:flex-col-reverse max-lg:gap-10">
      {/* Left Side of Hero */}
      <div className="w-full lg:w-[47.3057%] flex flex-col gap-10 lg:gap-12.5 xl:gap-20">
        <Header title={headline} description={description} withIcon />
        {/* Stats */}
        <Statistics />
      </div>
      {/* Right Side Hero*/}
      <div className="w-full lg:w-[47.3057%] relative overflow-hidden border border-Grey-15 bg-Grey-10 rounded-[12px] xl:min-h-[50.555vh] 2xl:h-[546px] 2xl:w-[755px] max-md:h-[44.3618vh] md:min-h-[68.9381vh]">
        {/* Background Image */}
        <div className="absolute inset-0 -top-[30%] -left-[35%] w-[155%] h-[155%] object-co object-center z-10 pointer-events-none">
          <WavyBackdrop />
        </div>
        {/*  Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-Grey-08/14 z-20" />

        {/* Foreground Image */}
        <img
          data-aos="fade-left"
          src={heroImage}
          alt="heroImageBuilding"
          className="absolute inset-0 w-full h-full object-contain object-bottom-right z-30"
        />
      </div>
    </section>
  );
};

export default Hero;
