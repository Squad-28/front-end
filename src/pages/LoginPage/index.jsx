import React, { useState } from 'react';
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
        <h2 className="titulo">
          bem-vindo ao <br />
          <span> Technical Share</span>
        </h2>
      </div>
      <div className="container45">
        <div>
          <img src={FotoLogin} alt="foto login" />
        </div>
        <div id="login">
          <h1>Login</h1>
          <p>Insira suas informações para realizar o login.</p>
          <form className="form" onSubmit={handleLogin}>
            <div className="field">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="field">
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="actions">
              <button type="submit">Entrar</button>
            </div>
            <div className="batido">
              <p>
                Não possui conta? <a href="">Cadastre-se.</a>{' '}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
