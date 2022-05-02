import React from 'react';
import Select from 'react-select';
import { useField } from 'formik';

function SelectOpt(props) {
  const [field, state, { setValue, setTouched }] = useField(props.field.name);

  const onChange = ({ value }) => {
    setValue(value);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      padding: '15px',
    }),
  };
  return (
    <Select
      {...props}
      className="react-select"
      classNamePrefix="react-select"
      onChange={onChange}
      onBlur={setTouched}
      styles={customStyles}
      required
    />
  );
}

export default SelectOpt;
