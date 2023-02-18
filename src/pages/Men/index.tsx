import { useEffect } from "react";
import GlobalBanner from "../../components/GlobalBanner";
import SaleBanner from "../../components/SaleBanner";
import TrendingBrands from "../../components/TrendingBrands";
const Men: React.FC = () => {
  useEffect(() => {
    // 👇 remove class to body element
    document.body.classList.remove("signInPage");
  }, []);
  return (
    <>
      <GlobalBanner />
      <SaleBanner />
      <h1>Men Page</h1>
      <TrendingBrands />
    </>
  );
};

export default Men;
<h1>Men Page</h1>;
