import React from 'react';
import './style.css';
import Teams from '../assets/bxl_microsoft-teams.svg';

const CardUser = () => {
  return (
    <div class="card">
      <div class="container flex flex-col">
        <div className="flex justify-end">
          <span class="dot mt-3 "></span>
        </div>
        <div className="grid justify-items-center">
          <span class="foto mb-8"></span>
          <h1 className='cardNames'>Bruno Souza</h1>
          <h3>UX Designer</h3>
          <div className="teams flex justify-center my-4">
            <img className='my-1' src={Teams} alt="icone Teams" />
          </div>
          <p className="skills my-3">Habilidades</p>
          <div className="techs-card ">
            <ul>
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>HTML</li>
              <li>Scrum</li>
              <li>Rapidão</li>
              <li>Ninja</li>
            </ul>
          </div>
          <p className="skills mt-10">Disponibilidade</p>
          <p className="detalhe">agora</p>
          <button className="my-9">Conectar!</button>
        </div>
      </div>
    </div>
  );
};

export default CardUser;
