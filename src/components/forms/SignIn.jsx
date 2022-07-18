import React, { useState } from 'react';
import Input from 'components/Input';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import { useAuth } from 'context/authContext';
import { DASHBOARD } from 'constants/route.constants';
import { Formik, Form } from 'formik';

export default function SignIn({ setMode }) {
  const [errorFirebase, setErrorFirebase] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const loginUser = async (user) => {
    try {
      setErrorFirebase('');
      await login(user.email, user.password);
    } catch (error) {
      setErrorFirebase(error.code);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errores = {};
          if (errorFirebase.length > 0) {
            errores.email = errorFirebase;
            console.log('hola');
          }
          if (!values.email.length) {
            errores.email = 'Requerido';
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.email
            )
          ) {
            errores.email = 'Correo invalido';
          }

          if (!values.password.length) {
            errores.password = 'Requirido';
          } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,15}$/.test(
              values.password
            )
          ) {
            errores.password = 'Contraseña invalido';
          }
          return errores;
        }}
        onSubmit={async (valores) => {
          await loginUser(valores);
          navigate(DASHBOARD);
        }}
      >
        {({ errors, touched }) => (
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
                label="Email"
                errors={errors.email}
                touched={touched.email}
              />
              <Input
                type="password"
                name="password"
                label="contraseña"
                errors={errors.password}
                touched={touched.password}
              />
              <button type="submit">Continuar</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

SignIn.propTypes = {
  error: PropTypes.string,
  loginUser: PropTypes.func,
  setMode: PropTypes.func,
};
