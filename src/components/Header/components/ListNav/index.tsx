import styles from "./ListNav.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const ListNav: React.FC = () => {
  const location = useLocation();
  return (
    <ul className={clsx(styles.listNav)}>
      <li
        style={{
          backgroundColor:
            location.pathname.search("women") === 1 ? "#474747" : "",
        }}
      >
        <Link to="/women">WOMEN</Link>
      </li>
      <li
        style={{
          backgroundColor:
            location.pathname.search("men") === 1 ? "#474747" : "",
        }}
      >
        <Link to="/men">MEN</Link>
      </li>
    </ul>
  );
};

export default ListNav;
