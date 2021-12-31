import React from "react"
import ProgressBar from "./ProgressBar.jsx"

const BreakDown = ({ star, count, totalRatings }) => {
  const percent = Math.round((count / totalRatings) * 100)

  return (
    <div>
      <a href="" style={{color: "black"}}>{star} stars </a>
      <ProgressBar bgcolor={'green'} percent={percent}/>
      <span>({count})</span>
    </div>
  )
}

export default BreakDown