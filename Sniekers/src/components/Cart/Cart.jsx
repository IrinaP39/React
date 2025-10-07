import React from "react";
import { useCart } from "../Card/CardProvider";

const Cart = () => {
  const { cartItems, deleteFromCart } = useCart();
  return (
    <div>
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px",
              borderBottom: "1px solid #ccc",
            }}
          >
            {cartItems.map((item) => (
              <div>
                <div style={{ color: "black" }}>
                  <img
                    style={{ width: "300px", height: "250px" }}
                    src={item.image}
                    alt=""
                  />
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>
                <button
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#ff4444",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => deleteFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
