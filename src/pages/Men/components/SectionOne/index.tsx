import clsx from "clsx";
import styles from "./SectionOne.module.scss";
import { Link } from "react-router-dom";
import { imgSectionOne } from "../../../../assets";
const SectionOne: React.FC = () => {
  return (
    <div className={clsx(styles.sectionOne)}>
      <img src={imgSectionOne[1]} alt="men" />
      <div className={clsx(styles.highlight)}>
        <span>
          Just-dropped ft. <br />
          The North Face
        </span>
      </div>
      <div className={clsx(styles.shop)}>
        <Link to="*">SHOP NOW</Link>
      </div>
    </div>
  );
};
export default SectionOne;
