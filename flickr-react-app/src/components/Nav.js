import React, {useUpdateData} from './Context';
import { NavLink} from 'react-router-dom';


const Nav = () => {
  const { setQuery } = useUpdateData();
    return (
        <nav className="main-nav">
        <ul>
          <button onClick={ () => setQuery('kitties')}><li><NavLink style={({isActive}) => { return { backgroundColor: isActive ? "pink" : "orange"} }} to='/kitties'>Kitties</NavLink></li></button>
          <button onClick={ () => setQuery('puppies')}><li><NavLink to='/puppies'>Puppies</NavLink></li></button>
          <button onClick={ () => setQuery('iguanas')}><li><NavLink to='/iguanas'>Iguanas</NavLink></li></button>
        </ul>
        </nav>
    );
};

export default Nav;