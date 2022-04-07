import React from 'react';
import Styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <div>
        <nav className="text-blue-600">
          <h1>Technical Share</h1>
        </nav>

        <ul>
          <li>
            <a href="#">
              <p>Home</p>
            </a>
          </li>

          <li>
            <a href="#">
              <p>Login</p>
            </a>
          </li>

          <li>
            <a href="#">
              <p>Quero ajuda</p>
            </a>
          </li>

          <li>
            <a href="#">
              <p>Quero me cadastrar</p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
