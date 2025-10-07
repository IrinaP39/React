import React from "react";
import { Link } from "react-router-dom";
import Navigate from "../components/Navigate";

const ArticlesListPage = () => {
  const articles = [
    { id: "1", title: "Что такое йога" },
    { id: "2", title: "Польза йоги" },
    { id: "3", title: "Виды и направления йоги" },
    { id: "4", title: "Советы для начинающих" },
  ];

  return (
    <div>
      <h2 className="article_list_title">Список статей</h2>
      <ul className="nav_lists">
        <Link to="/">Главная</Link>
        {articles.map((article) => (
          <li className="nav_list" key={article.id}>
            <Link to={article.id}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ArticlesListPage;
