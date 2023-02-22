import clsx from "clsx";
import styles from "./JeanProduct.module.scss";
import { useLocation } from "react-router-dom";
import JeanMen from "./components/JeanMen";
import JeanWomen from "./components/JeanWomen";
import GlobalBanner from "../../components/GlobalBanner";
import { useEffect } from "react";
const JeanProduct: React.FC = () => {
  const location = useLocation().pathname;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={clsx(styles.wrapperJean)}>
      <GlobalBanner />
      <div className={clsx(styles.categoryBanner)}>
        <h1>Jeans</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p>
            In a long-term relationship with denim? Cos same. Serving up some
            serious wardrobe mileage with an extra side of steez, our edit of
            Topman jeans at ASOS has fifty percent of your new fave 'fit on
            lock. Stock up on super-skinny jeans in classic washes for your
            everyday look, or opt for the OG of tighter-fitting denim with a
            pair of Topman skinny jeans. Straight leg and carpenter jeans are
            having a moment on the denim scene, which we fully approve of. And
            if making an impact is a priority, scroll our edit of the brand’s
            distressed and ripped jeans to add an instant edge to your wardrobe.
          </p>
        </div>
      </div>
      {location.search("men") === 1 ? <JeanMen /> : <JeanWomen />}
    </div>
  );
};
export default JeanProduct;
