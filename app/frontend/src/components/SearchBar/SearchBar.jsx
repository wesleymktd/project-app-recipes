import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useRecipes } from '../../context/RecipesProvider';
import '../../styles/Header.css'

function SearchBar({ pathname }) {
  const [filter, setFilter] = useState('');
  const [input, setInput] = useState('');
  const { filterRecipes, setRecipes } = useRecipes();

  const history = useHistory();

  useEffect(() => {
    const verifyConditions = () => {
      if (filterRecipes === null) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
      } else if (filterRecipes.length === 1) {
        const recipe = filterRecipes[0].idMeal || filterRecipes[0].idDrink;
        history.push(`${pathname}/${recipe}`);
      }
    };
    verifyConditions();
  }, [filterRecipes, history, pathname]);

  const handleSearch = (event) => {
    event.preventDefault();
    let url;

    if (pathname === '/meals') url = 'http://localhost:3001/meals';
    if (pathname === '/drinks') url = 'http://localhost:3001/drinks';
    if (filter === 'ingredient') url += `filter.php?i=${input}`;
    if (filter === 'name') url += `/name?q=${input}`;
    if (filter === 'first-letter') url += `/name?q=${input}`;
    if (filter === 'first-letter' && input.length > 1) {
      return global
        .alert('Your search must have only 1 (one) character');
    }

    setRecipes(url, pathname.split('/')[1]);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          data-testid="search-input"
          onChange={ ({ target }) => setInput(target.value) }
        />
      </div>
      <div className="search-container">
        <label htmlFor="ingredient-search-radio">
          <input
            type="radio"
            id="ingredient-search-radio"
            data-testid="ingredient-search-radio"
            name="radio-search"
            value="ingredient"
            onChange={ ({ target }) => setFilter(target.value) }
          />
          Ingredient
        </label>

        <label htmlFor="name-search-radio">
          <input
            type="radio"
            data-testid="name-search-radio"
            id="name-search-radio"
            name="radio-search"
            value="name"
            onChange={ ({ target }) => setFilter(target.value) }
          />
          Name
        </label>

        <label htmlFor="first-letter-search-radio">
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            id="first-letter-search-radio"
            name="radio-search"
            value="first-letter"
            onChange={ ({ target }) => setFilter(target.value) }
          />
          First letter
        </label>

        <button
          type="submit"
          data-testid="exec-search-btn"
          onClick={ handleSearch }
        >
          Buscar

        </button>
      </div>
    </>
  );
}

SearchBar.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default SearchBar;
