import React, { useState } from "react";
import "styles/pages/Login.scss";
import SignIn from "components/forms/SignIn";
import Register from "components/forms/Register";

export default function Login() {
  const [mode, setMode] = useState(true);

  return (
    <div className="container">
      <div className={`image-login ${mode ? "avocado" : "running"}`}></div>

      {mode ? <SignIn setMode={setMode} /> : <Register setMode={setMode} />}
    </div>
  );
}
