import React, { useState } from 'react';
import '../styles/Input.scss';
import PropTypes from 'prop-types';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye, AiOutlineCheckCircle } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';
import Error from './Error';
import { Field } from 'formik';

export default function Input({ name, errors, label, touched }) {
  const [showPassword, setShowPassword] = useState(false);
  const color = errors.length ? 'error' : 'correcto';
  return (
    <label>
      <span>
        {label}:
      </span>
      <div className={`input ${color}`}>
        <Field
          name={name}
          id={name}
          type={
            name === 'password' ? (showPassword ? 'text' : 'password') : 'text'
          }
        />

        {touched && !errors && 
          <AiOutlineCheckCircle className="check"></AiOutlineCheckCircle>
        }

        {touched && errors &&
          <TiDelete className="delete"></TiDelete>
        }

        {name === 'password' &&
          (showPassword ? (
            <AiFillEye
              onClick={() => setShowPassword(false)}
              className="icon-password"
            />
          ) : (
            <AiFillEyeInvisible
              onClick={() => setShowPassword(true)}
              className="icon-password"
            />
          ))}
        {touched && errors && <Error error={errors}></Error>}
      </div>
    </label>
  );
}
Input.defaultProps = {
  errors: '',
  touched: false,
};

Input.propTypes = {
  errors: PropTypes.string,
  label: PropTypes.string,
  touched: PropTypes.bool,
};
