import { useState, useEffect } from "react";
import { api } from "../../Services/api";

export function UsersTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("users").then((res) => setUsers(res.data.users));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Level</th>
          <th>Descrição</th>
        </tr>
      </thead>

      <tbody>
        {users.map((id, nome, email, level, description) => (
          <tr key={id}>
            <td>{nome}</td>
            <td>{email}</td>
            <td>{level}</td>
            <td>{description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
