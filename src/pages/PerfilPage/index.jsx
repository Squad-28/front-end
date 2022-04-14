import { useEffect, useState } from "react";

import infoIcon from "./assets/info-icon.svg";
import toggleIcon from "./assets/toggle.svg";

import Nav from "../../components/Nav";

import "./styles.css";

const PerfilPage = ({ userProfile, setUserProfile }) => {

  return (
    <div>
      <Nav />
      {userProfile.map((user) => (
        <>
          <h1 key={user.id} className="profile-title">Meu Perfil</h1>
          <div className="profile-container">
            <header className="profile-header">
              <div className="image-container">
                <div className="image">
                  <img src={user.image} className="profile-image" alt="" />
                </div>
              </div>
              <div className="teste">
                <div className="profile-content">
                  <div className="welcome">
                    <h2>
                      Bem vindo, <span>{user.name}</span>
                    </h2>
                    <p>editar informações</p>
                  </div>
                </div>
                <div className="infos">
                  <h3>Cargo</h3>
                  <p>{user.level}</p>
                  <h3>Contato</h3>
                  <p>{user.email}</p>
                  <div className="info-skills">
                    <h3>Habilidades</h3>
                    <div className="info-skills-items">
                      <ul>
                        {user.knowledges.map((knowledge) => (
                          <li key={knowledge.name}>{knowledge.name}</li>
                        ))}
                      </ul>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className="mentorship">
                  <h2>Mentoria</h2>
                  <div className="mentorship-status">
                    <div className="mentorship-status-line1">
                      <h3>Ficar disponível agora</h3>
                      <img src={infoIcon} alt="info icon" />
                    </div>
                    <div className="mentorship-status-line2">
                      <img src={toggleIcon} alt="toogle button" />
                      <p>Offine</p>
                    </div>
                    <div className="mentorship-schedule">
                      <h3>Horários disponibilizados para agendamento</h3>
                      <p>adicionar um horário</p>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </>
      ))}
    </div>
  );
};

export default PerfilPage;