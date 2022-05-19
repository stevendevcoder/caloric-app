import React from 'react';
import styles from 'styles/components/CardTracker.module.scss';
import LinearChart from './LinearChart';
import NaturalChart from './NaturalChart';

export default function CardTracker({
  icon,
  variant,
  chartType,
  title,
  littleDescription,
}) {
  const chartColor = variant === 'green' ? '#ffffff' : '#f24030df';
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      <div className={styles.card__logo}>{icon}</div>
      <span className={styles.card__title}>{title}</span>
      <span className={styles.card__mg}>{littleDescription}</span>
      <div className={styles.card__chart}>
        {chartType === 'linear' ? (
          <LinearChart chartColor={chartColor} data={data} />
        ) : (
          <NaturalChart data={data} chartColor={chartColor} />
        )}
      </div>
    </div>
  );
}
CardTracker.defaultProps = {
  variant: '',
};
const data = [
  {
    name: 'Page A',
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: 'Page B',
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: 'Page C',
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: 'Page D',
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: 'Page E',
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    name: 'Page F',
    uv: 300,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    name: 'Page F',
    uv: 480,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    name: 'Page F',
    uv: 890,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    name: 'Page F',
    uv: 1200,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    name: 'Page F',
    uv: 980,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    name: 'Page F',
    uv: 1550,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    name: 'Page F',
    uv: 1332,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    name: 'Page F',
    uv: 1150,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    name: 'Page F',
    uv: 1543,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];
