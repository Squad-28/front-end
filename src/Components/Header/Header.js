import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navegacao}>
          <h1 className={styles.titulo}>Technical Share</h1>
          <div className={styles.navegacao2}>
            <Link className={styles.subtitulos} to="/">
              Home
            </Link>
            <Link className={styles.subtitulos} to="/QueroAjuda">
              Quero Ajuda
            </Link>
            <Link className={styles.subtitulos} to="/login">
              login/cadastar
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
