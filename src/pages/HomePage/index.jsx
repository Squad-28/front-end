import React from "react";

import "./styles.css";

import Nav from "./Nav";
import Search from "./Search";
import Mentors from "./Mentors";

const HomePage = () => {
  const handleLogout = () => {
    console.log("logout");
  };

  const handleSearch = (query) => {
    console.log(query);
  };

  return (
    <div id="home">
      <Nav onLogout={handleLogout} />
      <Search onSearch={handleSearch} on />
      <Mentors />
    </div>
  );
};

export default HomePage;
