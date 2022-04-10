import React from 'react';
import Apis from '../Apis';

const Userpost = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [nivel, setNivel] = React.useState('');
  const [conhecimento, setConhecimento] = React.useState('');
  const [descricao, setDescricao] = React.useState('');
  function handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:5500/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
        nivel,
        conhecimento,
        descricao,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Nome</label>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <input
        type="text"
        placeholder="Nivel"
        value={nivel}
        onChange={({ target }) => setNivel(target.value)}
      />

      <input
        type="text"
        placeholder="Conhecimento"
        value={conhecimento}
        onChange={({ target }) => setConhecimento(target.value)}
      />
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={({ target }) => setDescricao(target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default Userpost;
