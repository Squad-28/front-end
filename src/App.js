import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import PerfilPage from "./pages/PerfilPage/index";
import CadastroPage from "./pages/CadastroPage/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<PerfilPage />} />
        <Route path="/register" element={<CadastroPage />} />
      </Routes>
    </Router>
  );
}

export default App;
