import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import moment from 'moment';

import AppContext from '../App/AppContext.jsx';

const Header = (props) => {
  const [search, setSearch] = useState('')
  return (
    <div>
      <form className='header-search-wrapper'>
        <input className="headerSearch" type="text" placeholder="Search Product" value={search}
          onChange={(e) => {
            setSearch(event.target.value)
          }} />
        <i className="fas fa-search"></i>
      </form>
    </div>
  )
}
export default Header