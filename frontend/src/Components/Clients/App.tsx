import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import HomePage from './Pages/HomePage/HomePage'
import ProductsPage from './Pages/ProductPage/ProductsPage'
import ProductPage from './HomePage/ProductPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import AgriviewPage from './Pages/AgriviewPage/AgriviewPage'
import ShoppingBox from './HomePage/ShoppingBox'


function App() {

  return (
    <div className="app-container">
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/agriviews" element={<AgriviewPage />} />
        <Route path="/shoppingbox" element={<ShoppingBox />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
  
      
    </div>
  )
}

export default App
