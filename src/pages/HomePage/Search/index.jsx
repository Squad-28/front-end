import React, { useState } from 'react';
import './style.css';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [tech, setTech] = useState('');

  return (
    <div className="grid justify-items-center">
      <section className="search container">
        <h1>Quero ajuda!</h1>
        <h2>Quais as habilidades necessárias?</h2>
        <p>Adicione as habilidades ou/e selecione abaixo</p>
        <input type="text" name="query" id="query" value={query} onChange={(e) => setQuery(e.target.value)} />

        <div className="techs">
          <span
            onClick={() => {
              setTech('Figma');
              onSearch(tech);
            }}
          >
            Figma
          </span>
          <span>Adobe XD</span>
          <span>HTML5</span>
          <span>NodeJS</span>
          <span>UX</span>
          <span>UI</span>
          <span>SQL</span>
          <span>Pesquisa com o usuário</span>
        </div>

        <div>
          <h2>Qual o seu nível de urgência?</h2>
          <div className="urgency">
            <span>Agora!</span>
            <span>Posso esperar!</span>
            <span>Tanto faz!</span>
          </div>
        </div>

        <button
          className="search-button"
          onClick={() => {
            onSearch(query);
          }}
        >
          Buscar
        </button>
      </section>
    </div>
  );
};

export default Search;
