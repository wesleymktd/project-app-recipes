import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ProfileIcon from '../../images/profileIcon.svg';
import SearchIcon from '../../images/searchIcon.svg';
import SearchBar from '../SearchBar/SearchBar';
import '../../styles/Header.css';

function Header({ title, profileButton, searchButton }) {
  const [isSearch, setIsSearch] = useState(false);

  const history = useHistory();

  const profileRedirect = () => {
    history.push('/profile');
  };

  const handleToggle = () => {
    setIsSearch(!isSearch);
  };

  return (
    <header className="header">
      { profileButton && (
        <button onClick={ profileRedirect }>
          <img
            className="header-profile-icon"
            src={ ProfileIcon }
            data-testid="profile-top-btn"
            alt="Icone de perfil"
          />
        </button>
      )}
      { searchButton && (
        <button
          onClick={ handleToggle }
          className="header-search-icon-button"
        >
          <img
            className="header-search-icon"
            src={ SearchIcon }
            data-testid="search-top-btn"
            alt="Icone de Pesquisa"
          />
        </button>
      )}
      <h2 data-testid="page-title">{title}</h2>
      {
        isSearch && (
          <SearchBar pathname={ history.location.pathname } />
        )
      }
    </header>
  );
}

Header.propTypes = {
  title: propTypes.string,
  profileButton: propTypes.bool,
  searchButton: propTypes.bool,
};

Header.defaultProps = {
  title: 'header',
  profileButton: true,
  searchButton: true,
};

export default Header;
