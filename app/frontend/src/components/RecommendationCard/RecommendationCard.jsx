import React from 'react';
import PropTypes from 'prop-types';

function RecommendationCard({ image, title, index }) {
  return (
    <div
      data-testid={ `${index}-recommendation-card` }
      className="item card-recommended"
    >
      <img src={ image } alt="receita recomendada" width="100%" height="80%" className="img-recommended"/>
      <h1 data-testid={ `${index}-recommendation-title` } className="title-recommended" style={ { color: 'white' } }>{title}</h1>
    </div>
  );
}

RecommendationCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default RecommendationCard;
