import { Link } from "react-router-dom";

import FotoPerfil from "../assets/fotoPerfil.svg";

import "./style.css";

const Nav = ({ onLogout }) => {
  return (
    <div className="nav">
      <div className="grid justify-items-center">
        <div className="container flex justify-between">
          <Link to="/">
            <h1 className="nav-title py-6">Technical Share</h1>
          </Link>
          <div className="nav-items flex  items-center px-14">
            <ul className="flex flex-row items-center gap-10">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/register">quero ser mentor</Link>
              </li>
              <li>
                <Link to="/profile">
                  <img src={FotoPerfil} alt="foto de pefil" width={42} />
                </Link>
              </li>
              <li>
                <p>
                  Olá, <span id="nav-username">Clarisa!</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
