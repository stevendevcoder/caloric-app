import React from 'react'
import PropTypes from 'prop-types';
import { GrAdd } from 'react-icons/gr';

function FoodResult({description, foodNutrients, brandOwner, servingSize, servingSizeUnit}) {
  const calories = foodNutrients[3].value;
  const protein = foodNutrients[0].value;
  const fat = foodNutrients[1].value;
  const carbs = foodNutrients[2].value;

  return (
    <div className="result__card">
      <div className="description">
        <p className='food__name'>{description}</p>
        <p className='food__info'>{brandOwner}</p>
      </div>
      {/*<div className="serving">
        <span>{servingSize} {servingSizeUnit}</span>
  </div>*/}
      <div className="macros">
        <div className="calories">KCL:{calories}</div>
        <div className="protein">P:{protein}g</div>
        <div className="fat">F:{fat}g</div>
        <div className="carbs">C:{carbs}g</div>
      </div>
      <div className="options">
        <GrAdd className="add"/>
      </div>
    </div>
  )
}

FoodResult.defaultProps = {
  description: 'Hamburguesa',
  foodNutrients: [
    {value: 350},
    {value: 80},
    {value: 60},
    {value: 145}
  ],
  brandOwner: 'MacDonalds'
}


export default FoodResult