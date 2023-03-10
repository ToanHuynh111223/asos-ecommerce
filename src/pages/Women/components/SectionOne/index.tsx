import clsx from "clsx";
import styles from "./SectionOne.module.scss";
import { Link } from "react-router-dom";
import { imgSectionOne } from "../../../../assets";
const SectionOne: React.FC = () => {
  return (
    <div className={clsx(styles.sectionOne)}>
      <img src={imgSectionOne[0]} alt="women" />
      <div className={clsx(styles.highlight)}>
        <span>Just dropped</span>
      </div>
      <div className={clsx(styles.shop)}>
        <Link to="jean-product">SHOP ASOS DESIGN</Link>
      </div>
    </div>
  );
};
export default SectionOne;
