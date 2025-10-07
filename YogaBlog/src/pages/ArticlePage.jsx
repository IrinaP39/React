import React from "react";
import { useParams } from "react-router-dom";
import Navigate from "../components/Navigate";
import NavBtn from "../components/NavBtn";

const ArticlePage = () => {
  const { id } = useParams();

  const articleData = {
    1: "Йога – это древняя практика, которая основана на философии и включает в себя физические упражнения, дыхательные техники и медитацию.",
    2: "Йога учит нас расслабляться, чередовать активность и отдых. ",
    3: "В йоге десятки стилей и направлений. Занятия йогой сильно отличаются по формату и интенсивности, но в целом это сочетание движений тела и дыхания. ",
    4: "Йога – это процесс, и важно слушать свое тело и не перенапрягаться. Регулярная практика поможет вам постепенно улучшать гибкость, силу и спокойствие. Также, если у вас есть возможность, рекомендуется посетить классы йоги с опытным инструктором, чтобы получить более подробные указания и коррекцию.",
  };

  const content = articleData[id] || "Статья не найдена.";

  return (
    <div>
      <h2 className="article_title">Статья {id}</h2>
      <p className="article_content">{content}</p>
      <NavBtn />
    </div>
  );
};

export default ArticlePage;
