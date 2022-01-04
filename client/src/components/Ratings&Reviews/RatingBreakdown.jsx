import React, {useState, useEffect, useContext} from "react"
import RatingsAndReviewsContext from './RatingsandReviewsContext.jsx'
import AvgStarRating from "./AvgStarRating.jsx"
import BreakDown from "./BreakDown.jsx"

const RatingBreakdown = () => {
  const { metaData, filtersApplied, clearAllFilters } = useContext(RatingsAndReviewsContext)
  const averageRating = getAvgRating(metaData.ratings)
  const percentRecommend = getPerRecommend(metaData.recommended)
  const breakDown = getBreakDown(metaData.ratings)
  const filteringOn = getFilteringOn()

  function getAvgRating(ratings) {
    let totalStars = 0
    let totalRatings = 0

    for (let star in ratings) {
      totalStars += star * Number(ratings[star])
      totalRatings += Number(ratings[star])
    }

    return (Math.round((totalStars / totalRatings) * 10) / 10).toString()
  }

  function getPerRecommend(recommendRes) {
    if (recommendRes) {
      let notRecommended = Number(recommendRes.false)
      let recommended = Number(recommendRes.true)
      let totalResponse = notRecommended + recommended

      return Math.round((recommended / totalResponse) * 100).toString()
    }
  }

  function getBreakDown(ratings) {
    let result = []
    let totalRatings = 0
    if(ratings) {
      for(let rating in ratings) {
        totalRatings += Number(ratings[rating])
      }

      for (let star in ratings) {
        result.unshift(<BreakDown star={star} count={ratings[star]} totalRatings={totalRatings}/>)
      }
      return result
    }
  }

  function getFilteringOn() {
    let filters = []

    for (let filter of filtersApplied) {
      filters.push(
        <div>{filter} stars</div>
      )
    }

    return filters
  }

  return (
    <div>
      {/* Rating Summary */}
      <div>
        <span>{averageRating}</span>
        <AvgStarRating rating={averageRating}/>
      </div>

      {/* Recommendations Percentage */}
      <div>
        {percentRecommend}% of reviews recommend this product
      </div>

      {/* Breakdown/Filter Section */}
      <div>
        {breakDown}
      </div>

      {/* Filters Applied Section */}
      {filtersApplied.length ?
        <div>
          <div>
            Filtering on:
            {filteringOn}
          </div>

          <a href="" style={{color: 'black'}} onClick={clearAllFilters}>Remove all filters</a>
        </div>
        : null
      }
    </div>
  )
}

export default RatingBreakdown