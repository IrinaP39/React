import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home_container">
      <h1 className="home_title">Добро пожаловать на наш сайт</h1>
      <p className="home_content">Читайте интересные статьи о Йоге.</p>
      <Link to="/articles">Перейти к списку статей</Link>
    </div>
  );
};

export default HomePage;
