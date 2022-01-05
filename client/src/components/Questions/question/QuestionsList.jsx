import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import AppContext from '../../App/AppContext.jsx';
import QuestionContext from './QuestionContext.jsx';

import IndividualQuestion from './IndividualQuestion.jsx';
import QuestionModal from './QuestionModal.jsx';

const QuestionsList = () => {
  const { product } = useContext(AppContext)
  const product_id = product.id

  const [questions, setQuestions] = useState([])
  const [sort, setSort] = useState('helpfulness')
  const [flag, setFlag] = useState(false)
  const [numOfQuestions, setNumOfQuestions] = useState(4)
  const [search, setSearch] = useState('')

  var displayedQuestions = questions.slice(0, numOfQuestions)

  const afterThree = search.split('').slice(3, search.length - 1).join('')

  function fetchQuestions() {
    axios
      .get(`/api/qa/questions/?page=1&count=25&sort=${sort}&product_id=${product_id}`)
      .then(res => setQuestions(res.data.results))

  }

  useEffect(() => {
    if (JSON.stringify(product) !== '{}') {
      fetchQuestions()
    }
  }, [product])

  const handleMoreQuestions = () => {
    setNumOfQuestions(numOfQuestions === questions.length ? 2 : questions.length)
  }

  function addQuestion() {
    setFlag(!flag)
  }

  function handleSort() {
    setSort(event.target.value)
    fetchQuestions()
  }

  return (
    <div>
      <div>
        <form>
          <input style={inputStyle} type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." value={search}
            onChange={(e) => {
              setSearch(event.target.value)
            }} />
          <button type="submit" style={buttonStyle}><i className="fas fa-search"></i></button>
        </form>
      </div>
      <br />
      <div>
        {displayedQuestions.filter((val) => {
          if (search === '') {
            return val
          } else if (val.question_body.toLowerCase().includes(afterThree.toLowerCase())) {
            return val
          }
        }).map((question =>
          <IndividualQuestion key={question.question_id} question={question} />
        ))
        }
      </div>
      <br />
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
        {questions.length > 2 && (
          <div>
            <strong style={pointer} onClick={handleMoreQuestions}>
              {numOfQuestions === questions.length ? 'Hide' : 'More Answered'} Questions</strong>
          </div>)}
        <strong style={pointer} onClick={addQuestion}> Add a Question + </strong>
      </div>
      <div>{flag ? <QuestionModal toggle={addQuestion} product_id={product_id} fetchQuestions={fetchQuestions} /> : null}</div>
    </div>
  )
}

export default QuestionsList

const pointer = {
  cursor: "pointer"
}
const flexRow = {
  display: "flex",
  flexDirection: "row",
  marginTop: "10px",
}
const inputStyle = {
  padding: "10px",
  fontSize: "17px",
  border: "1px solid grey",
  width: "80%",
  background: "#f1f1f1"

}
const buttonStyle = {
  width: "auto",
  padding: "10px",
  background: "black",
  color: "white",
  fontSize: "17px",
  cursor: "pointer"
}

