import styles from "./Register.module.scss";
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
const Register: React.FC = () => {
  const [valueUserName, setValueUserName] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const [valueFirstName, setValueFirstName] = useState("");
  const [valueLastName, setValueLastName] = useState("");
  const [checkMessageErrorEmail, setCheckMessageErrorEmail] = useState(false);
  const [checkMessageErrorPassword, setCheckMessageErrorPassword] =
    useState(false);
  const [checkMessageErrorFirstName, setCheckMessageErrorFirstName] =
    useState(false);
  const [checkMessageErrorLastName, setCheckMessageErrorLastName] =
    useState(false);
  const email: any = useRef();
  const password: any = useRef();
  const firstName: any = useRef();
  const lastName: any = useRef();
  const emailErrorMessage: any = useRef();
  const passwordErrorMessage: any = useRef();
  const firstNameErrorMessage: any = useRef();
  const lastNameErrorMessage: any = useRef();
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
  const handleCheckFirstName = () => {
    if (!valueFirstName) {
      firstName.current.style.borderColor = "red";
      setCheckMessageErrorFirstName(true);
    } else {
      firstName.current.style.borderColor = "#767676";
      setCheckMessageErrorFirstName(false);
    }
  };
  const handleCheckLastName = () => {
    if (!valueLastName) {
      lastName.current.style.borderColor = "red";
      setCheckMessageErrorLastName(true);
    } else {
      lastName.current.style.borderColor = "#767676";
      setCheckMessageErrorLastName(false);
    }
  };
  const handleCheckSubmit = () => {
    if (!valuePassword && !valueUserName && !valueFirstName && !valueLastName) {
      email.current.style.borderColor = "red";
      setCheckMessageErrorEmail(true);
      password.current.style.borderColor = "red";
      setCheckMessageErrorPassword(true);
      firstName.current.style.borderColor = "red";
      setCheckMessageErrorFirstName(true);
      lastName.current.style.borderColor = "red";
      setCheckMessageErrorLastName(true);
    } else if (
      !valuePassword &&
      valueUserName &&
      valueFirstName &&
      valueLastName
    ) {
      if (regex.test(valueUserName) === false) {
        emailErrorMessage.current.textContent =
          "Email fail! Please type in your correct email address";
        setCheckMessageErrorEmail(true);
        email.current.style.borderColor = "red";
        password.current.style.borderColor = "red";
        setCheckMessageErrorPassword(true);
      } else {
        email.current.style.borderColor = "#767676";
        setCheckMessageErrorEmail(false);
        password.current.style.borderColor = "red";
        setCheckMessageErrorPassword(true);
        firstName.current.style.borderColor = "#767676";
        setCheckMessageErrorFirstName(false);
        lastName.current.style.borderColor = "#767676";
        setCheckMessageErrorLastName(false);
      }
    } else if (
      valuePassword &&
      valueUserName &&
      !valueFirstName &&
      valueLastName
    ) {
      if (regex.test(valueUserName) === false) {
        emailErrorMessage.current.textContent =
          "Email fail! Please type in your correct email address";
        setCheckMessageErrorEmail(true);
        email.current.style.borderColor = "red";
        firstName.current.style.borderColor = "red";
        setCheckMessageErrorFirstName(true);
      } else {
        email.current.style.borderColor = "#767676";
        setCheckMessageErrorEmail(false);
        password.current.style.borderColor = "#767676";
        setCheckMessageErrorPassword(false);
        firstName.current.style.borderColor = "red";
        setCheckMessageErrorFirstName(true);
        lastName.current.style.borderColor = "#767676";
        setCheckMessageErrorLastName(false);
      }
    } else if (
      valuePassword &&
      valueUserName &&
      !valueFirstName &&
      !valueLastName
    ) {
      if (regex.test(valueUserName) === false) {
        emailErrorMessage.current.textContent =
          "Email fail! Please type in your correct email address";
        setCheckMessageErrorEmail(true);
        email.current.style.borderColor = "red";
        lastName.current.style.borderColor = "red";
        setCheckMessageErrorLastName(true);
        firstName.current.style.borderColor = "red";
        setCheckMessageErrorFirstName(true);
      } else {
        email.current.style.borderColor = "#767676";
        setCheckMessageErrorEmail(false);
        password.current.style.borderColor = "#767676";
        setCheckMessageErrorPassword(false);
        firstName.current.style.borderColor = "red";
        setCheckMessageErrorFirstName(true);
        lastName.current.style.borderColor = "red";
        setCheckMessageErrorLastName(true);
      }
    } else if (
      !valuePassword &&
      valueUserName &&
      valueFirstName &&
      !valueLastName
    ) {
      if (regex.test(valueUserName) === false) {
        emailErrorMessage.current.textContent =
          "Email fail! Please type in your correct email address";
        setCheckMessageErrorEmail(true);
        email.current.style.borderColor = "red";
        lastName.current.style.borderColor = "red";
        setCheckMessageErrorLastName(true);
        password.current.style.borderColor = "red";
        setCheckMessageErrorPassword(true);
      } else {
        email.current.style.borderColor = "#767676";
        setCheckMessageErrorEmail(false);
        password.current.style.borderColor = "red";
        setCheckMessageErrorPassword(true);
        firstName.current.style.borderColor = "#767676";
        setCheckMessageErrorFirstName(false);
        lastName.current.style.borderColor = "red";
        setCheckMessageErrorLastName(true);
      }
    } else if (
      !valuePassword &&
      valueUserName &&
      !valueFirstName &&
      valueLastName
    ) {
      if (regex.test(valueUserName) === false) {
        emailErrorMessage.current.textContent =
          "Email fail! Please type in your correct email address";
        setCheckMessageErrorEmail(true);
        email.current.style.borderColor = "red";
        firstName.current.style.borderColor = "red";
        setCheckMessageErrorFirstName(true);
        password.current.style.borderColor = "red";
        setCheckMessageErrorPassword(true);
      } else {
        email.current.style.borderColor = "#767676";
        setCheckMessageErrorEmail(false);
        password.current.style.borderColor = "red";
        setCheckMessageErrorPassword(true);
        firstName.current.style.borderColor = "red";
        setCheckMessageErrorFirstName(true);
        lastName.current.style.borderColor = "#767676";
        setCheckMessageErrorLastName(false);
      }
    } else if (
      valuePassword &&
      !valueUserName &&
      !valueFirstName &&
      valueLastName
    ) {
      email.current.style.borderColor = "red";
      setCheckMessageErrorEmail(true);
      password.current.style.borderColor = "#767676";
      setCheckMessageErrorPassword(false);
      firstName.current.style.borderColor = "red";
      setCheckMessageErrorFirstName(true);
      lastName.current.style.borderColor = "#767676";
      setCheckMessageErrorLastName(false);
    } else if (
      valuePassword &&
      !valueUserName &&
      valueFirstName &&
      !valueLastName
    ) {
      email.current.style.borderColor = "red";
      setCheckMessageErrorEmail(true);
      password.current.style.borderColor = "#767676";
      setCheckMessageErrorPassword(false);
      firstName.current.style.borderColor = "#767676";
      setCheckMessageErrorFirstName(false);
      lastName.current.style.borderColor = "red";
      setCheckMessageErrorLastName(true);
    } else if (
      !valuePassword &&
      !valueUserName &&
      valueFirstName &&
      valueLastName
    ) {
      email.current.style.borderColor = "red";
      setCheckMessageErrorEmail(true);
      password.current.style.borderColor = "red";
      setCheckMessageErrorPassword(true);
      firstName.current.style.borderColor = "#767676";
      setCheckMessageErrorFirstName(false);
      lastName.current.style.borderColor = "#767676";
      setCheckMessageErrorLastName(false);
    } else if (!valuePassword) {
      password.current.style.borderColor = "red";
      setCheckMessageErrorPassword(true);
    } else if (!valueUserName) {
      email.current.style.borderColor = "red";
      setCheckMessageErrorEmail(true);
    } else if (!valueFirstName) {
      firstName.current.style.borderColor = "red";
      setCheckMessageErrorFirstName(true);
    } else if (!valueLastName) {
      lastName.current.style.borderColor = "red";
      setCheckMessageErrorLastName(true);
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
      firstName.current.style.borderColor = "#767676";
      setCheckMessageErrorFirstName(false);
      lastName.current.style.borderColor = "#767676";
      setCheckMessageErrorLastName(false);
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
          <div className={clsx(styles.infoCentre)}>
            <h2 className={clsx(styles.subtitle)}>SIGN UP WITH...</h2>
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
                <p>
                  Signing up with social is super quick. No extra passwords to
                  remember - no brain fail. Don't worry, we'd never share any of
                  your data or post anything on your behalf #notevil
                </p>
              </div>
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
                <label>FIRST NAME:</label>
                <input
                  ref={firstName}
                  onBlur={handleCheckFirstName}
                  value={valueFirstName}
                  onChange={(e) => setValueFirstName(e.target.value)}
                />
                <span
                  className={clsx(styles.errorFirstName)}
                  style={{
                    display: checkMessageErrorFirstName ? "block" : "none",
                  }}
                  ref={firstNameErrorMessage}
                >
                  We need your first name – it’s nicer that way
                </span>
              </div>
              <div className={clsx(styles.formGroup)}>
                <label>LAST NAME:</label>
                <input
                  ref={lastName}
                  onBlur={handleCheckLastName}
                  value={valueLastName}
                  onChange={(e) => setValueLastName(e.target.value)}
                />
                <span
                  className={clsx(styles.errorLastName)}
                  style={{
                    display: checkMessageErrorLastName ? "block" : "none",
                  }}
                  ref={lastNameErrorMessage}
                >
                  Last name, too, please!
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
