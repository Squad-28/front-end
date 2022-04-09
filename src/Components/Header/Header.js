import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div>
        <nav className={styles.navegacao}>
          <h1>Technical Share</h1>
          <div className={styles.navegacao2}>
            <Link to="/">Home</Link>
            <Link to="/QueroAjuda">Quero Ajuda</Link>
            <Link to="/login">login/cadastar</Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
