import { useState } from 'react'

import './App.css'
import Header from './Component/Header'
import { Routes, Route } from 'react-router-dom'


import Home from './Page/Home'
import Card from './Page/Card'
import ProductDetail from './Page/ProductDetail'
import { BasketProvider } from './context/BasketContext'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BasketProvider>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card" element={<Card />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
    </Routes>
    <Footer />
    </BasketProvider>
  )
}

export default App
