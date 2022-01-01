import React, {useState, useEffect} from 'react'
import AppContext from './AppContext.jsx';
import axios from 'axios';
import Overview from '../Overview/Overview.jsx';
import Questions from '../Questions/Questions.jsx';
<<<<<<< HEAD
import RatingsAndReviews from '../Ratings&Reviews/Ratings&Reviews.jsx';
import Related from '../Related/Related.jsx';
=======
import Ratings from '../Ratings/ReviewList.jsx';
// import Related from '../Related/Related.jsx';
>>>>>>> a29e419aea0f0b2c0031fd5df38bd7f3c37ecabb


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
        {/* <Overview /> */}
        {/* <RelatedItems /> */}
        {/* <Questions /> */}
        <RatingsAndReviews />
      </AppContext.Provider>
    </div>
  )
}

export default App