import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return(
        <nav className="App-header">
        <ul>
          <button><li><NavLink to='/kitties'>Kitties</NavLink></li></button>
          <button><li><NavLink to='/puppies'>Puppies</NavLink></li></button>
          <button><li><NavLink to='/iguanas'>Iguanas</NavLink></li></button>
        </ul>
        </nav>
    );

};

export default Nav;