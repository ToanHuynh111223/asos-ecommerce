import { useEffect } from "react";
function Women() {
  useEffect(() => {
    // 👇 remove class to body element
    document.body.classList.remove("signInPage");
  }, []);
  return <h1>WoMen Page</h1>;
}

export default Women;
