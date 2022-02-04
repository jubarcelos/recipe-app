import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { userContext } from '.';

function UserProvider({ children }) {
  const [search, setSearch] = useState(false);
  return (
    <userContext.Provider value={ { search, setSearch } }>
      { children }
    </userContext.Provider>
  );
}

export default UserProvider;

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
