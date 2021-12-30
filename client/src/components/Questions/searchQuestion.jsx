// import React, { useState, useEffect, useContext } from 'react';
// import AppContext from '../App/AppContext.jsx';


// const SearchQuestion = () => {
//   const [search, setSearch] = useState('')
//   const afterThree = search.split('').slice(3, search.length-1).join('')

//   return (
//     <div style={{ display: "block" }}>
//       <form>
//         <input style={inputStyle} type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." value={search}
//           onChange={(e) => {
//             setSearch(event.target.value)
//           }}/>
//         <button type="submit" style={buttonStyle}><i className="fas fa-search"></i></button>
//       </form>
//     </div>
//   )
// }

// export default SearchQuestion


// const inputStyle = {
//   padding: "10px",
//   fontSize: "17px",
//   border: "1px solid grey",
//   width: "80%",
//   background: "#f1f1f1"

// }
// const buttonStyle = {
//   width: "auto",
//   padding: "10px",
//   background: "black",
//   color: "white",
//   fontSize: "17px",
//   cursor: "pointer"
// }