import React from 'react';
import './MenuNav.scss';
import { Link } from 'react-router-dom';

function MenuNav() {
  return (
    <ul className="menu-nav">
      <li><Link to="/">01</Link></li>
      <li><Link to="/list">02</Link></li>
    </ul>
  )
}

export default MenuNav;