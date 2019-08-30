import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function MenuNav() {
  return (
    <ul className="menu-nav">
      <li><Link to="/">todo-list</Link></li>
      <li><Link to="/hoc">HOC</Link></li>
      <li><Link to="/cart">Cart</Link></li>
      <li><Link to="/class-component">class</Link></li>
      <li><Link to="/hook-component">Hook</Link></li>
    </ul>
  )
}

export default MenuNav;