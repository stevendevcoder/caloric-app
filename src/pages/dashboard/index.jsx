import React, {useEffect} from 'react';
import RecipesList from 'components/RecipesList';
import { Requeriments } from './Requeriments';
import Charts from 'pages/dashboard/Charts';
import styles from 'styles/pages/dashboard/dashboard.module.scss';
import { useAuth } from 'context/authContext';
import TrackerSection from 'components/TrackerSection';
import BodyWeigthChart from 'components/BodyWeigthChart';
export default function Dashboard() {
  const { user, data, getAccountData, loadingData} = useAuth();

  useEffect(()=> {
    const unsub = getAccountData();
    return () => unsub;
  }, [])

  console.log("DATA: ", data);

  if(loadingData) return <h1>Cargando datos de usuario...</h1>;

  return (
    <section className={styles.dashboard__home}>
			<Requeriments data={data}/> 
      <RecipesList />
      <TrackerSection />
      <BodyWeigthChart/>
      <Charts />
    </section>
  );
}
