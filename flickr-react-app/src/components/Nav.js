import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  
    return (
        <nav className="main-nav">
        <ul>
          <button onClick={ () => props.handleClick('kitties')}><li><NavLink style={({isActive}) => { return { backgroundColor: isActive ? "pink" : "orange"} }} to='/kitties'>Kitties</NavLink></li></button>
          <button onClick={ () => props.handleClick('puppies')}><li><NavLink to='/puppies'>Puppies</NavLink></li></button>
          <button onClick={ () => props.handleClick('iguanas')}><li><NavLink to='/iguanas'>Iguanas</NavLink></li></button>
        </ul>
        </nav>
    );

};

export default Nav;