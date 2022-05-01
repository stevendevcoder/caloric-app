import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'styles/components/RecipesList.module.scss';
import { RecipeCard } from './RecipeCard';
import PropTypes from 'prop-types';
export default function RecipesList({ recipesList }) {
  return (
    <section className={`${styles.recipes} `}>
      <header className={styles.recipes__header}>
        <span className="dashboard__title">Recipes</span>
        <Link to="dashboard/recipes-all" className={styles.show__all}>
          Show All
        </Link>
      </header>
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
  ],
};
