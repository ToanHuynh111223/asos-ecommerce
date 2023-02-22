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
                  src={imgSectionTwo[0]}
                  alt="women1"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className={clsx(styles.content)}>
                <h2>NEW-IN SWIM</h2>
                <p>Ocean eyes</p>
              </div>
            </div>
          </Link>
        </Grid>
        <Grid item md={3}>
          <Link to="*">
            <div className={clsx(styles.feature)}>
              <div style={{ width: "300px", height: "382px" }}>
                <img
                  src={imgSectionTwo[1]}
                  alt="women2"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className={clsx(styles.content)}>
                <h2>THE HOLE VIBE</h2>
                <p>Crochet, meet broderie</p>
              </div>
            </div>
          </Link>
        </Grid>
        <Grid item md={3}>
          <Link to="*">
            <div className={clsx(styles.feature)}>
              <div style={{ width: "300px", height: "382px" }}>
                <img
                  src={imgSectionTwo[2]}
                  alt="women3"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className={clsx(styles.content)}>
                <h2>NEW-SZN SHOES</h2>
                <p>Yeehaw energy</p>
              </div>
            </div>
          </Link>
        </Grid>
        <Grid item md={3}>
          <Link to="*">
            <div className={clsx(styles.feature)}>
              <div style={{ width: "300px", height: "382px" }}>
                <img
                  src={imgSectionTwo[3]}
                  alt="women4"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className={clsx(styles.content)}>
                <h2>THE ORDINARY</h2>
                <p>Ft. new Multi-Peptide Eye Serum</p>
              </div>
            </div>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
export default SectionTwo;
