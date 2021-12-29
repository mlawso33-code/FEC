import React, {useState, useEffect} from 'react'
import AppContext from './AppContext.jsx';
import axios from 'axios';
import Overview from '../Overview/Overview.jsx';
import Questions from '../Questions/Questions.jsx';
import Ratings from '../Ratings/ReviewList.jsx';
import Related from '../Related/Related.jsx';


const App = () => {
  const [product, setProduct] = useState({});

  function fetchProduct(product_id) {
    axios.get(`/api/products/${product_id}`)
      .then(response => setProduct(response.data))

  }

  useEffect(() => {
    fetchProduct(44388)
  }, [])


  return (
    <div>
      <AppContext.Provider value={{
        product
      }} >
        <Overview />
        {/* <RelatedItems /> */}
        <Questions />
        <Ratings />
      </AppContext.Provider>
    </div>
  )
}

export default App