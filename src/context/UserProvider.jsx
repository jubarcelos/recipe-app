import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { userContext } from './index';

function UserProvider({ children }) {
  const [recommendations, setRecommendations] = useState([]);
  const [search, setSearch] = useState(false);
  const value = {
    recommendations,
    setRecommendations,
    search,
    setSearch,
  };

  return (
    <userContext.Provider value={ value }>
      { children }
    </userContext.Provider>
  );
}

export default UserProvider;

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
