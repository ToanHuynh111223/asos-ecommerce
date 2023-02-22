import { useEffect } from "react";
import GlobalBanner from "../../components/GlobalBanner";
import SaleBanner from "../../components/SaleBanner";
import TrendingBrands from "../../components/TrendingBrands";
//import section men
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionDenim from "../../components/SectionDenim";
import SectionThree from "./components/SectionThree";
const Men: React.FC = () => {
  useEffect(() => {
    // 👇 remove class to body element
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

export default Men;
<h1>Men Page</h1>;
