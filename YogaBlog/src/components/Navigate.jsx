import React from "react";
import { Link } from "react-router-dom";

const Navigate = () => {
  return (
    <nav className="nav_title">
      <ul className="nav_lists">
        <li className="nav_list">
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/articles">Список статей</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigate;
