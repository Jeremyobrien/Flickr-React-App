import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return(
        <nav className="main-nav">
        <ul>
          <li><NavLink to='/kitties'>Kitties</NavLink></li>
          <li><NavLink to='/puppies'>Puppies</NavLink></li>
          <li><NavLink to='/iguanas'>Iguanas</NavLink></li>
        </ul>
        </nav>
    );

};

export default Nav;