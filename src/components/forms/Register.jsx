import React, { useState } from "react";
import Or from "components/Or";
import Input from "../Input";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { AiOutlineArrowLeft } from "react-icons/ai";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";

import { useNavigate } from "react-router-dom";
import { useAuth } from "context/authContext";
import { DASHBOARD } from "constants/route.constants";

export default function Register({ setMode }) {
  const [errorFirebase, setErrorFirebase] = useState("");

  const navigate = useNavigate();
  const { register } = useAuth();

  const createNewUser = async (newUser) => {
    try {
      setErrorFirebase("");
      await register(newUser.email, newUser.password);
      navigate(DASHBOARD);
    } catch (error) {
      let msgError = "";
      console.log((error.code = "auth/internal-error"));
      if (error.code === "auth/internal-error") {
        msgError = "Email invalido";
      } else if (error.code === "auth/weak-password") {
        msgError = "Contraseña insegura";
      } else if (error.code === "auth/email-alredy-in-use") {
        msgError = "El email ya está en uso";
      }
      setErrorFirebase(msgError);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errores = {};
          if (errorFirebase.length > 0) {
            errores.email = errorFirebase;
          }
          if (!values.email.length) {
            errores.email = "Requerido";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.email
            )
          ) {
            errores.email = "Correo invalido";
          }

          if (!values.password.length) {
            errores.password = "Requirido";
          } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,15}$/.test(
              values.password
            )
          ) {
            errores.password = "Contraseña invalido";
          }
          return errores;
        }}
        onSubmit={(valores) => {
          createNewUser(valores);
        }}
      >
        {({ errors, touched }) => (
          <Form className="login">
            {console.log(errors.email, touched.email)}
            <div className="changeMode" onClick={() => setMode(true)}>
              <AiOutlineArrowLeft id="icon-left" />
              <p>Iniciar sesión</p>
            </div>
            <div className="container-login">
              <h1 className="message">Registrarse</h1>
              <Input
                type="email"
                name="email"
                placeholder
                errors={errors.email}
                touched={touched.email}
                label="Email"
              />
              <Input
                name="password"
                type="password"
                errors={errors.password}
                touched={touched.password}
                label="constraseña"
              />
              <div className="checkbox">
                <input id="checkbox" type="checkbox" value="Recordarme" />
                <label htmlFor="checkbox">Recordarme</label>
              </div>
              <button type="submit">Crear cuenta</button>
              <Or></Or>
              <div className="login-or-register">
                <FacebookLoginButton type="submit" />
                <GoogleLoginButton />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

Register.propTypes = {
  error: PropTypes.string,
  createNewUser: PropTypes.func,
  setMode: PropTypes.func,
};
