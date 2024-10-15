import React from 'react'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Coins from './components/Coins'
import CoinDetails from './components/CoinDetails'
import Exchange from './components/Exchange'
import Home from './components/Home'
import Footer from './components/Footer'







const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/coins' element={<Coins/>}/>
        <Route exact path='/coins/:id' element={<CoinDetails/>}/>
        <Route exact path='/exchange' element={<Exchange/>}/>

      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
