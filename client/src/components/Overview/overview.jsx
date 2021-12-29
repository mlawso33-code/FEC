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
    <div style={{display: 'grid', gridTemplateColumns: '600 400'}}>
      {console.log("PRODUCT:::", product)}
      {console.log("StylesOVER:::", styles)}
      <OverviewContext.Provider value={{styles}}>
        <MainImg />
        <ProductOverview />
      </OverviewContext.Provider>
    </div>
  )
}

// {display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}

export default Overview