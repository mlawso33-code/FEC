import React from "react"

const SortDropDown = (props) => {
  return (
    <select onChange={event => props.handleSortChange(event)}>
      <option value="relevant">Relevant</option>
      <option value="helpful">Helpful</option>
      <option value="newest">Newest</option>
    </select>
  )
}

export default SortDropDown