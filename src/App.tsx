import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { MenuBurger } from './elements/MenuBurger'
import './sass/index.scss'
import { Home } from './pages/Home'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Destinations } from './pages/Destinations'
import { Crew } from './pages/Crew'
import { Technology } from './pages/Technology'
import { NavModal } from './components/NavModal'

function App(): JSX.Element {

  return (
    <div className="app">
      <Header>
        <MenuBurger className='header__menu-toggle' />
        <Nav/>
      </Header>
      <NavModal />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destinations />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
      <Footer />
    </div>
  )
}

export { App }
