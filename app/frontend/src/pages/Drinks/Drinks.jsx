/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import CategoryBtn from '../../components/CategoryBtn/CategoryBtn';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Recipes from '../../components/Recipes/Recipes';
import { useRecipes } from '../../context/RecipesProvider';
import '../../styles/Recipes.css'

const MAX_LENGTH = 12;
const MAX_CATEGORY = 5;

function Drinks() {
  const { filterRecipes, setRecipes, setCategoryOnState, category } = useRecipes();

  useEffect(() => {
    setRecipes('http://localhost:3001/drinks', 'drinks');
    setCategoryOnState('http://localhost:3001/drinks/categories', 'drinks');
  }, []);

  const resetRecipes = () => {
    setRecipes('http://localhost:3001/drinks', 'drinks');
  };

  return (
    <div>
      <Header title="Drinks" />
      <div className="filter-container">
        <div className="filter-btns">
          {
            category && category.map((item, index) => (
              <CategoryBtn
                key={ index }
                category={ item.strCategory }
                type="drinks"
              />)).slice(0, MAX_CATEGORY)
          }
          <button
            className="btn-all"
            onClick={ resetRecipes }
            data-testid="All-category-filter"
            >
              All
          </button>
        </div>
      </div>
      <div className="card-container">
        {
          filterRecipes && filterRecipes.map((recipe, index) => (
            <Recipes
              key={ index }
              index={ index }
              img={ recipe.strDrinkThumb }
              name={ recipe.strDrink }
              id={ recipe.idDrink }
              type="drinks"
            />
          )).slice(0, MAX_LENGTH)
        }
      </div>
      <Footer />
    </div>
  );
}

export default Drinks;
