import clsx from "clsx";
import styles from "./SectionDenim.module.scss";
import { imgSectionDenim } from "../../assets";
import { Link } from "react-router-dom";
const SectionDenim: React.FC = () => {
  return (
    <div className={clsx(styles.sectionDenim)}>
      <img alt="jean" src={imgSectionDenim[0]} />
      <div className={clsx(styles.title)}>
        <h2>DENIM BY TOPSHOP</h2>
        <p>Jackets, jeans & skirts - your essentials are here</p>
        <Link to="jean-product">
          <button>SHOP NOW</button>
        </Link>
      </div>
    </div>
  );
};
export default SectionDenim;
