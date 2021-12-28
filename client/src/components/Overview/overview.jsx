import React, {useState, useEffect, useContext} from 'react';
import AppContext from '../App/AppContext.jsx';
import OverviewContext from './OverviewContext.jsx'
import axios from 'axios';
import MainImg from './ImageGallery/MainImg.jsx';
import ProductOverview from './ProductInfo/ProductOverview.jsx'

const Overview = () => {
  const { product } = useContext(AppContext)
  const [styles, setStyles] = useState([]);
  // const [related, setRelated] = useState([]);

  function fetchStyles() {
    axios.get(`api/products/${product.id}/styles`)
    .then(response => setStyles(response.data.results))
  }

  useEffect(() => {
    if(JSON.stringify(product) !== '{}') {
      fetchStyles()
    }
  }, [product])




  return (
    <div>
      {console.log("PRODUCT:::", product)}
      {console.log("StylesOVER:::", styles)}
      <OverviewContext.Provider value={{styles}}>
        <ProductOverview />
        <MainImg />
      </OverviewContext.Provider>
    </div>
  )
}

export default Overview