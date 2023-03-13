import { useLocation } from "react-router-dom";
import JeanMenDetails from "./components/JeanMenDetails";
import JeanWomenDetails from "./components/JeanWomenDetails";
import GlobalBanner from "../../components/GlobalBanner";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const JeanProductDetail: React.FC = () => {
  const location = useLocation().pathname;
  const name: string | any = useParams().name;
  const productList = useSelector((state: any) => state.cart);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(productList));
  }, [productList]);
  return (
    <div>
      <GlobalBanner />
      {location.search("men") === 1 ? (
        <JeanMenDetails name={name} />
      ) : (
        <JeanWomenDetails name={name} />
      )}
    </div>
  );
};
export default JeanProductDetail;
