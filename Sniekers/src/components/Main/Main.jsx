import React, { useEffect, useState } from "react";
import cls from "./Main.module.css";
import banner from "../../assets/images/Banner.jpg";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
const Main = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://67d8614700348dd3e2a74a1c.mockapi.io/api/mach-17/cart"
        );
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error receiving data");
      }
    };
    fetchProducts();
  }, []);

  return (
    <main className={cls.main}>
      <section className={cls.news}>
        <img src={banner} alt="banner" />
      </section>
      <h2>Sneakers</h2>
      <div className={cls.products}>
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </main>
  );
};

export default Main;
