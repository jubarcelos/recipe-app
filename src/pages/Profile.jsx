import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import { userContext } from '../context';

function Profile() {
  const history = useHistory();
  const { userEmail } = useContext(userContext);

  const handleClick = () => {
    history.push('/');
    localStorage.clear();
  };

  return (
    <div>
      <h3
        data-testid="profile-email"
      >
        {userEmail}
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
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
