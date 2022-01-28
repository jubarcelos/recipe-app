import React from 'react';

function Login() {
  return (
    <form>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          data-testid="email-input"
          name="email"
          id="email"
          placeholder="Digite seu Email"
        />
      </label>
      <label htmlFor="password">
        Senha:
        <input
          data-testid="password-input"
          id="password"
          name="password"
          type="password"
          placeholder="Digite sua senha"
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
      >
        Enter
      </button>
    </form>
  );
}

export default Login;
