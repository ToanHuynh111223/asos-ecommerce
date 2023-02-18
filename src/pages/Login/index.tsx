import styles from "./Login.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
//import icon mui
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import VisibilityIcon from "@mui/icons-material/Visibility";
/* eslint-disable */
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const Login: React.FC = () => {
  const [valueUserName, setValueUserName] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const [checkMessageErrorEmail, setCheckMessageErrorEmail] = useState(false);
  const [checkMessageErrorPassword, setCheckMessageErrorPassword] =
    useState(false);
  const email: any = useRef();
  const password: any = useRef();
  const emailErrorMessage: any = useRef();
  const passwordErrorMessage: any = useRef();
  useEffect(() => {
    // 👇 add class to body element
    document.body.classList.add("signInPage");
  }, []);
  const handleCheckUserName = () => {
    if (!valueUserName) {
      email.current.style.borderColor = "red";
      setCheckMessageErrorEmail(true);
    } else {
      if (regex.test(valueUserName) === false) {
        emailErrorMessage.current.textContent =
          "Email fail! Please type in your correct email address";
        setCheckMessageErrorEmail(true);
        email.current.style.borderColor = "red";
      } else {
        email.current.style.borderColor = "#767676";
        setCheckMessageErrorEmail(false);
      }
    }
  };
  const handleCheckPassword = () => {
    if (!valuePassword) {
      password.current.style.borderColor = "red";
      setCheckMessageErrorPassword(true);
    } else {
      password.current.style.borderColor = "#767676";
      setCheckMessageErrorPassword(false);
    }
  };
  const handleCheckSubmit = () => {
    if (!valuePassword && !valueUserName) {
      email.current.style.borderColor = "red";
      setCheckMessageErrorEmail(true);
      password.current.style.borderColor = "red";
      setCheckMessageErrorPassword(true);
    } else if (!valuePassword) {
      password.current.style.borderColor = "red";
      setCheckMessageErrorPassword(true);
    } else if (!valueUserName) {
      email.current.style.borderColor = "red";
      setCheckMessageErrorEmail(true);
    } else if (valueUserName) {
      if (regex.test(valueUserName) === false) {
        emailErrorMessage.current.textContent =
          "Email fail! Please type in your correct email address";
        setCheckMessageErrorEmail(true);
        email.current.style.borderColor = "red";
      } else {
        email.current.style.borderColor = "#767676";
        setCheckMessageErrorEmail(false);
      }
    } else {
      email.current.style.borderColor = "#767676";
      setCheckMessageErrorEmail(false);
      password.current.style.borderColor = "#767676";
      setCheckMessageErrorPassword(false);
    }
  };
  const handleShowPassword = () => {
    if (password.current.type === "password") {
      password.current.type = "text";
    } else password.current.type = "password";
  };
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.content)}>
        <div className={clsx(styles.logo)}>
          <Link to="/women">
            <img
              src="https://my.asos.com/Content/images/asos-logo-2022-93x28.png"
              height="28"
              width="93"
              alt="ASOS Logo"
              loading="lazy"
            />
          </Link>
        </div>
        <div className={clsx(styles.signInContainer)}>
          <div className={clsx(styles.signInOptionsWrapper)}>
            <div className={clsx(styles.signInOptionsLeft)}>
              <Link to="/register">JOIN</Link>
            </div>
            <div className={clsx(styles.signInOptionsRight)}>
              <Link to="/login">SIGN IN</Link>
            </div>
          </div>
          <div className={clsx(styles.loginForm)}>
            <form>
              <div className={clsx(styles.formGroup)}>
                <label>EMAIL ADDRESS:</label>
                <input
                  ref={email}
                  onBlur={handleCheckUserName}
                  value={valueUserName}
                  onChange={(e) => setValueUserName(e.target.value)}
                />
                <span
                  className={clsx(styles.errorEmail)}
                  style={{
                    display: checkMessageErrorEmail ? "block" : "none",
                  }}
                  ref={emailErrorMessage}
                >
                  {valueUserName
                    ? "Email fail! Please type in your correct email address"
                    : "Oops! You need to type your email here"}
                </span>
              </div>
              <div className={clsx(styles.formGroup)}>
                <label>PASSWORD:</label>
                <input
                  onBlur={handleCheckPassword}
                  ref={password}
                  type="password"
                  value={valuePassword}
                  onChange={(e) => setValuePassword(e.target.value)}
                />
                <VisibilityIcon
                  className={clsx(styles.visibility)}
                  style={{ display: valuePassword ? "block" : "none" }}
                  onClick={handleShowPassword}
                />
                <span
                  className={clsx(styles.errorPassword)}
                  style={{
                    display: checkMessageErrorPassword ? "block" : "none",
                  }}
                  ref={passwordErrorMessage}
                >
                  "Hey, we need a password here"
                </span>
              </div>
            </form>
            <div className={clsx(styles.formSubmit)}>
              <button onClick={handleCheckSubmit}>SIGN IN</button>
            </div>
            <div className={clsx(styles.forgotPassword)}>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </div>
          <div className={clsx(styles.infoCentre)}>
            <h2 className={clsx(styles.subtitle)}>OR SIGN IN WITH...</h2>
            <div className={clsx(styles.options)}>
              <div className={clsx(styles.socialLinks)}>
                <ul>
                  <li>
                    <Link to="">
                      <GoogleIcon />
                      <span>GOOGLE</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <AppleIcon />
                      <span>APPLE</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <FacebookSharpIcon />
                      <span>FACEBOOK</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={clsx(styles.twitter)}>
                <Link to="">Where has Twitter Gone?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
