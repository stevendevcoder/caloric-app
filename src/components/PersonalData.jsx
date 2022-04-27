import React, { useState, useContext } from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray} from 'formik';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import 'styles/pages/PersonalData.scss';
//import InputPersonalData from 'components/InputPersonalData';
import SelectOpt from 'components/SelectOpt';
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { BiRun } from 'react-icons/bi';
import { MdEmojiObjects } from 'react-icons/md';

export default function PersonalData({ setNext, user }) {
  const [data, setData] = useState({
    user: user,
    estatura: '',
    peso: '',
    sexo: 'hombre',
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
        <FiUser style={{fontSize: '40px'}}/>
        <h1 className='message'>Datos Personales</h1>
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
            if(!values.actividad) errores.actividad = "Agregar campo";
            if(!values.objetivo) errores.objetivo = "Agregar campo";
            return errores;
          }}
          onSubmit={(values, {resetForm}) => {
            resetForm();
            console.log(values);
            setData(values);
          }}
        >
          {({ values, touched, errors, handleChange ,getFieldProps }) => (
            <Form className='form__data'>
              {console.log(values.sexo)}
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
                <div className="control__box">
                  <FiUser />
                </div>
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
                <div className="control__box">CM</div>

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
                <div className="control__box">Kg</div>
                <ErrorMessage name="peso" component={() => (
                  <div className="error" >{errors.peso}</div>
                )}/>
              </div>

              <div className="form__control-select">
                <label>Actividad</label>
                <Field component={SelectOpt} name="actividad"
                  options={[
                    {value: 'sedentario', label: 'Sedentario(Nada de actividad)'},
                    {value: 'poca', label: 'Poca actividad(Entreno 1 vez por semana)'},
                    {value: 'media', label: 'Actividad media(Entreno 2-4 veces por semana)'},
                    {value: 'alta', label: 'Actividad alta(Entreno más de 5 veces por semana)'},
                    {value: 'superalta', label: 'Actividad elite(Entreno 2 veces por dìa)'}
                  ]}/>
                <div className="control__box">
                  <BiRun />
                </div>
                <ErrorMessage name="estatura" component={() => (
                  <div className="error" >{errors.estatura}</div>
                )}/>
              </div>

              <div className="form__control-select">
                <label>Objetivo</label>
                <Field component={SelectOpt} name="objetivo" 
                  options={[
                    {value: 'definir', label: 'Definir y perder peso'},
                    {value: 'mantener', label: 'Mantenenimiento'},
                    {value: 'aumentar', label: 'Ganar masa muscular'}
                  ]}/>
                <div className="control__box">
                  <MdEmojiObjects />
                </div>
                <ErrorMessage name="estatura" component={() => (
                  <div className="error" >{errors.estatura}</div>
                )}/>
              </div>

              <div className="form__control-sexo">
                <label className={`label__sexo ${values.sexo == 'hombre' ? 'checked' : ''}`}>
                  <Field type="radio" id="sexo" name="sexo" value="hombre" checked="checked"/>
                  <AiOutlineMan/>
                </label>
                <label className={`label__sexo ${values.sexo == 'mujer' ? 'checked' : ''}`}>
                  <Field type="radio" id="sexo" name="sexo" value="mujer" />
                  <AiOutlineWoman/>
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