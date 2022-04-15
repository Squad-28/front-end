import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLogin from '../../components/NavLogin';
import FotoLogin from './../../components/assets/foto-login.svg';

import './styles.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <div>
      <NavLogin />

      <div>
        <h2 className="login-title">
          bem-vindo ao <br />
          <span>Technical Share</span>
        </h2>
      </div>
      <div className="login-container">
        <div>
          <img src={FotoLogin} alt="foto login" />
        </div>
        <div class="login-content">
          <h1>Login</h1>
          <p>Insira suas informações para realizar o login.</p>
          <form onSubmit={handleLogin}>
            <div className="login-field">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="login-field">
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="login-actions">
              <button type="submit">Entrar</button>
            </div>
            <div className="login-register">
              <p>
                Não possui conta? <Link to="/register">Cadastre-se.</Link>{' '}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
