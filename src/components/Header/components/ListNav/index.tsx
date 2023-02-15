import styles from "./ListNav.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function ListNav() {
  const location = useLocation();
  return (
    <ul className={clsx(styles.listNav)}>
      <li
        style={{
          backgroundColor:
            location.pathname.slice(1, location.pathname.length) === "women"
              ? "#474747"
              : "",
        }}
      >
        <Link to="/women">WOMEN</Link>
      </li>
      <li
        style={{
          backgroundColor:
            location.pathname.slice(1, location.pathname.length) === "men"
              ? "#474747"
              : "",
        }}
      >
        <Link to="/men">MEN</Link>
      </li>
    </ul>
  );
}

export default ListNav;
