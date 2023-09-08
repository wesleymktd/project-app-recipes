/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

function useGetLocalStorage(type, id) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const [ingredientsChecked, setIngredientsChecked] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('inProgressRecipes')) {
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        drinks: {},
        meals: {},
      }));
    } else {
      const inProgressRecipe = JSON.parse(localStorage.getItem('inProgressRecipes'));
      if (type === 'meals') {
        const inProgressMeal = inProgressRecipe.meals;
        if (inProgressMeal[id]) setInProgress(true);
      } else {
        const inProgressDrinks = inProgressRecipe.drinks;
        if (inProgressDrinks[id]) setInProgress(true);
      }
    }
  }, [id, type]);

  useEffect(() => {
    const getItems = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (getItems[type][id] === undefined) {
      getItems[type][`${id}`] = [];
      localStorage.setItem('inProgressRecipes', JSON.stringify(getItems));
      return;
    }
    setIngredientsChecked(getItems[type][id]);
  }, [id, type]);

  useEffect(() => {
    if (localStorage.getItem('favoriteRecipes')) {
      const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      if (type === 'meals') {
        const favoriteMeals = favoriteRecipes
          .filter((recipes) => recipes.type === 'meal');
        const favoriteMealIds = favoriteMeals.map((recipes) => recipes.id);
        if (favoriteMealIds.includes(id)) setIsFavorite(true);
      } else {
        const favoriteDrinks = favoriteRecipes
          .filter((recipes) => recipes.type === 'drink');
        const favoriteDrinkIds = favoriteDrinks.map((recipes) => recipes.id);
        if (favoriteDrinkIds.includes(id)) setIsFavorite(true);
      }
    }
  }, [id, type]);

  return {
    isFavorite, inProgress, setInProgress, setIsFavorite, ingredientsChecked,
  };
}

export default useGetLocalStorage;
