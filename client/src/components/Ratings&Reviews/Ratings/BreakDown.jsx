import React, { useState, useContext } from "react"
import ProgressBar from "./ProgressBar.jsx"
import RatingsAndReviewsContext from "../RatingsandReviewsContext.jsx"

const BreakDown = ({ star, count, totalRatings }) => {
  const { filterList } = useContext(RatingsAndReviewsContext)
  const [toggleOn, setToggleOn] = useState(true)
  const percent = Math.round((count / totalRatings) * 100)

  function handleClick(e) {
    e.preventDefault()
    filterList(e, toggleOn)
    setToggleOn(!toggleOn)
  }

  return (
    <div>
      <a href="" className="starsAnchor" id={star} onClick={handleClick}>{star} stars</a>
      <ProgressBar percent={percent}/>
      <span>({count})</span>
    </div>
  )
}

export default BreakDown