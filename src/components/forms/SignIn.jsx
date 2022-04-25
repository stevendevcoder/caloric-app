import React, { useState } from "react";
import Input from "components/Input";
import Or from "components/Or";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { AiOutlineArrowLeft } from "react-icons/ai";
import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";
import { useAuth } from "context/authContext";
import { DASHBOARD } from "constants/route.constants";
import { Formik, Form } from "formik";

export default function SignIn({ setMode }) {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errorFirebase, setErrorFirebase] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const loginUser = async (user) => {
    try {
      setErrorFirebase("");
      await login(user.email, user.password);
      navigate("/dashboard");
    } catch (error) {
      setErrorFirebase(error.code);
      console.log(error.code);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(user);
  };

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  return (
    <>
      <Formik>
        <Form className="login">
          <div className="changeMode" onClick={() => setMode(false)}>
            <AiOutlineArrowLeft id="icon-left" />
            <p>Registrarse</p>
          </div>
          <div className="container-login">
            <h1 className="message">Inciar sesion</h1>

            <Input
              type="email"
              name="email"
              error={errorFirebase}
              label="Email"
            />
            <Input
              type="password"
              name="password"
              error={errorFirebase}
              label="contraseña"
            />

            <div className="checkbox">
              {" "}
              <input id="checkbox" type="checkbox" value="Recordarme" />
              <label htmlFor="checkbox">Recordarme </label>
            </div>
            <button onClick={handleSubmit} className="">
              Continuar
            </button>

            <Or></Or>
            <div className="login-or-register">
              <FacebookLoginButton type="submit" />
              <GoogleLoginButton />
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}

SignIn.propTypes = {
  error: PropTypes.string,
  loginUser: PropTypes.func,
  setMode: PropTypes.func,
};
