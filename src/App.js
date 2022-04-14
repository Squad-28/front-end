import { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import { getUsers, getUser } from "./services/api";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import PerfilPage from "./pages/PerfilPage/index";
import CadastroPage from "./pages/CadastroPage/index";

function App() {
  const [users, setUsers] = useState([]);

  const loadData = async () => {
    try {
      
      const response = await getUsers();

      const { users } = response.data;
      setUsers(users);

    } catch (err) {
      console.error(err);

    }
  };

  useEffect(() => {
    (async () => await loadData())();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={<HomePage users={users} />}
        />
        <Route path="/profile" element={<PerfilPage />} />
        <Route path="/register" element={<CadastroPage />} />
      </Routes>
    </Router>
  );
}

export default App;
