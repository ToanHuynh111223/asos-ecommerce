import styles from "./NoProduct.module.scss";
import clsx from "clsx";
import { useEffect } from "react";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { Link } from "react-router-dom";
const NoProduct: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.emptyBag)}>
        <WorkOutlineIcon />
        <h1
          style={{
            fontWeight: "800",
            fontSize: "20px",
            lineHeight: "22px",
            letterSpacing: "2.5px",
            color: "#000",
            paddingTop: "16px",
          }}
        >
          Your bag is empty
        </h1>
        <p
          style={{
            fontWeight: "400",
            fontSize: "16px",
            letterSpacing: "0.4px",
            color: "#000",
            margin: "16px 0",
          }}
        >
          Items remain in your bag for 60 minutes, and then they’re moved to
          your Saved Items.
        </p>
        <p
          style={{
            fontWeight: "400",
            fontSize: "16px",
            letterSpacing: "0.4px",
            color: "#000",
            margin: "16px 0",
          }}
        >
          Sign in to see your bag <br /> and get shopping!
        </p>
        <Link to="/login">
          <button className={clsx(styles.signIn)}>SIGN IN</button>
        </Link>
      </div>
    </div>
  );
};
export default NoProduct;
