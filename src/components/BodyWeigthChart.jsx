import React, { useState } from 'react';
import styles from 'styles/components/BodyWeigthChart.module.scss';
import LineNaturalChart from './Charts/LineNaturalChart';
import AddWeightForm from './forms/AddWeightForm';
import Popup from './Popup';
export default function BodyWeigthChart() {
  const [showAddWeidthForm, setShowAddWeidthForm] = useState();
  function handleClose() {
    setShowAddWeidthForm(!showAddWeidthForm);
  }
  function handleSubmit({ weight }) {
    console.log('Sending data', { date: Date.now(), weight });
    setShowAddWeidthForm(!showAddWeidthForm);
  }
  return (
    <section className={`${styles.bodyWeight} `}>
      {showAddWeidthForm && (
        <Popup handleClose={handleClose}>
          <AddWeightForm handleSubmit={handleSubmit} />
        </Popup>
      )}
      <header className={styles.bodyWeight__header}>
        <span className="dashboard__title">Peso</span>
        <button
          className={styles.addWeight}
          onClick={() => setShowAddWeidthForm(!showAddWeidthForm)}
        >
          Agregar peso
        </button>
      </header>
      <div className={styles.bodyWeight__chart}>
        <LineNaturalChart data={chartData} />
      </div>
    </section>
  );
}

export const chartData = [
  {
    date: 1652069904137,
    weight: 90,
  },
  {
    date: 1651983720000,
    weight: 93,
  },
  {
    date: 1651897320000,
    weight: 91,
  },
  {
    date: 1651810920000,
    weight: 88,
  },
  {
    date: 1651724520000,
    weight: 87,
  },
  {
    date: 1651724520000,
    weight: 86,
  },
  {
    date: 1651551720000,
    weight: 87,
  },
  {
    date: 1651465320000,
    weight: 85,
  },
  {
    date: 1651378920000,
    weight: 82,
  },
  {
    date: 1651292520000,
    weight: 80,
  },
];
