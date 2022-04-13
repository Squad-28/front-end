import React from 'react';
import NavLogin from '../../components/NavLogin';
import FotoCadastro from './../../components/assets/fotocadastro.svg';

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
      <div>
        <div>
          <img src={FotoCadastro} alt="foto login" />
        </div>
        <div>
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
              <input type="pasword" name="Senha" id="Senha" />
            </div>
            <div className="field">
              <label htmlFor="Habilidades">Habilidades</label>
              <input type="search" name="Habilidades" id="Habilidades" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
