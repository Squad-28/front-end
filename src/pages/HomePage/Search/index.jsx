import React, { useState } from 'react';
import './style.css';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [tech, setTech] = useState('');

  return (
    <div className="grid justify-items-center py-20 pl-28">
      <section className="search container">
        <h1>Quero ajuda!</h1>
        <h2 className="pt-10">Quais as habilidades necessárias?</h2>
        <p>Adicione as habilidades ou/e selecione abaixo</p>
        <input
          className="my-5"
          type="text"
          name="query"
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="techs">
          <ul>
            <li>Figma</li>
            <li>Adobe XD</li>
            <li>HTML</li>
            <li>Scrum</li>
            <li>UI</li>
            <li>javascript</li>
            <li>Cominucação</li>
            <li>Agile</li>
          </ul>
        </div>

        <div className="urgencia mt-20">
          <h2>Qual o seu nível de urgência?</h2>
          <p className="mb-5">Os perfils abaixo serão filtrados com base na sua urgência</p>
          <div className="flex flex-col">
            <span>
              <a>Quero ajuda agora !</a>
            </span>
            <span>
              <a>Quero agendar !</a>
            </span>
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
