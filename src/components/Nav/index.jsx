import React from 'react';
import './style.css';
import FotoPerfil from '../assets/fotoPerfil.svg';

const Nav = ({ onLogout }) => {
  return (
    <div className="nav flex justify-between">
      <h1 className="logo py-6">Technical Share</h1>
      <div className="nav-items flex items-center px-14 gap-10">
        <p>Home</p>
        <img src={FotoPerfil} alt="foto de pefil" width={42} />
        <p>
          Olá, <span id="nomePerfil">Clarisa!</span>
        </p>
      </div>
    </div>
  );
};

export default Nav;
