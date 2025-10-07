import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CartProvider from "./components/Card/CardProvider";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <CartProvider>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </>
    </CartProvider>
  );
}

export default App;
