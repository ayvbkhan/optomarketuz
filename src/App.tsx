import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './Components/UI/Footer/Footer'
import { Header } from './Components/UI/Header/Header'
import { About } from './Pages/About/About'
import { Main } from './Pages/Main/Main'
import { Products } from './Pages/Products/Products'
import { SalesPage } from './Pages/SalesPage/SalesPage'
import LoginPage from './Pages/LoginPage/LoginPage'

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
