import React from "react";
import { useNavigate } from "react-router-dom";

const NavBtn = () => {
  const navigateArticle = useNavigate();
  const handleArticle = () => {
    navigateArticle("/articles");
  };
  return (
    <div>
      <button className="nav_Btn" onClick={handleArticle}>
        Вернуться к списку статей
      </button>
    </div>
  );
};

export default NavBtn;
