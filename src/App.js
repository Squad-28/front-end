import { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { getUsers, getUser } from "./services/api";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage/index";
import CadastroPage from "./pages/CadastroPage/index";

function App() {
  const [users, setUsers] = useState([]);
  const [userProfile, setUserProfile] = useState([]);

  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  const loadData = async () => {
    try {
      setLoading(true);

      const response = await getUsers();

      const { users } = response.data;

      setUsers(users);

      setLoading(false);
    } catch (err) {
      console.error(err);

      return setLoadingError(true);
    }
  };

  useEffect(() => {
    (async () => await loadData())();
  }, []);

  const handleProfile = async (user) => {
    setLoading(true);

    const userInArr = Object.assign([user]);

    const userP = await userInArr;

    //console.log(userP);

    setUserProfile(userP);

    setLoading(false);
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

      return setLoadingError(true);
    }
  };

  useEffect(() => {
    (async () => await loadProfile(userProfile))();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <p>Carregando...</p>
      </div>
    );
  }

  if (loadingError) {
    return (
      <div className="loading">
        <p>Erro ao carregar dados.</p>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={<HomePage users={users} onProfile={handleProfile} />}
        />
        <Route
          path="/profile"
          element={
            <ProfilePage
              userProfile={userProfile}
              setUserProfile={setUserProfile}
            />
          }
        />
        <Route path="/register" element={<CadastroPage />} />
      </Routes>
    </Router>
  );
}

export default App;
