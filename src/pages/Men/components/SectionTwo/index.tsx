import clsx from "clsx";
import styles from "./SectionTwo.module.scss";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { imgSectionTwo } from "../../../../assets";
const SectionTwo: React.FC = () => {
  return (
    <div className={clsx(styles.sectionTwo)}>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Link to="*">
            <div className={clsx(styles.feature)}>
              <div style={{ width: "300px", height: "382px" }}>
                <img
                  src={imgSectionTwo[4]}
                  alt="women1"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className={clsx(styles.content)}>
                <h2>NEW TREWS</h2>
                <p>Incl. on-trend cargos, ofc</p>
              </div>
            </div>
          </Link>
        </Grid>
        <Grid item md={3}>
          <Link to="*">
            <div className={clsx(styles.feature)}>
              <div style={{ width: "300px", height: "382px" }}>
                <img
                  src={imgSectionTwo[5]}
                  alt="women2"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className={clsx(styles.content)}>
                <h2>THINK PRINT</h2>
                <p>Artwork-heavy hits</p>
              </div>
            </div>
          </Link>
        </Grid>
        <Grid item md={3}>
          <Link to="*">
            <div className={clsx(styles.feature)}>
              <div style={{ width: "300px", height: "382px" }}>
                <img
                  src={imgSectionTwo[6]}
                  alt="women3"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className={clsx(styles.content)}>
                <h2>SALOMON</h2>
                <p>Take a hike</p>
              </div>
            </div>
          </Link>
        </Grid>
        <Grid item md={3}>
          <Link to="*">
            <div className={clsx(styles.feature)}>
              <div style={{ width: "300px", height: "382px" }}>
                <img
                  src={imgSectionTwo[7]}
                  alt="women4"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className={clsx(styles.content)}>
                <h2>BRIGHT ON</h2>
                <p>Bold moves</p>
              </div>
            </div>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
export default SectionTwo;
