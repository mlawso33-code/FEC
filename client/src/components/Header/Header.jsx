import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import moment from 'moment';

import AppContext from '../App/AppContext.jsx';

const Header = (props) => {
  const [search, setSearch] = useState('')
  // const shoes = props.product.filter((item) => {
  //   item.name.toLowerCase().includes('shoe')
  // })

/* need to come up with a design on how we want products to be found.
  shoes is just an example of a dropdown list for all shoe products */

  return (
    <div style={header}>
      {/* <label for="shoes">Shoes</label>
      <select name="shoes">
        {shoes.map((shoe =>
          <option>
            {shoe}
          </option>))}
      </select> */}
      <form>
        <input style={inputStyle} type="text" placeholder="Search Product" value={search}
          onChange={(e) => {
            setSearch(event.target.value)
          }} />
        <button type="submit" style={buttonStyle}><i className="fas fa-search"></i></button>
      </form>
    </div>
  )
}

export default Header

const header = {
  display:"block",
  background:"black",
  width:"100%",

}
const inputStyle = {
  display:"inline-block",
  padding: "5px",
  fontSize: "17px",
  borderBottom: "4px solid grey",
  width: "50%",
  background: "black"

}
const buttonStyle = {
  display:"inline-block",
  float:"right",
  width: "auto",
  padding: "5px",
  background: "black",
  color: "white",
  fontSize: "17px",
  cursor: "pointer"
}