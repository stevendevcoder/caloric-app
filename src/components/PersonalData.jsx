import React, { useState, useContext } from 'react';
import Input from 'components/Input';
import { Formik } from 'formik';
import { AiOutlineArrowLeft } from 'react-icons/ai'


export default function PersonalData({ setNext, user }) {
  const [data, setData] = useState({
    user: user,
    estatura: '',
    peso: '',
    sexo: '',
    edad: '',
    actividad: '',
    objectivo: ''
  })

  return (
    <div className="login">
      <div className='changeMode' onClick={()=>setNext(false)}>
					<AiOutlineArrowLeft id='icon-left'/>
					<p>Volver</p>
			</div>
      <div className="container-login">
        <h1 className='message'>Bienvenido ${data.user.name}</h1>
        <h2>Registra tus datos corporales</h2>

        <Formik
          initialValues={data}
          validate={(values) => {
            let error = {};

            if(!values.estatura){
              error.estatura
            }
          }}
          onSubmit={(values) => {
            console.log(values)
            console.log("Formulario enviado")
          }}
        >
          {({ values, handleSubmit, handleChange, handleBlur }) => (
            <form className='form__data' onSubmit={handleSubmit} >
              {console.log("hola")}
              <div>
                <label htmlFor="estatura">Estatura</label>
                <input 
                  type="text" 
                  name="estatura" 
                  id="estatura" 
                  placeHolder="Estatura en cm"
                  value={values.estatura}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <label htmlFor="peso">Peso</label>
                <input 
                  type="text" 
                  name="peso" 
                  id="peso" 
                  placeHolder="Peso en kilogramos"
                  value={values.peso}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <label htmlFor="edad">Edad</label>
                <input 
                  type="text" 
                  name="edad" 
                  id="edad" 
                  placeHolder=""
                  value={values.edad}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <button type='submit'>Continuar</button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}