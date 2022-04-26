/*import React, {useState} from 'react'
import { Field, ErrorMessage } from 'formik'

export default function InputPersonalData(props){
  const { label, name, options, ...rest } = props;

  return (
    <div className='form__control'>
      <label htmlFor={ name }>{ label }</label>
      { type === 'number' ? 
          ()
          <Field type={type} name={name} className='inputs__numbers'/> :
        type === 'select' ? 
          <Field as={type} className='select__container'>
            {
              options.map( option => {
                return(
                  <option key={option.value} value={option.value}>
                    {option.key}
                  </option>
                )
              })
            }
          <Field/>
        type === 'checkbox' ? 
      }
      <ErrorMessage name={name} component={} />
    </div>
  )
}*7