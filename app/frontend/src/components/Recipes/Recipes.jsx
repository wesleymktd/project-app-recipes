import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../styles/Recipes.css'

function Recipes({ index, name, img, id, type }) {
  return (
      <Link to={ type === 'drinks' ? `/drinks/${id}` : `/meals/${id}` }>
      <div data-testid={ `${index}-recipe-card` }>  
        <img
          className="recipes-image"
          src={ img }
          data-testid={ `${index}-card-img` }
          alt="imagem da receita"
          width={ 250 }
          height={ 200 }
        />
        <p data-testid={ `${index}-card-name` }>{name}</p>
      </div>
      </Link>
  );
}

Recipes.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Recipes;
