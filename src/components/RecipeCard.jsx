import React from 'react';
import styles from 'styles/components/RecipeCard.module.scss';
import PropTypes from 'prop-types';
export function RecipeCard({ image, name, grams, calories }) {
  return (
    <div className={styles.recipe}>
      <img src={image} alt={name} width={50} height={50} />
      <span className={styles.recipe__name}>Healthy fruits</span>
      <span>{grams} g</span>
      <span>{calories} Kcl</span>
      <span className={styles.recipe__options}>•••</span>
    </div>
  );
}

RecipeCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  grams: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
};
