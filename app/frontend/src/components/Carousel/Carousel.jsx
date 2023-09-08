import React from 'react';
import { useRecipes } from '../../context/RecipesProvider';
import RecommendationCard from '../RecommendationCard/RecommendationCard';

const MAX_LENGTH = 6;

function Carousel() {
  const { filterRecipes } = useRecipes();

  return (
    <div className="container" >
      <h1 className="subtitle-details">Recommended</h1>
      <div className="carousel">
        {filterRecipes.map((recipe, index) => (
          <div key={ index }>
            <RecommendationCard
              image={ recipe.strMealThumb || recipe.strDrinkThumb }
              index={ index }
              title={ recipe.strMeal || recipe.strDrink }
            />
          </div>
        )).slice(0, MAX_LENGTH)}
      </div>
    </div>
  );
}

export default Carousel;
