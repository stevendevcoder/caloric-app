import React, { useState } from 'react';

import styles from 'styles/components/Requeriments.module.scss';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

import { MdLocalFireDepartment } from 'react-icons/md';
import { GiMeat, GiAvocado, GiBowlOfRice } from 'react-icons/gi';
import { IoIosWater } from 'react-icons/io'
import { GrAdd } from 'react-icons/gr'

export function Requeriments({ data }) {
  const calcCalories = () => {
    let factorActividad = [1.2, 1.375, 1.55, 1.725, 1.9][
      ['sedentario', 'poca', 'media', 'alta', 'superalta'].indexOf(
        data.actividad
      )
    ];
    let factorObjectivo = [-300, 0, 300][
      ['definir', 'mantener', 'aumentar'].indexOf(data.objetivo)
    ];

    if (data.sexo === 'mujer') {
      return (
        (655 + 9.6 * data.peso + (1.8 * data.estatura - 4.7 * data.edad)) *
          factorActividad +
        factorObjectivo
      );
    } else {
      return (
        (66 + 13.7 * data.peso + (5 * data.estatura - 6.8 * data.edad)) *
          factorActividad +
        factorObjectivo
      );
    }
  };
  const requeriments = {
    calories: Math.trunc(calcCalories()),
    protein: Math.trunc((calcCalories() * 0.20) / 4),
    carbs: Math.trunc((calcCalories() * 0.50) / 4),
    fat: Math.trunc((calcCalories() * 0.30) / 9)
  };
  const today = {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0
  };

  const barStyles = buildStyles({
    textSize: '18px',
    pathTransitionDuration: 0.7,
    textColor: '#151917',
    trailColor: '#FFF',
    pathColor:
      'linear-gradient(to right top, #f24130, #f7632b, #f97f2b, #fa9931, #fab13e, #fea848, #ff9f53, #ff975d, #ff7075, #ed549a, #b852c0, #4a5fd9)',
    background:
      'linear-gradient(to right top, #f24130, #oif7632b, #f97f2b, #fa9931, #fab13e, #fea848, #ff9f53, #ff975d, #ff7075, #ed549a, #b852c0, #4a5fd9);',
  });

  return (
    <section className={styles.requeriments}>
      <div className={styles.title}>
        <div>
          <h1>Requerimientos Diarios</h1>
          <p>Estos son los macros diarios necesarios para lograr tu objetivo</p>
        </div>
        <a className={styles.vernutrientes}>Ver nutrientes</a>
      </div>
      <div className={styles.macros__container}>
        <div className={styles.requeriments__calories}>
          <MdLocalFireDepartment className={styles.caloricIcon} />
          <h2>Calorias</h2>
          <div className='bar__container'>
            <CircularProgressbar 
              strokeWidth={5} 
              styles={barStyles} 
              value={(today.calories*100)/requeriments.calories} 
            text={`${requeriments.calories}kcl`}/> 
          </div>
          <p>{today.calories}/{requeriments.calories}kcl</p>
        </div>
        <div className={styles.requeriments__protein}>
          <GiMeat className={styles.caloricIcon} />
          <h2>Proteinas</h2>
          <div className="bar__container">
            <CircularProgressbar 
              strokeWidth={5} 
              styles={barStyles} 
              value={(today.protein*100)/requeriments.protein} 
              text={`${requeriments.protein}g`} /> 
          </div>
          <p>{today.protein}/{requeriments.protein}g</p>
        </div>
        <div className={styles.requeriments__carbs}>
          <GiBowlOfRice className={styles.caloricIcon} />
          <h2>Carbos</h2>
          <div className="bar__container">
            <CircularProgressbar 
            strokeWidth={5} 
            styles={barStyles} 
            value={(today.carbs*100)/requeriments.carbs} 
            text={`${requeriments.carbs}g`} /> 
          </div>
          <p>{today.carbs}g /{requeriments.carbs}g</p>
        </div>
        <div className={styles.requeriments__fat}>
          <GiAvocado className={styles.caloricIcon} />
          <h2>Grasas</h2>
          <div className="bar__container">
            <CircularProgressbar 
            strokeWidth={5} 
            styles={barStyles} 
            value={(today.fat*100)/requeriments.fat} 
            text={`${requeriments.fat}g`} /> 
          </div>
          <p>{today.fat}g / {requeriments.fat}g</p>
        </div>
      </div>

      <div className={styles.requeriments__water}>
        <IoIosWater className={styles.iconWater}/>
        <h2>Consumo de agua</h2>
        <Progress 
          percent={68} 
          style={{color: '#0957ff', textColor: '#fff'}}  
        />
        <p>{today.calories}/{requeriments.calories}L</p>
        <div className={styles.options}>
          <GrAdd className={styles.iconAdd}/>
        </div>
      </div>
    </section>
  );
}
