import React from 'react';
import { useAuth } from 'context/authContext';
import RecipesList from 'components/RecipesList';
//import { useNavigate } from 'react-router-dom';
import styles from 'styles/pages/dashboard/dashboard.module.scss';
export default function Dashboard() {
  const { user } = useAuth();
  console.log(user.photoURL);

  return (
    <section className={styles.dashboard__home}>
      <RecipesList />
      <RecipesList />
      <RecipesList />
      <RecipesList />
    </section>
  );
}
