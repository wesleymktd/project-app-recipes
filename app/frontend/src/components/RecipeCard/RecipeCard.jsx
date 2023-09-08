import React from 'react';
import PropTypes from 'prop-types';

function RecipeCard({
  image, title, categoryOrAlcoholic,
  ingredients, measures, instructions,
  video }) {
  return (
    <div>
      <div className="image-container-details">  
        <h1 data-testid="recipe-category" className="title-details category-details">{categoryOrAlcoholic}</h1>
        <h2 data-testid="recipe-title" className="title-details name-details">{title}</h2>
        <img
          className="image-details"
          src={ image }
          alt="imagem da receita"
          data-testid="recipe-photo"
          width="40%"
        />
      </div>
      <h2 className="subtitle-details">Ingredients</h2>
      <ul className="ul-details">
        {ingredients.map((ingredient, index) => (
          <li
            className="li-details"
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {
              measures[index] === undefined
                ? `${ingredient}` : `${ingredient} - ${measures[index]}`
            }
          </li>
        ))}
      </ul>
      <h2 className="subtitle-details">Instructions</h2>
      <p data-testid="instructions" className="text-details">{instructions}</p>
      { video && <embed
        className="video-details"
        width="80%"
        height="80%"
        type="video/mp4"
        src={ `https://www.youtube.com/embed/${video.split('/')[3]}` }
        data-testid="video"
      />}
    </div>
  );
}

RecipeCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  categoryOrAlcoholic: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  measures: PropTypes.arrayOf(PropTypes.string),
  instructions: PropTypes.string,
  video: PropTypes.string,
};

RecipeCard.defaultProps = {
  image: '',
  title: '',
  categoryOrAlcoholic: '',
  ingredients: [],
  measures: [],
  instructions: '',
  video: null,
};

export default RecipeCard;
