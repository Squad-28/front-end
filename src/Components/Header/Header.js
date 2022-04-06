import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <nav className="container">
        <h1>Technical Share</h1>
      </nav>
      <h2>Bem vindo, Sangue Laranja.</h2>
      <h3>Você deseja:</h3>
      <div className="container1">
        <div>Procurar mentor</div>
        <div>Ver Histórico</div>
        <div>Ver Andamento</div>
      </div>
    </div>
  );
};

export default Header;
