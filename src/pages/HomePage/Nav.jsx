import React from 'react';

const Nav = ({ onLogout }) => {
  return (
    <div className="nav">
      <h1 className="logo">Technical Share</h1>
      <div className="nav-items">
        <p>Home</p>
        <button onClick={onLogout}>Sair</button>
      </div>
    </div>
  );
};

export default Nav;
