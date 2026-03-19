
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faShoppingBasket, faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useBasket } from '../context/BasketContext'
import logo from '../img/logo.webp'

function Header() {
  const { basket } = useBasket();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
       
        <nav>
          <div className="logo">
            <img src={logo} alt="My App Logo" />
          </div>
          <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <ul className={isMenuOpen ? 'nav-links open' : 'nav-links'}>
            <li><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
            <li><Link to="/card"><FontAwesomeIcon icon={faShoppingBasket} /> Basket {basket.length > 0 && <span className="basket">{basket.length}</span>}</Link></li>
            <li className="search-li">
              <div className="search-input-container">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                <input type="text" placeholder="Search..." />
              </div>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Header