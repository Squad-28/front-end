import React from 'react';
import styles from './QueroAjuda.module.css';
const QueroAjuda = () => {
  return (
    <div>
      <section className={styles.fundo}>
        <div className={styles.container1}>
          <h1 className={styles.titulo}>Quero ajuda!</h1>
          <h2 className={styles.subtitulo}>
            Quais as habilidades necessárias?
          </h2>
          <p>Adicione as habilidades ou/e selecione abaixo</p>
          <input type="search" className={styles.put} />
        </div>
        <div className={styles.container2}>
          <p>Qual o seu nível de urgência?</p>
          <div>
            <input type="radio" id="agora" name="marca" />
            <label for="agora">Agora!</label>
          </div>
          <div>
            <input type="radio" id="esperar" name="marca" />
            <label for="esperar">Posso esperar!</label>
          </div>
          <div>
            <input type="radio" id="tanto" name="marca" />
            <label for="tanto">Tanto faz!</label>
          </div>
          <button>Buscar</button>
        </div>
        <div className={styles.container3}>
          <h2 className={styles.subtitulo}>Mentores disponíveis</h2>
          <p>Caso não queira buscar, basta conectar</p>
        </div>
      </section>
    </div>
  );
};

export default QueroAjuda;
