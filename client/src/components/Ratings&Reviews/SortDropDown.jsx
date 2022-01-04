import React, { useContext } from "react"
import RatingsAndReviewsContext from "./RatingsandReviewsContext.jsx"

const SortDropDown = () => {
  const { handleSortChange } = useContext(RatingsAndReviewsContext)

  return (
    <select onChange={event => handleSortChange(event)}>
      <option value="relevant">Relevant</option>
      <option value="helpful">Helpful</option>
      <option value="newest">Newest</option>
    </select>
  )
}

export default SortDropDown