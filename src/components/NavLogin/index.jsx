import fcamaraLogo from './assets/fcamara-logo.png'

import './style.css'

const NavLogin = ({ onLogout }) => {
  return (
    <div className="navlogin">
      <div className="grid justify-items-center">
        <div className="container flex justify-between">
          <h1 className="navlogin-title py-6">Technical Share</h1>
          <img className="navlogin-image" src={fcamaraLogo} alt="logo FCamara" />
        </div>
      </div>
    </div>
  );
};

export default NavLogin;
