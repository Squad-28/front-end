import React, { useState } from "react";

import { Link } from "react-router-dom";

import addIcon from "./assets/add-icon.svg";

import "./style.css";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="grid justify-items-center py-20 pl-28">
      <section className="search container">
        <h1>Quero ajuda!</h1>
        <h2 className="pt-10">Quais as habilidades necessárias?</h2>
        <p>Adicione as habilidades ou/e selecione abaixo</p>
        <div className="search-input">
          <img
            src={addIcon}
            alt="adicionar tecnologia"
            className="search-add-icon"
          />
          <input
            className="my-3"
            type="text"
            name="query"
            id="search-query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="search-techs">
          <ul>
            <li>Figma</li>
            <li>Adobe XD</li>
            <li>HTML5</li>
            <li>Scrum</li>
            <li>UI</li>
            <li>javascript</li>
            <li>Cominucação</li>
            <li>Agile</li>
          </ul>
        </div>

        <div className="search-urgency mt-20">
          <h2>Qual o seu nível de urgência?</h2>
          <p className="mb-5">
            Os perfils abaixo serão filtrados com base na sua urgência
          </p>
          <div className="flex flex-col">
            <button className="search-help-btn"> Quero ajuda agora !</button>

            <button className="search-help-btn">Quero agendar !</button>
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
