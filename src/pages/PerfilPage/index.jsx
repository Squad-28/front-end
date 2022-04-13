import React from 'react';
import Nav from '../../components/Nav';
import styles from './style.module.css';
import FotoPerfil from '../../components/assets/fotoPerfil.svg';
import Icone from '../../components/assets/plus-circle-fill.svg';
import Icone2 from '../../components/assets/toggle-off.svg';

const index = () => {
  return (
    <div className={styles.paginaperfil}>
      <Nav />
      <h1 className={styles.titulo}>Meu perfil</h1>
      <div className={styles.container}>
        <header>
          <img src={FotoPerfil} alt="" className={styles.perfil} />
        </header>
        <div className={styles.containerdados1}>
          <div className={styles.dados1}>
            <h2>Bem vindo, Clarisa</h2>
            <p>Ux designer</p>
          </div>
          <div className={styles.dados2}>
            <h2>Contato</h2>
            <p>clarisa.gomes@gmail.com</p>
          </div>
          <div className={styles.dados3}>
            <h2>Habilidades</h2>
            <ul>
              <li>Pesq. quantitativa</li>
              <li>Prototipação</li>
              <li>Teste A/B</li>
              <li>Figma</li>
              <li>UI</li>
            </ul>
          </div>
        </div>
        <div className={styles.containerdados2}>
          <div className={styles.dados4}>
            <h2>Ficar disponível</h2>
            <img src={Icone2} alt="" />
          </div>
          <div className={styles.dados5}>
            <h2>Horários disponibilizados</h2>
            <p>
              <img src={Icone} alt="" /> adicionar horário
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
