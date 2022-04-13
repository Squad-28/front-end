import React from 'react';
import Iconefc from './../assets/grupo-fcamara-negativo.svg';
import styles from './index.module.css';
const NavLogin = ({ onLogout }) => {
  return (
    <div className="nav">
      <div className="grid justify-items-center">
        <div className="container flex justify-between">
          <h1 className="logo py-6">Technical Share</h1>
          <img className={styles.logoimg} src={Iconefc} alt="logoFcamara" />
        </div>
      </div>
    </div>
  );
};

export default NavLogin;
