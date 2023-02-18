import clsx from "clsx";
import styles from "./TrendingBrands.module.scss";
import { logo } from "../../assets";
const TrendingBrands: React.FC = () => {
  return (
    <section className={clsx(styles.trendingBrands)}>
      <div className={clsx(styles.title)}>
        <h2>TRENDING BRANDS</h2>
      </div>
      <div className={clsx(styles.logoBar)}>
        <ul>
          <li>
            <img src={logo[11]} alt="tommy-logo" />
          </li>
          <li>
            <img src={logo[12]} alt="north-face-logo" />
          </li>
          <li>
            <img src={logo[10]} alt="adidas-logo" />
          </li>
          <li>
            <img src={logo[13]} alt="carhartt-logo" />
          </li>
          <li>
            <img src={logo[14]} alt="ellesse-logo" />
          </li>
          <li>
            <img src={logo[15]} alt="martens-logo" />
          </li>
        </ul>
      </div>
    </section>
  );
};
export default TrendingBrands;
