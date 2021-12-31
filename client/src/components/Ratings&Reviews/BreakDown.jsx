import React from "react"
import ProgressBar from "./ProgressBar.jsx"

const BreakDown = ({ star, count, totalRatings }) => {
  const percent = Math.round((count / totalRatings) * 100)

  return (
    <div>
      <span>{star} stars </span>
      <ProgressBar bgcolor={'green'} percent={percent}/>
      <span>({count})</span>
    </div>
  )
}

export default BreakDown