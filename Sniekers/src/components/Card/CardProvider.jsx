import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const URL =
    "https://67d8614700348dd3e2a74a1c.mockapi.io/api/mach-17/cartItem";
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(URL);
        console.log(response.data);
        setCartItems(response.data);
      } catch (error) {
        console.error("Error receiving data", error);
      }
    };
    fetchCartItems();
  }, []);

  const addToCart = async (product) => {
    try {
      const response = await axios.post(URL, product);
      setCartItems((prevItem) => [...prevItem, response.data]);
    } catch (err) {
      console.error("Error adding item to the cart", err);
    }
  };

  const deleteFromCart = async (productId) => {
    try {
      await axios.delete(URL + `/${productId}`);
      setCartItems((prevItem) =>
        prevItem.filter((item) => item.id !== productId)
      );
    } catch (err) {
      console.error("Error deleting item from the cart", err);
    }
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export default CartProvider;
