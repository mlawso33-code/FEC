import React, { useState, useEffect } from 'react'
import AppContext from './AppContext.jsx';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import Overview from '../Overview/Overview.jsx';
import Questions from '../Questions/Questions.jsx';
import RatingsAndReviews from '../Ratings&Reviews/Ratings&Reviews.jsx';
// import Related from '../Related/Related.jsx';


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
        <Header />
        <Overview />
        {/* <RelatedItems /> */}
<<<<<<< HEAD
        <Questions />
=======
        {<Questions />}
>>>>>>> aeabec98f79f7eeeb62c9da92a0edb503d22898d
        <RatingsAndReviews />
      </AppContext.Provider>
    </div>
  )
}

export default App