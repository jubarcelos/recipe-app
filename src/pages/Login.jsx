/* eslint-disable react/jsx-max-depth */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, TextField } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import logo from '../images/logo.png';

// import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import theme from '../components/styleBase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setDisabled = () => {
    const SIX = 6;
    if (email.includes('@') && email.includes('.com') && password.length > SIX) {
      return false;
    }
    return true;
  };

  const saveStorageLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('favoriteRecipes', '[]');
    localStorage.setItem('doneRecipes', '[]');
    localStorage.setItem('inProgressRecipes', '{}');
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/foods');
  };

  return (
    <ThemeProvider theme={ theme }>
      <Box
        height="100vh"
        bgcolor="primary.main"
        display="flex"
        alignItems="center"
      >
        <Box
          p={ 4 }
          mx="auto"
          maxWidth="75%"
          borderRadius={ 10 }
          bgcolor="primary.light"
        >
          <form>
            {/* <label htmlFor="email" /> */ }
            <img src={ logo } alt="logo" width="170px" />
            <TextField
              fullWidth
              inputProps={ { style: { fontSize: '1.2em' } } }
              color="secondary"
              label="E-mail"
              type="text"
              data-testid="email-input"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
              value={ email }
              onChange={ ({ target }) => setEmail(target.value) }
            />
            {/* </label> */ }

            {/* <label htmlFor="password" /> */ }
            <TextField
              fullWidth
              inputProps={ { style: { fontSize: '1.2em' } } }
              color="secondary"
              label="password"
              data-testid="password-input"
              id="password"
              name="password"
              type="password"
              placeholder="Digite sua senha"
              value={ password }
              onChange={ ({ target }) => setPassword(target.value) }
            />
            {/* </label> */ }
            <Box mt={ 5 } mb={ 4 }>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                data-testid="login-submit-btn"
                onClick={ saveStorageLogin }
                disabled={ setDisabled() }
              >
                Enter
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </ThemeProvider>

  );
}

export default Login;
