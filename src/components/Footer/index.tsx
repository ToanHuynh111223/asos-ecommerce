import clsx from "clsx";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { logo } from "../../assets";
//import logo
import { payBank } from "../../assets";
//import mui icon
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer: React.FC = () => {
  return (
    <footer>
      <div className={clsx(styles.footerWrapperTop)}>
        <ul className={clsx(styles.social)}>
          <li>
            <Link to="/facebook">
              <FacebookIcon className={clsx(styles.facebookIcon)} />
            </Link>
          </li>
          <li>
            <Link to="/instagram">
              <InstagramIcon className={clsx(styles.instagramIcon)} />
            </Link>
          </li>
          <li>
            <Link to="/twitter">
              <TwitterIcon />
            </Link>
          </li>
        </ul>
        <ul className={clsx(styles.pay)}>
          <li>
            <img src={payBank[0]} alt="visa" />
          </li>
          <li>
            <img src={payBank[1]} alt="visa-electron" />
          </li>
          <li>
            <img src={payBank[2]} alt="pay-pal" />
          </li>
          <li>
            <img src={payBank[3]} alt="mastercard" />
          </li>
          <li>
            <img src={payBank[4]} alt="american-express" />
          </li>
        </ul>
      </div>
      <div className={clsx(styles.footerWrapperCenter)}>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <div className={clsx(styles.column)}>
              <h3>HELP & INFORMATION</h3>
              <ul>
                <li>
                  <Link to="*">Help</Link>
                </li>
                <li>
                  <Link to="*">Track order</Link>
                </li>
                <li>
                  <Link to="*">Delivery & returns</Link>
                </li>
                <li>
                  <Link to="*">Sitemap</Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item md={3}>
            <div className={clsx(styles.column)}>
              <h3>ABOUT ASOS</h3>
              <ul>
                <li>
                  <Link to="*">About us</Link>
                </li>
                <li>
                  <Link to="*">Careers at ASOS</Link>
                </li>
                <li>
                  <Link to="*">Corporate responsibility</Link>
                </li>
                <li>
                  <Link to="*">Investors' site</Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item md={3}>
            <div className={clsx(styles.column)}>
              <h3>MORE FROM ASOS</h3>
              <ul>
                <li>
                  <Link to="*">Mobile and ASOS apps</Link>
                </li>
                <li>
                  <Link to="*">ASOS Marketplace</Link>
                </li>
                <li>
                  <Link to="*">Gift vouchers</Link>
                </li>
                <li>
                  <Link to="*">Black Friday</Link>
                </li>
                <li>
                  <Link to="*">ASOS x Thrift+</Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item md={3}>
            <div className={clsx(styles.shoppingForm)}>
              <h3>SHOPPING FROM:</h3>
              <div className={clsx(styles.change)}>
                <span>You're in</span>
                <Link to="/change">
                  <img src={logo[16]} alt="VietNam" />
                  <p>CHANGE</p>
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={clsx(styles.footerWrapperBottom)}>
        <div className={clsx(styles.left)}>
          <p>© 2023 ASOS</p>
        </div>
        <div className={clsx(styles.right)}>
          <ul>
            <li>
              <Link to="/Privacy & Cookies">Privacy & Cookies</Link>
            </li>
            <li>
              <Link to="/Ts&Cs">Ts&Cs</Link>
            </li>
            <li>
              <Link to="/Accessibility">Accessibility</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
