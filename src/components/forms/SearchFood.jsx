import React, { useState, useEffect } from 'react';
import 'styles/components/SearchFood.scss';
import { BsSearch } from 'react-icons/bs';
import FoodResult from '../FoodResult';
const params = {
  api_key: 'FPJbc4czDkIDA8apxHG9pEpuj2F0J0bIFTEqAJGo',
  dataType: ['survey (FNDDS)'],
  pageSize: 2
};
//e5a811556f394707a6083c66d528d8a9
//ef594cfb3ff4448e9ddca6424d2cb34e
export default function SearchFood(){
  //const [loading, setLoading] = useState(false);
  const [term, setTerm] = useState('');
  const [foodsResults, setFoodResults] = useState([]);

  useEffect(() => {
    getFoodData(term);
  }, []);
  
  const getFoodData = async (query) => {
    const apiURL = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&query=${encodeURIComponent(query)}&pageSize=6 `;
    try {
      const { foods } = await fetch(apiURL).then(response => response.json());
      foods.forEach(food => {
        console.log(food);
      });
      setFoodResults(foods);
    } catch(error){
      alert(error);
    }
  };
  const handleChange = () => getFoodData(term);

  return (
    <div className="form-container">
      <h2>Buscar Alimento</h2>
      <div className="searcher">
        <input 
          type='text' 
          value={term}
          placeholder='Buscar alimento por palabras clave' 
          onChange={(e) => setTerm(e.target.value)}
          />
        <BsSearch onClick={handleChange} className='search-icon'/>
      </div>
      <div className="results">
        {
          foodsResults.length ? 
            foodsResults.map(food => 
              <FoodResult key={food.fdcId} {...food}/>
            ) 
            : <h2>No hay resultados</h2>
        }
      </div>
    </div>
  );
}