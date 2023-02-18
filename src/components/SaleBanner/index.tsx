import styles from "./SaleBanner.module.scss";
import clsx from "clsx";
import { banner } from "../../assets";
const SaleBanner: React.FC = () => {
  return (
    <div className={clsx(styles.saleBanner)}>
      <div className={clsx(styles.title)}>
        <div>
          <img src={banner[0]} alt="img-sale" />
        </div>
        <span>
          25% OFF BIG-TIME BRANDS!
          <br />
          UP TO 70% OFF ALREADY
        </span>
      </div>

      <p className={clsx(styles.code)}> With code: BIGGIES</p>
      <p className={clsx(styles.slug)}>
        Outlet items only. See website banner for Ts&Cs. Selected marked
        products excluded from promo.
      </p>
    </div>
  );
};
export default SaleBanner;
