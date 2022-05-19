import React from 'react';
import styles from 'styles/components/TrackerSection.module.scss';
import { MdLocalFireDepartment } from 'react-icons/md';
import { GiBowlOfRice } from 'react-icons/gi';
import CardTracker from './CartTracker';
export default function TrackerSection() {
  return (
    <section className={styles.tracker}>
      <header className={styles.tracker__header}>
        <span className={styles.tracker__title}>Progresss Tracker</span>
        <span className={styles.tracker__description}>
          Undertanding these nutrition terms may make it easier
        </span>
      </header>
      <div className={styles.tracker__list}>
        <CardTracker
          icon={<MdLocalFireDepartment fontSize={20} />}
          title="Average Proteins"
          littleDescription="380mg"
        />
        <CardTracker
          icon={<GiBowlOfRice fontSize={20} />}
          variant="green"
          chartType="linear"
          title="Average Carbs"
          littleDescription="380mg"
        />
      </div>
    </section>
  );
}
