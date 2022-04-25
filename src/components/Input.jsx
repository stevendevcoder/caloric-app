import React, { useState } from "react";
import "../styles/Input.scss";
import PropTypes from "prop-types";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import Error from "./Error";
import { Field } from "formik";
export default function Input({ name, handleChange, error, type, label }) {
  const [showPassword, setShowPassword] = useState(false);
  const color = error.length ? "error" : "";

  return (
    <label>
      {label}
      <div className={`input ${color}`}>
        <Field
          name={name}
          onChange={handleChange}
          type={showPassword ? "text" : type}
        />
        {type === "password" &&
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
        {error && <Error error={error}></Error>}
      </div>
    </label>
  );
}
Input.defaultProps = {
  type: "text",
  error: "",
};

Input.propTypes = {
  error: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  handleChange: PropTypes.func,
};
