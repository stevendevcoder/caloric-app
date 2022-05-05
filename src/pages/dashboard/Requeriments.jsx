import React, { useState } from 'react'
import PropTypes from 'prop-types';

import styles from 'styles/components/Requeriments.module.scss';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { CircleProgress } from "react-gradient-progress";

import { MdLocalFireDepartment } from 'react-icons/md';
import { GiMeat, GiAvocado, GiBowlOfRice } from 'react-icons/gi';
import { IoIosWater } from 'react-icons/io';
import { GrAdd } from 'react-icons/gr';

/*
    MUJERES
    [655 + (9,6 × peso en kg) ] + [ (1,8 × altura en cm) – (4,7 × edad)] × Factor actividad.

    HOMBRES 
    [66 + (13,7 × peso en kg) ] + [ (5 × altura en cm) – (6,8 × edad)] × Factor actividad.
*/

export function Requeriments({ data }){
  const calcCalories = () => {
    let factorActividad = [1.2, 1.375, 1.55, 1.725, 1.9][['sedentario', 'poca', 'media', 'alta', 'superalta'].indexOf(data.actividad)];
    let factorObjectivo = [-300, 0, 300][['definir', 'mantener', 'aumentar'].indexOf(data.objetivo)];

    if(data.sexo === 'mujer'){
      return ((655 + (9.6*data.peso) + ((1.8 * data.estatura) - (4.7*data.edad)))*factorActividad)+factorObjectivo
    } else {
      return ((66 + (13.7*data.peso) + ((5*data.estatura) - (6.8 * data.edad)))*factorActividad)+factorObjectivo
    }
  }

  const requeriments = useState({
    calories: calcCalories(),
    protein: (calcCalories() * 0.20) / 4,
    carbs: (calcCalories() * 0.50) / 4,
    fat: (calcCalories() * 0.30) / 9
  });

  console.log(requeriments);

  const barStyles = buildStyles({
    textSize: '18px',
    pathTransitionDuration: 0.7,
    textColor: '#151917',
    trailColor: '#FFF',

    pathColor: 'linear-gradient(to right top, #f24130, #f7632b, #f97f2b, #fa9931, #fab13e, #fea848, #ff9f53, #ff975d, #ff7075, #ed549a, #b852c0, #4a5fd9)',
    background: 'linear-gradient(to right top, #f24130, #f7632b, #f97f2b, #fa9931, #fab13e, #fea848, #ff9f53, #ff975d, #ff7075, #ed549a, #b852c0, #4a5fd9);'
  })

  const iconStyles = {
    fontSize: '50px',
    padding: '10px',
    borderRadius: '50%',
    backgroundColor: '#15191765'
  }

  return (
    <section className={styles.requeriments}>
      <h1>Requerimientos Diarios</h1>
      <p>Estos son los macros diarios necesarios para lograr tu objetivo</p>
      <div className={styles.macros__container}>
        <div className={styles.requeriments__calories}>
          <MdLocalFireDepartment className={styles.caloricIcon}/>
          <h2>Calorias</h2>
          <div className='bar__container'>
          <CircularProgressbar strokeWidth={5} styles={barStyles} value={80} text={`800kcl`}/> 
          </div>

          <p>0/200g</p>
        </div>
        <div className={styles.requeriments__protein}>
          <GiMeat className={styles.caloricIcon}/>
          <h2>Proteinas</h2>
          <div className="bar__container">
            <CircularProgressbar strokeWidth={5} styles={barStyles} value={20} text={`80gr`} /> 
          </div>
          <p>0/200g</p>
        </div>
        <div className={styles.requeriments__carbs}>
          <GiBowlOfRice className={styles.caloricIcon} />
          <h2>Carbos</h2>
          <div className="bar__container">
            <CircularProgressbar strokeWidth={5} styles={barStyles} value={80} text={`120gr`} /> 
          </div>
          <p>0/200g</p>
        </div>
        <div className={styles.requeriments__fat}>
          <GiAvocado className={styles.caloricIcon}/>
          <h2>Grasas</h2>
          <div className="bar__container">
            <CircularProgressbar strokeWidth={5} styles={barStyles} value={40} text={`50gr`} /> 
          </div>
          <p>0/200g</p>
        </div>
        {/*
        <div className={styles.requeriments__water}>
          <h2>Consumo de agua</h2>
          <IoIosWater className={styles.iconWater}/>
          <GrAdd className={styles.iconAdd}/>
        </div>*/}
      </div>
      
      <button className='vernutrientes'>Ver nutrientes</button>
    </section>
  )
}