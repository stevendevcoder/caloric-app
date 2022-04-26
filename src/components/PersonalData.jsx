import React, { useState, useContext } from 'react';
import Input from 'components/Input';
import { Formik, Field, Form, ErrorMessage} from 'formik';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import 'styles/pages/PersonalData.scss';
//import InputPersonalData from 'components/InputPersonalData';

export default function PersonalData({ setNext, user }) {
  const [data, setData] = useState({
    user: user,
    estatura: '',
    peso: '',
    sexo: '',
    edad: '',
    actividad: '',
    objetivo: ''
  })

  return (
    <div className="login">
      {console.log(data)}
      <div className='changeMode' onClick={()=>setNext(false)}>
					<AiOutlineArrowLeft id='icon-left'/>
					<p>Volver</p>
			</div>
      <div className="container__login">
        <h1 className='message'>BIENVENIDO {data.user.email}</h1>
        <h2>Registra tus datos corporales, estos nos van a servir para 
          calcular <br/> tus requerimientos diarios y asi tener una experiencia personalizada  
        </h2>

        <Formik
          initialValues={data}
          validate={(values) => {
            let errores = {};

            if(isNaN(values.estatura)){
              errores.estatura = "La estatura es invalido"
              console.log(errores.estatura)
            } 
            if(isNaN(values.peso)){
              errores.peso = "El peso es invalido"
              console.log(errores.peso)
            }
            return errores;
          }}
          onSubmit={(values, {resetForm}) => {
            resetForm();
            console.log(values);
            setData(values);
          }}
        >
          {({ values, touched, errors, handleChange, handleBlur, getFieldProps }) => (
            <Form className='form__data'>
              <div className="form__control">
                <label htmlFor="edad">Edad</label>
                <Field 
                  type="number"
                  name="edad"
                  id="edad"
                  placeholder="Introduce tu edad"
                  pattern="[0-9]"
                  maxLength="3"
                  required
                />
                <ErrorMessage name="edad" component={() => (
                  <div className="error" >{errors.edad}</div>
                )}/>
              </div>
              <div className='form__control'>
                <label htmlFor="estatura">Estatura</label>
                <Field 
                  type="number" 
                  name="estatura" 
                  id="estatura" 
                  placeholder="Estatura en cm"
                  pattern="[0-9]"
                  required
                  maxLength="3"
                />
                <ErrorMessage name="estatura" component={() => (
                  <div className="error" >{errors.estatura}</div>
                )}/>
              </div>
              <div className='form__control'>
                <label htmlFor="peso">Peso</label>
                <input 
                  type="number" 
                  name="peso" 
                  id="peso" 
                  placeholder="Peso en kg"
                  pattern="[0-9]"
                  required
                />
                <ErrorMessage name="peso" component={() => (
                  <div className="error" >{errors.peso}</div>
                )}/>
              </div>

              <div className="form__control-actividad">
                <h2>Actividad</h2>
                <Field name="actividad" as="select">
                  <option value="sedentario">Sedentario(Nada de actividad)</option>
                  <option value="poca">Poca actividad(Entreno 1 vez por semana)</option>
                  <option value="media">Actividad media(Entreno 2-4 veces por semana)</option>
                  <option value="alta">Actividad alta(Entreno más de 5 veces por semana)</option>
                  <option value="superalta">Actividad elite(Entreno 2 veces por dìa)</option>
                </Field>
              </div>

              <div className="form__control-objetivo">
                <h2>Objetivo</h2>
                <Field name="objetivo" as="select">
                  <option value="definir">Definir y perder peso</option>
                  <option value="mantener">Mantenenimiento</option>
                  <option value="aumentar">Ganar masa muscular</option>
                </Field>
              </div>

              <div className="form__control-sexo">
                <label className='label__sexo'>
                  <Field type="radio" name="sexo" value="hombre" />
                  Hombre
                </label>
                <label className='label__sexo'>
                  <Field type="radio" name="sexo" value="mujer" />
                  Mujer
                </label>
              </div>

              <button type='submit'>Continuar</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}