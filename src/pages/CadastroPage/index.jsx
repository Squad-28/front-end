import React from 'react';
import NavLogin from '../../components/NavLogin';
import FotoCadastro from './../../components/assets/fotocadastro.svg';
import './style.css';
const Cadastro = () => {
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
          <img src={FotoCadastro} alt="foto Cadastrar" />
        </div>
        <div id="Cadastrar">
          <h1>Cadastro</h1>
          <p>Cadastrar sua conta</p>
          <form action="">
            <div className="field">
              <label htmlFor="Nome">Nome:</label>
              <input type="text" name="Nome" id="Nome" />
            </div>
            <div className="field">
              <label htmlFor="Cargo">Cargo:</label>
              <input type="text" name="Cargo" id="Cargo" />
            </div>
            <div className="field">
              <label htmlFor="Teams">Seu e-mail do Teams:</label>
              <input type="email" name="Teams" id="Teams" />
            </div>
            <div className="field">
              <label htmlFor="Senha">Senha</label>
              <input type=" password" name="Senha" id="Senha" />
            </div>
            <div className="field">
              <label htmlFor="Habilidades">Habilidades</label>
              <input type="search" name="Habilidades" id="Habilidades" />
            </div>
            <div className="actions">
              <button type="submit">Cadastrar</button>
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

export default Cadastro;
