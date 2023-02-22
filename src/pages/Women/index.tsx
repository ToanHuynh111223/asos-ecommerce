import { useEffect } from "react";
import GlobalBanner from "../../components/GlobalBanner";
import SaleBanner from "../../components/SaleBanner";
import TrendingBrands from "../../components/TrendingBrands";
//import section women
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionDenim from "../../components/SectionDenim";
import SectionThree from "./components/SectionThree";
const Women: React.FC = () => {
  // 👇 remove class to body element
  useEffect(() => {
    document.body.classList.remove("signInPage");
  }, []);
  //scroll page when mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <GlobalBanner />
      <SaleBanner />
      <SectionOne />
      <SectionTwo />
      <SectionDenim />
      <SectionThree />
      <TrendingBrands />
    </>
  );
};

export default Women;
