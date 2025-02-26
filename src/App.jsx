import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Styles
import './App.css'

// Pages
import ContactPage from"./pages/ContactPage/ContactPage"
import AboutPage from "./pages/AboutPage/AboutPage"
import DetailPage from "./pages/DetailPage/DetailPage"
import CategoryPage from "./pages/CategoryPage/CategoryPage"
import CartPage from "./pages/CartPage/CartPage"
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage"
import ErrorPage from "./pages/ErrorPage/ErrorPage"

//Components
import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {ItemsProvider} from "./components/ItemContext/ItemContext"

function App() {
  return (
    <>
    <ItemsProvider>
      <Router>
        <Header />
        <NavBar />
          <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<DetailPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/category/:categoryId" element={<CategoryPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/checkout" element={<CheckoutPage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </ItemsProvider>
    </>
  )
}

export default App
