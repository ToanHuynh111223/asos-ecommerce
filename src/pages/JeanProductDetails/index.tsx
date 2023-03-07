import { useLocation } from "react-router-dom";
import JeanMenDetails from "./components/JeanMenDetails";
import JeanWomenDetails from "./components/JeanWomenDetails";
import GlobalBanner from "../../components/GlobalBanner";
import { useParams } from "react-router-dom";
const JeanProductDetail: React.FC = () => {
  const location = useLocation().pathname;
  const name: string | any = useParams().name;
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
