import React from 'react';
import RecipesList from 'components/RecipesList';
import { Requeriments } from './Requeriments';
import Charts from 'pages/dashboard/Charts';

import styles from 'styles/pages/dashboard/dashboard.module.scss';

import { useAuth } from 'context/authContext';
import TrackerSection from 'components/TrackerSection';

export default function Dashboard() {
  const { user, data } = useAuth();
  console.log(user.photoURL);
  console.log(data);

  return (
    <section className={styles.dashboard__home}>
      <Requeriments data={data} />
      <RecipesList />
      <TrackerSection />
      <Charts />
    </section>
  );
}
