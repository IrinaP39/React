import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import AllProducts from './pages/AllProducts/AllProducts'
import AllSales from './pages/AllSales/AllSales'
import Categories from './pages/Categories/Categories'
import MainPage from './pages/Main/MainPage'
import Basket from './pages/Basket/Basket'
import CategoryProducts from './pages/CategoryProducts/CategoryProducts'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Footer from './components/Footer/Footer'
import ErrorPage from './pages/Error/Error'


function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:categoryId" element={<CategoryProducts />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/item/:id" element={<ProductDetails />} />
          <Route path="/all_products" element={<AllProducts />} />
          <Route path="/all_sales" element={<AllSales />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
