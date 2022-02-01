import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { userContext } from '.';

function UserProvider({ children }) {
  const [userEmail, setUserEmail] = useState('');

  return (
    <userContext.Provider value={ { userEmail, setUserEmail } }>
      { children }
    </userContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
