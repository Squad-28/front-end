import { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import { getUsers, getUser } from "./services/api";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import PerfilPage from "./pages/PerfilPage/index";
import CadastroPage from "./pages/CadastroPage/index";

function App() {
  const [users, setUsers] = useState([]);
  const [userProfile, setUserProfile] = useState([]);

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

  const handleProfile = async (user) => {
    const userInArr = Object.assign([user]);

    const userP = await userInArr;

    //console.log(userP);

    setUserProfile(userP);
  };

  const loadProfile = async (userProfile) => {
    try {
      const response = await getUser(userProfile);
      // console.log(response);
      const { user } = response.data;
      // console.log(user);
      setUserProfile(user);
      // console.log(userPerfil);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    (async () => await loadProfile(userProfile))();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={<HomePage users={users} onProfilel={handleProfile} />}
        />
        <Route
          path="/profile"
          element={
            <PerfilPage
              userPerfil={userProfile}
              setUserPerfil={setUserProfile}
            />
          }
        />
        <Route path="/register" element={<CadastroPage />} />
      </Routes>
    </Router>
  );
}

export default App;
