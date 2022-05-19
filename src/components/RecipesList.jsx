import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from 'styles/components/RecipesList.module.scss';
import { RecipeCard } from './RecipeCard';
import PropTypes from 'prop-types';

import { GrAdd } from 'react-icons/gr';

export default function RecipesList({ recipesList }) {
  const [addFood, setAddFood] = useState(false);

  console.log(addFood)

  const addNewFood = () => {
    
  }

  return (
    <section className={`${styles.recipes} `}>
      <header className={styles.recipes__header}>
        <span className="dashboard__title">Recipes</span>
        <Link to="dashboard/recipes-all" className={styles.show__all}>
          Show All
        </Link>
      </header>
      <div 
        className={styles.recipes__addNewFood}
        onClick={() => setAddFood(true)}>
        
        <GrAdd style={{color: 'white', fontSize: '30px'}}/>
      </div>
      <div className={styles.recipes__list}>
        {recipesList.map((recipe, key) => (
          <RecipeCard {...recipe} key={key} />
        ))}
      </div>
    </section>
  );
}

RecipesList.propTypes = {
  recipesList: PropTypes.array.isRequired,
};

RecipesList.defaultProps = {
  recipesList: [
    {
      image:
        'https://i.ibb.co/kK94qKB/Firefox-Screenshot-2022-04-09-T04-21-45-983-Z.png',
      name: 'Healthy fruits',
      grams: 200,
      calories: 1500,
    },
    {
      image:
        'https://i.ibb.co/kK94qKB/Firefox-Screenshot-2022-04-09-T04-21-45-983-Z.png',
      name: 'Healthy fruits',
      grams: 200,
      calories: 1500,
    },
    {
      image:
        'https://i.ibb.co/kK94qKB/Firefox-Screenshot-2022-04-09-T04-21-45-983-Z.png',
      name: 'Healthy fruits',
      grams: 200,
      calories: 1500,
    },
    {
      image:
        'https://i.ibb.co/kK94qKB/Firefox-Screenshot-2022-04-09-T04-21-45-983-Z.png',
      name: 'Healthy fruits',
      grams: 200,
      calories: 1500,
    },
    {
      image:
        'https://i.ibb.co/kK94qKB/Firefox-Screenshot-2022-04-09-T04-21-45-983-Z.png',
      name: 'Healthy fruits',
      grams: 200,
      calories: 1500,
    },
    {
      image:
        'https://i.ibb.co/kK94qKB/Firefox-Screenshot-2022-04-09-T04-21-45-983-Z.png',
      name: 'Healthy fruits',
      grams: 200,
      calories: 1500,
    },
  ],
};
