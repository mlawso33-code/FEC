import React, {useState, useEffect, useContext} from 'react';
import AppContext from '../App/AppContext.jsx';
import OverviewContext from './OverviewContext.jsx'
import axios from 'axios';
import MainImg from './ImageGallery/MainImg.jsx';
import ProductOverview from './ProductInfo/ProductOverview.jsx'

const Overview = () => {
  const { product } = useContext(AppContext)
  const [styles, setStyles] = useState([]);
  const [cart, setCart] = useState([]);
  // if (styles.length) {
  //   const [currentStyle, setCurrentStyle] = useState(styles[0]);
  // }

  const [currentStyle, setCurrentStyle] = useState();
  const [currentPic, setCurrentPic] = useState();
  const [price, setPrice] = useState();
  const [sale, setSale] = useState(false);
  // const [related, setRelated] = useState([]);

  function fetchStyles() {
    axios.get(`api/products/${product.id}/styles`)
    .then((response) => {
      setStyles(response.data.results)
      setCurrentStyle(response.data.results[0])
    })
    // .then (() => console.log('fetch test::', styles))
    // why isn't styles set here?
  }

  useEffect(() => {
    if(JSON.stringify(product) !== '{}') {
      fetchStyles()
    }
  }, [product])

  useEffect(() => {
    if(JSON.stringify(styles) !== '[]') {
      setCurrentStyle(styles[0])
    }
  }, [product])

  useEffect(() => {
    if(currentStyle) {
      setCurrentPic(currentStyle.photos[0].url)
    }
  }, [currentStyle])

  useEffect(() => {
    if(currentStyle) {
      if (currentStyle.sale_price) {
        setPrice(currentStyle.sale_price)
        setSale(true)
      } else {
        setPrice(currentStyle.original_price)
        setSale(false)
      }
    }
  }, [currentStyle])

  return (
    <div className='overviewDiv'>
      <OverviewContext.Provider value={{styles, currentStyle, setCurrentStyle, currentPic, setCurrentPic, cart, setCart, price, setPrice, sale, setSale}}>
        <MainImg />
        <ProductOverview />
      </OverviewContext.Provider>
    </div>
  )
}

export default Overview