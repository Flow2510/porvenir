import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Localisation from './pages/localisation'
import Reservation from './pages/reservation'
import Rooms from './pages/rooms'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { useState } from 'react'

function App() {
  const [language, setLanguage] = useState("FR")

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home setLanguage={setLanguage} />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/localisation' element={<Localisation />}/>
        <Route path='/reservation' element={<Reservation />}/>
        <Route path='/rooms' element={<Rooms />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
