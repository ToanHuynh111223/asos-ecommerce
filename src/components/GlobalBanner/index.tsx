import clsx from "clsx";
import styles from "./GlobalBanner.module.scss";
import { Link } from "react-router-dom";
const GlobalBanner: React.FC = () => {
  return (
    <div className={clsx(styles.banner)}>
      <div className={clsx(styles.bannerLeft)}>
        <div className={clsx(styles.content)}>
          <Link to="*" style={{ textDecoration: "none" }}>
            <span style={{ color: "#000" }}>
              25% OFF BIG-TIME BRANDS!*
              <br />
              UP TO 70% OFF ALREADY
              <br />
              With code: BIGGIES
            </span>
          </Link>
        </div>
      </div>
      <div className={clsx(styles.bannerRight)}>
        <div className={clsx(styles.content)}>
          <Link to="*" style={{ textDecoration: "none" }}>
            <span style={{ lineHeight: "57px", color: "#fff" }}>
              FREE WORLDWIDE DELIVERY
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default GlobalBanner;
