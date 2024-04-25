import { Link, NavLink } from 'react-router-dom'
import './NavBar.scss'
import { useState } from 'react'
import Logo from './Logo'
import Hamburger from './Hmburger'
import LogoFull from '../assets/logo-full.png'
import LogoFullSolid from '../assets/logo-full-solid.png'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="containernav">
        <div className="logo">
          {/* <Logo /> */}
          <Link className="logo" to="/">
            <img
              className="logoFull"
              src={LogoFullSolid}
              alt="Fabian Retana"
              height="98px"
            ></img>
          </Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/acercade">Acerca de</NavLink>
            </li>
            {/* <li>
              <NavLink to="/habilidades">Habilidades</NavLink>
            </li> */}
            <li>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
