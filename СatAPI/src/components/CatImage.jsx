import axios from "axios";
import styles from "./CatImage.module.css";

import React, { useEffect, useState } from "react";

const CatImage = () => {
  const [imgCat, setImgCat] = useState("");
  useEffect(() => {
    fetchImgCat();
  }, []);
  const fetchImgCat = async () => {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      setImgCat(response.data[0].url);
    } catch (error) {
      console.log("Ошибка при загрузке изображения:", error);
    }
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Отображение случайных картинок</h2>
      <div className={styles.imgWrapper}>
        <img src={imgCat} alt="Random cat" className={styles.img} />
      </div>
      <button className={styles.btn} onClick={fetchImgCat}>
        Показать другую картинку
      </button>
    </div>
  );
};

export default CatImage;
