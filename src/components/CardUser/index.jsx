import "./style.css";
import Teams from "../assets/bxl_microsoft-teams.svg";

import { useState } from "react";

import ConfirmModal from "../ConfirmModal";

const CardUser = ({ users, onProfile }) => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [teamsEmail, setTeamsEmail] = useState("");

  const handleOpenConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  const handleCloseConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };

  const handleSubmit = (user) => {
    //console.log(user.email);
    setTeamsEmail(`https://teams.microsoft.com/l/chat/0/0?users=${user.email}`)

  };

  return (
    <>
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onRequestClose={handleCloseConfirmModal}
        onTeams={teamsEmail}
      />
      {users.map((user) => (
        <div key={user.id} className="card-container">
          <div className="container flex flex-col">
            <div className="flex justify-end">
              <span className="dot mt-3 "></span>
            </div>
            <div className="grid justify-items-center">
              <span className="card-picture mb-8">
                <img src={user.image} alt="" />
              </span>
              <div className="card-name">
                <h1>{user.name}</h1>
              </div>
              <h3>{user.level}</h3>
              <div className="card-teams flex justify-center my-4">
                <img className="my-1" src={Teams} alt="ícone Teams" />
              </div>
              <p className="card-skills-title my-3">Habilidades</p>
              <div className="card-skills-techs">
                <ul>
                  {user.knowledges.map((knowledge, index) => (
                    <li key={index}>{knowledge.name}</li>
                  ))}
                </ul>
              </div>
              <p className="card-skills-p mt-10">Disponibilidade</p>
              <p className="card-now">agora</p>
              <button
                className="card-button my-9"
                onClick={() => {
                  handleOpenConfirmModal();
                  handleSubmit(user);
                }}
              >
                Conectar!
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardUser;
