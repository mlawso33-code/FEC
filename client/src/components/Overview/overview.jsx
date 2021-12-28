import React, {useState, useEffect, useContext} from 'react';
import AppContext from '../App/AppContext.jsx';
import axios from 'axios';
import MainImg from './MainImg.jsx';

const Overview = () => {
  const { product } = useContext(AppContext)
  const [styles, setStyles] = useState([]);
  // const [related, setRelated] = useState([]);

  function fetchStyles() {
    axios.get(`api/products/44388/styles`)
    .then(response => setStyles(response.data.results))
  }

  // function fetchRelated() {
  //   axios.get(`api/products/44388/related`)
  //       .then(related => setRelated(related.data))
  // }

  useEffect(() => {
    if(JSON.stringify(product) !== '{}') {
      fetchStyles()
    }
  }, [product])




  return (
    <div>
      {/* <AppContext.Provider value={{
        product, styles
      }}
      {...styles.length &&
        <MainImg styles={styles}/>}
      /> */}

      {console.log("STYLES:::", styles[0])}

      <h2>Product Overview</h2>
      <div>{product.name}</div>
      {styles.length &&
        <MainImg style={styles[0]}/>}
    </div>
  )
}

export default Overview