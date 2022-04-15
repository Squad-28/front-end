import { Link } from 'react-router-dom';

import FotoPerfil from '../assets/fotoPerfil.svg';

import './style.css';

const Nav = ({ onLogout }) => {
  return (
    <div className="nav">
      <div className="grid justify-items-center">
        <div className="container flex justify-between">
          <Link to="/">
            <h1 className="nav-title py-6">Technical Share</h1>
          </Link>
          <div className="  sm:nav-items flex items-center px-14">
            <ul className=" sm:flex flex-row items-center gap-10">
              <li className="flex justify-center pb-2">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/register" className="flex text-center pb-2 ">
                  quero ser mentor
                </Link>
              </li>
              <li className="flex justify-center pb-2">
                <Link to="/profile" className="flex justify-center pb-2">
                  <img src={FotoPerfil} alt="foto de pefil" width={42} />
                </Link>
              </li>
              <li className="flex justify-center pb-2">
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
