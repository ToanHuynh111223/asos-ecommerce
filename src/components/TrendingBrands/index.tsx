import clsx from "clsx";
import styles from "./TrendingBrands.module.scss";
import { logo } from "../../assets";
import { Link } from "react-router-dom";
const TrendingBrands: React.FC = () => {
  return (
    <section className={clsx(styles.trendingBrands)}>
      <div className={clsx(styles.title)}>
        <h2>TRENDING BRANDS</h2>
      </div>
      <div className={clsx(styles.logoBar)}>
        <ul>
          <li>
            <Link to="*">
              <img src={logo[11]} alt="tommy-logo" />
            </Link>
          </li>
          <li>
            <Link to="*">
              <img src={logo[12]} alt="north-face-logo" />
            </Link>
          </li>
          <li>
            <Link to="*">
              <img src={logo[10]} alt="adidas-logo" />
            </Link>
          </li>
          <li>
            <Link to="*">
              <img src={logo[13]} alt="carhartt-logo" />
            </Link>
          </li>
          <li>
            <Link to="*">
              <img src={logo[14]} alt="ellesse-logo" />
            </Link>
          </li>
          <li>
            <Link to="*">
              <img src={logo[15]} alt="martens-logo" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default TrendingBrands;
