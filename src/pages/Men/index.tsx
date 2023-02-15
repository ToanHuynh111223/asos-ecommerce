import { useEffect } from "react";
function Men() {
  useEffect(() => {
    // 👇 remove class to body element
    document.body.classList.remove("signInPage");
  }, []);
  return <h1>Men Page</h1>;
}

export default Men;
<h1>Men Page</h1>;
