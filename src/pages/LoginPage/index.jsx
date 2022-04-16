import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Link } from "react-router-dom";

import NavLogin from "../../components/NavLogin";
import FotoLogin from "./../../components/assets/foto-login.svg";

import "./styles.css";

const loginSchema = yup
  .object({
    email: yup
      .string()
      .email("Digite um email válido.")
      .required("O email é obrigatório."),
    password: yup.string().required("A senha é obrigatória."),
  })
  .required();

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (userData) => {
    console.log(userData);
  };

  return (
    <div>
      <NavLogin />

      <div>
        <h2 className="login-title">
          bem-vindo ao <br />
          <span>Technical Share</span>
        </h2>
      </div>
      <div className="login-container">
        <div>
          <img src={FotoLogin} alt="foto login" />
        </div>
        <div className="login-content">
          <h1>Login</h1>
          <p>Insira suas informações para realizar o login.</p>
          <form onSubmit={handleSubmit(onLogin)}>
            <div className="login-field">
              <label htmlFor="email">E-mail:</label>
              <input
                type="text"
                id="email"
                {...register("email", { required: true })}
              />
              <span>{errors.email?.message}</span>
            </div>

            <div className="login-field">
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                id="password"
                {...register("password", { required: true })}
              />
              <span>{errors.password?.message}</span>
            </div>

            <div className="login-actions">
              <button type="submit">Entrar</button>
            </div>
            <div className="login-register">
              <p>
                Não possui conta? <Link to="/register">Cadastre-se.</Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
