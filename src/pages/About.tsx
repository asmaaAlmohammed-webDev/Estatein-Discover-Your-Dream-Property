import {
  MeetEstateinTeamCardSectionData,
  NavigatingEstateinExperienceData,
  OurAchievementsSectionData,
  OurValuedClientsSectionData,
  OurValueSectionData,
} from "../data/About/AboutUsData";
import Hero from "../sections/AboutPageSections/Hero";
import OurClientsSection from "../sections/AboutPageSections/OurClientsSection";
import OurTeam from "../sections/AboutPageSections/OurTeam";
import OurValueSection from "../sections/AboutPageSections/OurValueSection";
import OurAchievementsSection from "../sections/AboutPageSections/OurAchievementsSection";
import HowItWorkSection from "../sections/AboutPageSections/HowItWorkSection";
const About = () => {
  return (
    <div className="space-y-20 md:space-y-30 xl:space-y-37.5">
      <Hero />
      <OurValueSection data={OurValueSectionData} />
      <OurAchievementsSection data={OurAchievementsSectionData} />
      <HowItWorkSection data={NavigatingEstateinExperienceData} />
      <OurTeam data={MeetEstateinTeamCardSectionData} />
      <OurClientsSection data={OurValuedClientsSectionData} />
    </div>
  );
};

export default About;
