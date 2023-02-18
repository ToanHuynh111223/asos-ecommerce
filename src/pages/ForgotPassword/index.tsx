import styles from "./ForgotPassword.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

/* eslint-disable */
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const ForgotPassword: React.FC = () => {
  const [valueUserName, setValueUserName] = useState("");

  const [checkMessageErrorEmail, setCheckMessageErrorEmail] = useState(false);

  const email: any = useRef();
  const emailErrorMessage: any = useRef();
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

  const handleCheckSubmit = () => {
    if (!valueUserName) {
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
    }
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
          <div className={clsx(styles.info)}>
            <h2>RESET YOUR PASSWORD</h2>
            <p>
              Type in your email address below and we'll send you an email with
              instructions on how to create a new password
            </p>
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
            </form>
            <div className={clsx(styles.formSubmit)}>
              <button onClick={handleCheckSubmit}>RESET PASSWORD</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
