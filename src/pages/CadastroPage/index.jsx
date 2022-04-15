import FotoCadastro from "./assets/fotocadastro.svg";
import addIcon from "./assets/add-icon.svg";

import NavLogin from "../../components/NavLogin";

import "./style.css";

const Cadastro = () => {
  return (
    <div>
      <NavLogin />
      <div>
        <h2 className="register-title">
          bem-vindo ao <br />
          <span> Technical Share</span>
        </h2>
      </div>
      <div className="register-container">
        <div>
          <img src={FotoCadastro} alt="foto Cadastrar" />
        </div>
        <div className="register-content">
          <h1>Cadastro</h1>
          <p>Cadastrar sua conta</p>
          <form action="">
            <div className="register-field">
              <label htmlFor="Nome">Nome:</label>
              <input type="text" name="Nome" id="Nome" />
            </div>
            <div className="register-field">
              <label htmlFor="Cargo">Cargo:</label>
              <input type="text" name="Cargo" id="Cargo" />
            </div>
            <div className="register-field">
              <label htmlFor="Teams">Seu e-mail do Teams:</label>
              <input type="email" name="Teams" id="Teams" />
            </div>
            <div className="register-field">
              <label htmlFor="Senha">Senha</label>

              <input type=" password" name="Senha" id="Senha" />
            </div>
            <div className="register-field">
              <label htmlFor="Habilidades">Habilidades</label>

              <div className="register-field-addIcon">
                <input type="text" name="Habilidades" id="Habilidades" />
                <img src={addIcon} alt="" className="register-addIcon" />
              </div>

              <div className="register-field-skills">
                <ul>
                  {/*onClick add skill para knowledges*/}
                  <li>Figma</li>
                  <li>Figma</li>
                  <li>Figma</li>
                  <li>Figma</li>
                  <li>Figma</li>
                  <li>Figma</li>
                  <li>Figma</li>
                  <li>Figma</li>
                  <li>Figma</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
            <div className="register-actions">
              <button type="submit">Cadastrar</button>
            </div>
            <div className="register-login">
              <p>
                já possui conta? <a href="">Logar.</a>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
