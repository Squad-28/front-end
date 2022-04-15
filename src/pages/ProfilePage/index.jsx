import infoIcon from "./assets/info-icon.svg";
import toggleIcon from "./assets/toggle.svg";

import Nav from "../../components/Nav";

import "./styles.css";

const ProfilePage = ({ userProfile, setUserProfile }) => {
  console.log(userProfile);

  const dataFake = [
    {
      id: "1",
      name: "lucas",
      email: "lucas@email",
      password: "senha",
      image: "https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
      level: "novato",
      knowledges: [
        {
          name: "html",
        },
        {
          name: "css"
        }
      ]
    },
  ];

  return (
    <div>
      <Nav />
      {dataFake.map((user) => (
        <>
          <h1 key={user.id} className="profile-title">
            Meu Perfil
          </h1>
          <div className="profile-container">
            <header className="profile-header">
              <div>
                <div className="profile-image-container">
                  <img src={user.image} className="profile-image" alt="" />
                </div>
              </div>
              <div className="profile-info-container">
                <div>
                  <div className="profile-info-welcome">
                    <h2>
                      Bem vindo, <span>{user.name}</span>
                    </h2>
                    <p>editar informações</p>
                  </div>
                </div>
                <div className="profile-info-skills">
                  <h3>Cargo</h3>
                  <p>{user.level}</p>
                  <h3>Contato</h3>
                  <p>{user.email}</p>
                  <div className="profile-info-skills-content">
                    <h3>Habilidades</h3>
                    <div className="profile-info-skills-items">
                      <ul>
                        {user.knowledges.map((knowledge) => (
                          <li key={knowledge.name}>{knowledge.name}</li>
                        ))}
                      </ul>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className="profile-mentorship">
                  <h2>Mentoria</h2>
                  <div className="profile-mentorship-status">
                    <div className="profile-mentorship-status-line1">
                      <h3>Ficar disponível agora</h3>
                      <img src={infoIcon} alt="info icon" />
                    </div>
                    <div className="profile-mentorship-status-line2">
                      <img src={toggleIcon} alt="toogle button" />
                      <p>Offine</p>
                    </div>
                    <div className="profile-mentorship-schedule">
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

export default ProfilePage;
