import React, {useContext} from "react"
import ReviewContext from './ReviewContext.jsx'

const SortDropDown = () => {
  const {handleSortChange} = useContext(ReviewContext)

  return (
    <select onChange={event => handleSortChange(event)}>
      <option value="relevant">Relevant</option>
      <option value="helpful">Helpful</option>
      <option value="newest">Newest</option>
    </select>
  )
}

export default SortDropDown