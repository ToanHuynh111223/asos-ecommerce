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
                src={imgSectionThree[0]}
                alt="women1"
                style={{ width: "100%" }}
              />
            </div>
            <div className={clsx(styles.content)} style={{ float: "right" }}>
              <h2>RECLAIMED VINTAGE</h2>
              <p>Old-school inspired</p>

              <button>SHOP THE BRAND</button>
            </div>
          </Link>
        </Grid>
        <Grid item md={6}>
          <Link to="*" className={clsx(styles.wrapper)}>
            <div style={{ width: "498px" }}>
              <img
                src={imgSectionThree[1]}
                alt="women1"
                style={{ width: "100%" }}
              />
            </div>
            <div className={clsx(styles.content)}>
              <h2>JUST IN: THE NORTH FACE</h2>
              <p>Bringing the heat</p>

              <button>SHOP THE BRAND</button>
            </div>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
export default SectionThree;
