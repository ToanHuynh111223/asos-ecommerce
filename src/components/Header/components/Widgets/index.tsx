import clsx from "clsx";
import styles from "./Widgets.module.scss";
import { Link } from "react-router-dom";
//import icon mui
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
const Widgets: React.FC = () => {
  return (
    <ul className={clsx(styles.widgets)}>
      <li className={clsx(styles.account)}>
        <button>
          <PermIdentityOutlinedIcon sx={{ fontSize: 26 }} />
        </button>
        <div className={clsx(styles.accountListChild)}>
          <div className={clsx(styles.top)}>
            <span>
              <Link to="/login">Sign In</Link>
            </span>
            <span>
              <Link to="/register">Join</Link>
            </span>
          </div>
          <ul className={clsx(styles.bottom)}>
            <li>
              <Link to="/login">
                <PermIdentityOutlinedIcon />
                My Account
              </Link>
            </li>
            <li>
              <Link to="/login">
                <Inventory2OutlinedIcon />
                My Orders
              </Link>
            </li>
            <li>
              <Link to="*">
                <HelpOutlineOutlinedIcon />
                Returns Infomation
              </Link>
            </li>
            <li>
              <Link to="*">
                <SmsOutlinedIcon />
                Contact Preferences
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <Link to="/saved-list">
          <button>
            <FavoriteBorderIcon sx={{ fontSize: 26 }} />
          </button>
        </Link>
      </li>
      <li>
        <Link to="/cart">
          <button>
            <LocalMallOutlinedIcon sx={{ fontSize: 26 }} />
          </button>
        </Link>
      </li>
    </ul>
  );
};

export default Widgets;
