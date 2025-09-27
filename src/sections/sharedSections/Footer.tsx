import EndFooter from "../../components/sharedComponents/footerComponents/EndFooter";
import MainFooter from "../../components/sharedComponents/footerComponents/MainFooter";
import TopFooter from "../../components/sharedComponents/footerComponents/TopFooter";
import { ctaSectionData, endFooterData, footerLayout } from "../../data/Home/HomeData";

const Footer = () => {
  return (
    <footer className="mt-20 md:mt-30 xl:mt-37.5">
      <TopFooter data={ctaSectionData}/>
      <MainFooter  navigationColumn={footerLayout}/>
      <EndFooter endFooterData={endFooterData}/>
    </footer>
  );
};

export default Footer;