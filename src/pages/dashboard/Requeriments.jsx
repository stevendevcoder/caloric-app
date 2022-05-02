import React from 'react'
import PropTypes from 'prop-types';

import styles from 'styles/components/Requeriments.module.scss';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export function Requeriments(){

  return (
    <section className={styles.requeriments}>
      <h1>Requerimientos Diarios</h1>
      <p>Estos son los macros diarios necesarios para lograr tu objetivo</p>
      <div className={styles.macros__container}>
        <div className={styles.requeriments__calories}>
          <h2>Calorias</h2>
          <div className="bar__container">
            <CircularProgressbar className={styles.bar} value={80} text={`800kcl`} /> 
          </div>
          <p>0/200g</p>
        </div>
        <div className={styles.requeriments__protein}>
          <h2>Proteinas</h2>
          <div className="bar__container">
            <CircularProgressbar className={styles.bar} value={20} text={`80gr`} /> 
          </div>
          <p>0/200g</p>
        </div>
        <div className={styles.requeriments__carbs}>
          <h2>Carbohidratos</h2>
          <div className="bar__container">
            <CircularProgressbar className={styles.bar} value={30} text={`120gr`} /> 
          </div>
          <p>0/200g</p>
        </div>
        <div className={styles.requeriments__fat}>
          <h2>Grasas</h2>
          <div className="bar__container">
            <CircularProgressbar className={styles.bar} value={40} text={`50gr`} /> 
          </div>
          <p>0/200g</p>
        </div>
      </div>
    </section>
  )
}