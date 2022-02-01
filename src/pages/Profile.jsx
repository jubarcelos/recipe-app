import React from 'react';
import { useHistory } from 'react-router-dom';

function Profile() {
  const history = useHistory();
  const { email } = JSON.parse(localStorage.getItem('user'));

  const handleClick = () => {
    history.push('/');
    localStorage.clear();
  };

  return (
    <div>
      <h3
        data-testid="profile-email"
      >
        {email}
      </h3>
      <button
        data-testid="profile-done-btn"
        type="button"
        onClick={ () => history.push('/done-recipes') }
      >
        Done Recipes
      </button>
      <button
        data-testid="profile-favorite-btn"
        type="button"
        onClick={ () => history.push('/favorite-recipes') }
      >
        Favorite Recipes
      </button>
      <button
        data-testid="profile-logout-btn"
        type="button"
        onClick={ handleClick }
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
