import React, { useState, useEffect, useContext } from 'react';
import { FaCartArrowDown } from 'react-icons/fa';

import AppContext from '../App/AppContext.jsx';

const Header = ({ headerSelect }) => {
  return (
    <div className='header'>
      <p className="title">
        Nanya
      </p>
      <p className='tagline'>
        Shopping with great power
      </p>

      <FaCartArrowDown className='cartIcon' />
      <select id="products" onChange={headerSelect}>
        <option value="44388">Camo Onesie</option>
        <option value="44390">Morning Joggers</option>
        <option value="44391">Slackers Slacks</option>
        <option value="44392">Heir Force Ones</option>
      </select>
    </div>
  )
}
export default Header