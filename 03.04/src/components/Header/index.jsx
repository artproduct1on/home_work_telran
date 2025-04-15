import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './styles.module.css'

function Header() {
  return (
    <header className={s.header}>
      <nav>
        <ul className={s.list}>
          <li>
            <NavLink to="/">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;