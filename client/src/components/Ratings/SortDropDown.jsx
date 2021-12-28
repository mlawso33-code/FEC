import React, {useContext} from "react";
import ReviewContext from './ReviewContext.jsx'

const SortDropDown = () => {
  const {sort} = useContext(ReviewContext)
  return (
    <select>
      <option>Relevant</option>
      <option>Helpful</option>
      <option>Newest</option>
    </select>
  )
}

export default SortDropDown