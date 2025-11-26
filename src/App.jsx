import { Route, Routes, Navigate } from 'react-router-dom'
import './App.scss'
import Home from './pages/home'
import Reservation from './pages/reservation'
import Auberge from './pages/auberge'
import Locations from './pages/locations'
import Contact from './pages/contact'
import Header from './assets/components/header/header'
import Activities from './pages/activities'
import Footer from './assets/components/footer/footer'

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/accueil" replace />} />
          <Route path='/accueil' element={<Home />}/>
          <Route path='/auberge' element={<Auberge />}/>
          <Route path='/locations' element={<Locations />}/>
          <Route path='/activities' element={<Activities />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/reservation' element={<Reservation />}/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
