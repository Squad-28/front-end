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

        <div className={styles.containerfilho}>
          <ul className={styles.box}>
            <li>Figma</li>
            <li>Adobe XD</li>
            <li>HTML5</li>
            <li>NODEJS</li>
            <li>UX</li>
            <li>SQL</li>
            <li>Pesquisa do usuario</li>
            <li>UI</li>
            <li>Java</li>
          </ul>
        </div>

        <div className={styles.container2}>
          <h2 className={styles.subtitulo}>Qual o seu nível de urgência?</h2>

          <div className={styles.jeito}>
            <ul>
              <li className={styles.jeitofilho}>Agora!</li>
              <li className={styles.jeitofilho}>Posso Esperar!</li>
              <li className={styles.jeitofilho}>Tanto Faz!</li>
            </ul>
          </div>
          <button className={styles.aperta}>Buscar</button>
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
