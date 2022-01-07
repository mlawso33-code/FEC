import React, { useState, useEffect, useContext } from 'react';
import { FaCartArrowDown } from 'react-icons/fa';

import AppContext from '../App/AppContext.jsx';

const Header = (props) => {
  const [search, setSearch] = useState('')
  return (
    <div className='header'>
      <p className="title">
        Nanya
      </p>
      <p className='tagline'>
        Shopping with great power
      </p>

      <FaCartArrowDown className='cartIcon' />

        <input className="headerSearch" type="text" placeholder="Search Product" value={search}
          onChange={(e) => {
            setSearch(event.target.value)
          }} />
          {/* <i className="fas fa-search searchIcon"></i> */}
    </div>



  )
}
export default Header