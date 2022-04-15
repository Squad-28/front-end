/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Link } from "react-router-dom";

import FotoCadastro from "./assets/fotocadastro.svg";
import addIcon from "./assets/add-icon.svg";

import NavLogin from "../../components/NavLogin";

import "./style.css";
import { useState } from "react";

const registerSchema = yup
  .object({
    name: yup.string().required("O nome é obrigatório."),
    position: yup.string().required("O cargo é obrigatório."),
    email: yup
      .string()
      .email("Digite um email válido.")
      .required("O email é obrigatório."),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 digitos.")
      .required("A senha é obrigatória."),
  })
  .required();

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  
  const [userName, setUserName] = useState("");
  const [userPosition, setUserPosition] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userSkills, setUserSkills] = useState([]);

  const onRegister = (userData) => {
    console.log(userData);
  };

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
          <form onSubmit={handleSubmit(onRegister)}>
            <div className="register-field">
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
              />
              <span>{errors.name?.message}</span>
            </div>
            <div className="register-field">
              <label htmlFor="position">Cargo:</label>
              <input
                type="text"
                id="position"
                {...register("position", { required: true })}
              />
              <span>{errors.position?.message}</span>
            </div>
            <div className="register-field">
              <label htmlFor="email">Seu e-mail do Teams:</label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
              />
              <span>{errors.email?.message}</span>
            </div>
            <div className="register-field">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                {...register("password", { required: true })}
              />
              <span>{errors.password?.message}</span>
            </div>
            <div className="register-field">
              <label htmlFor="skills">Habilidades</label>
              <div className="register-field-addIcon">
                <input type="text" id="skills" />
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
                já possui conta? <Link to="/login">Logar.</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
