import clsx from "clsx";
import styles from "./SectionThree.module.scss";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { imgSectionThree } from "../../../../assets";
const SectionThree: React.FC = () => {
  return (
    <div className={clsx(styles.sectionThree)}>
      <Grid container spacing={4}>
        <Grid item md={6}>
          <Link to="*" className={clsx(styles.wrapper)}>
            <div style={{ width: "498px", float: "right" }}>
              <img
                src={imgSectionThree[2]}
                alt="men1"
                style={{ width: "100%" }}
              />
            </div>
            <div className={clsx(styles.content)} style={{ float: "right" }}>
              <h2>CROOKED TONGUES </h2>
              <p>Skater staples</p>

              <button>SHOP THE BRAND</button>
            </div>
          </Link>
        </Grid>
        <Grid item md={6}>
          <Link to="*" className={clsx(styles.wrapper)}>
            <div style={{ width: "498px" }}>
              <img
                src={imgSectionThree[3]}
                alt="men2"
                style={{ width: "100%" }}
              />
            </div>
            <div className={clsx(styles.content)}>
              <h2>VACAY TIME</h2>
              <p>Sun-ready steeze</p>
              <button>SHOP THE BRAND</button>
            </div>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
export default SectionThree;
