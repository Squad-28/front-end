import { useState } from "react";
import Modal from "react-modal";
import { api } from "../../Services/api";

export function NewUserModal(isOpen, onRequestClose) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [level, setLevel] = useState("");
  const [description, setDescription] = useState("");

  function handleCreateNewUser(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      level,
      description,
    };

    api.post("/users", data);
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <button onClick={onRequestClose}>X</button>

      <form onSubmit={handleCreateNewUser}>
        <h2>Cadastrar Usuário</h2>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="text"
          placeholder="Level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </Modal>
  );
}
