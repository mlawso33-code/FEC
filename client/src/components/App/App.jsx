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
  const [metaData, setMetaData] = useState({})
  const averageRating = getAvgRating(metaData.ratings)

  function fetchProduct(product_id) {
    axios.get(`/api/products/${product_id}`)
      .then(response => setProduct(response.data))

  }

  function fetchMetaData() {
    axios.get(`/api/reviews/meta/?product_id=${product.id}`)
      .then(response => setMetaData(response.data))
  }

  function getAvgRating(ratings) {
    let totalStars = 0
    let totalRatings = 0

    for (let star in ratings) {
      totalStars += star * Number(ratings[star])
      totalRatings += Number(ratings[star])
    }

    return (Math.round((totalStars / totalRatings) * 10) / 10).toString()
  }

  useEffect(() => {
    fetchProduct(44388)
  }, [])

  useEffect(() => {
    if(JSON.stringify(product) !== '{}') {
      fetchMetaData()
    }
  }, [product])

  return (
    <div>
      <AppContext.Provider value={{
        product, metaData, averageRating
      }} >
        <Header />
        <Overview />
        {/* <RelatedItems /> */}
        <Questions />
        <RatingsAndReviews />
      </AppContext.Provider>
    </div>
  )
}

export default App