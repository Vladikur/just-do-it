import React from 'react';
import { NavLink } from 'react-router-dom';


function Header() {


  return (
    <header className="header">
      <NavLink to="/" className="header__link">О приложении</NavLink>
      <NavLink to="/todos" className="header__link">To do лист</NavLink>
    </header>
  );
}

export default Header;
