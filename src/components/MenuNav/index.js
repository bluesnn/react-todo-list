import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function MenuNav() {
  return (
    <ul className="menu-nav">
      <li><Link to="/">01</Link></li>
      <li><Link to="/list">02</Link></li>
    </ul>
  )
}

export default MenuNav;