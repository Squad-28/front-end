import "./style.css";
import Teams from "../assets/bxl_microsoft-teams.svg";

import { Link } from "react-router-dom";

const CardUser = ({ users, onProfile }) => {
  return (
    <>
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
                <img className="my-1" src={Teams} alt="icone Teams" />
              </div>
              <p className="card-skills-title my-3">Habilidades</p>
              <div className="card-skills-techs">
                <ul>
                  {user.knowledges.map((knowledge) => (
                    <li key={knowledge.name}>{knowledge.name}</li>
                  ))}
                </ul>
              </div>
              <p className="card-skills-p mt-10">Disponibilidade</p>
              <p className="now">agora</p>
              <Link to="/perfil">
                {" "}
                <button className="my-9" onClick={() => onProfile(user)}>
                  Conectar!
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardUser;
