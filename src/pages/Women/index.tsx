import { useEffect } from "react";
import GlobalBanner from "../../components/GlobalBanner";
import SaleBanner from "../../components/SaleBanner";
import TrendingBrands from "../../components/TrendingBrands";
const Women: React.FC = () => {
  // 👇 remove class to body element
  useEffect(() => {
    document.body.classList.remove("signInPage");
  }, []);
  return (
    <>
      <GlobalBanner />
      <SaleBanner />
      <h1>Women page</h1>
      <TrendingBrands />
    </>
  );
};

export default Women;
