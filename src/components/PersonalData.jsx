import React, { useState, useContext } from 'react';
import 'styles/pages/PersonalData.scss';

import { Formik, Field, Form, ErrorMessage, FieldArray} from 'formik';
import SelectOpt from 'components/SelectOpt';
import Error from 'components/Error'

import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { BiRun } from 'react-icons/bi';
import { MdEmojiObjects } from 'react-icons/md';
import { TiDelete } from "react-icons/ti";

import { useAuth } from 'context/authContext';
import { useNavigate } from "react-router-dom";
import { DASHBOARD } from "constants/route.constants";

export default function PersonalData({ setNext, registerUser }) {
  const { user, data, setPersonalData, getAccountData } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="login">
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
              errores.estatura = "La estatura es invalida"
            } 
            if(isNaN(values.peso)){
              errores.peso = "El peso es invalido"
            }
            if(!values.actividad) errores.actividad = "Agregar campo";
            if(!values.objetivo) errores.objetivo = "Agregar campo";
            return errores;
          }}
          onSubmit={ async (values, {resetForm}) => {
            try {
              resetForm();
              await setPersonalData({nombre: registerUser.name, ...values});
              console.log("Data seteada correctamente")
              console.log("TODO CREADO EXITOSAMENTE!")
              navigate(DASHBOARD);
            } catch(firebaseError) {
              console.log("Error de firebase**",firebaseError)
            }
          }}
        >
          {({ values, touched, errors}) => (
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
                <div className="control__box">
                  { errors.edad && touched.edad ?
                    <TiDelete className='errorIcon'/> : <FiUser />
                  }
                </div>
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
                <div className="control__box">
                  { errors.estatura && touched.estatura ?
                    <TiDelete className='errorIcon'/> : 'CM'
                  }
                </div>
              </div>
              <div className='form__control'>
                <label htmlFor="peso">Peso</label>
                <Field 
                  type="number" 
                  name="peso" 
                  id="peso" 
                  placeholder="Peso en kg"
                  pattern="[0-9]"
                  maxLength="3"
                  required
                />
                <div className="control__box">
                  { errors.peso && touched.peso ?
                    <TiDelete className='errorIcon'/> : 'KG'
                  }
                </div>        
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