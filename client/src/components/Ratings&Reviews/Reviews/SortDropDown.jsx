import React, { useContext } from "react"
import RatingsAndReviewsContext from "../RatingsandReviewsContext.jsx"

const SortDropDown = () => {
  const { handleSortChange } = useContext(RatingsAndReviewsContext)

  return (
    <select className="sortDropDown" onChange={event => handleSortChange(event)}>
      <option value="relevant">Relevance</option>
      <option value="helpful">Helpfulness</option>
      <option value="newest">Newest</option>
    </select>
  )
}

export default SortDropDown