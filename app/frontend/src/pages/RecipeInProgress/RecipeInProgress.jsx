/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import copy from 'clipboard-copy';
import Button from '../../components/Button/Button';
import RecipeProgressCard from '../../components/RecipeProgressCard/RecipeProgressCard';
import { useRecipes } from '../../context/RecipesProvider';
import useSetLocalStorage from '../../hooks/useSetLocalStorage';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
import useGetLocalStorage from '../../hooks/useGetLocalStorage';
import '../../styles/InProgress.css';

function RecipeInProgress() {
  const [isFav, setIsFav] = useState(false);
  const [isCopy, setIsCopy] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const {
    recipe,
    setRecipeDetail,
    ingredients,
    setIngredients,
  } = useRecipes();

  const history = useHistory();
  const id = history.location.pathname.split('/')[2];
  const type = history.location.pathname.split('/')[1];
  const { isFavorite } = useGetLocalStorage(type, id);
  const { setFavorite, removeFavorite, finishRecipe } = useSetLocalStorage(type, id);

  useEffect(() => {
    if (type === 'drinks') {
      setRecipeDetail(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`, type);
      return;
    }
    if (type === 'meals') {
      setRecipeDetail(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, type);
    }
  }, []);

  useEffect(() => {
    const ingredientsValue = Object.entries(recipe)
      .filter(([key, value]) => key.includes('strIngredient') && value)
      .map(([, value]) => value);
    const measures = Object.entries(recipe)
      .filter(([key, value]) => key.includes('strMeasure') && value)
      .map(([, value]) => value);
    const saveIngredients = { ...ingredients, ingredients: ingredientsValue, measures };
    setIngredients(saveIngredients);
  }, [recipe]);

  useEffect(() => {
    setIsFav(isFavorite);
  }, [isFavorite]);

  const handleFavorite = () => {
    setFavorite();
    setIsFav(true);
  };

  const removeFav = () => {
    removeFavorite();
    setIsFav(false);
  };

  const handleShare = () => {
    copy(`http://localhost:3000/${type}/${id}`);
    setIsCopy(!isCopy);
  };

  const verifyIsFinish = (list) => {
    const allChecked = list.every(Boolean);
    setIsDone(allChecked);
  };

  return (
    <div>
      <h2
        style={ { textAlign: 'center', marginTop: '1rem' } }
        className="inProgress-title"
      >
        Recipe in Progress
      </h2>
      <div className="progress-container">
        <RecipeProgressCard
          ingredients={ ingredients.ingredients }
          measures={ ingredients.measures }
          key={ recipe.idDrink || recipe.idMeal }
          title={ recipe.strDrink || recipe.strMeal }
          instructions={ recipe.strInstructions }
          image={ recipe.strDrinkThumb || recipe.strMealThumb }
          categoryOrAlcoholic={ recipe.strAlcoholic || recipe.strCategory }
          verifyIsFinish={ verifyIsFinish }
        />
        
        
        <button
          data-testid="finish-recipe-btn"
          onClick={ () => finishRecipe() }
          disabled={ !isDone }
          className="finish-btn"
        >
          Done Recipe
        </button>
        <div className="fav-share-container">
          <Button
              handleClick={ isFav ? removeFav : handleFavorite }
              src={ isFav ? blackHeartIcon : whiteHeartIcon }
              alt="botão de favoritar"
              id="favorite-btn"
              className="favorite-btn"
            />
          <Button
            handleClick={ handleShare }
            src={ shareIcon }
            alt="botão de compartilhar"
            id="share-btn"
            className="share-btn"
          />
          {isCopy && (<span>Link copied!</span>)}
        </div>
      </div>
    </div>
  );
}

export default RecipeInProgress;
