import React from "react";
import "./styles.css";

import Nav from "../../components/Nav";
import Search from "./Search";
import Mentors from "./Mentors";

const HomePage = ({ users, onProfile }) => {
  const handleLogout = () => {
    console.log("logout");
  };

  const handleSearch = (query) => {
    console.log(query);
  };

  return (
    <div id="home">
      <Nav onLogout={handleLogout} />
      <Search onSearch={handleSearch} />
      <Mentors users={users} onProfile={onProfile} />
    </div>
  );
};

export default HomePage;
