import React, { useContext } from "react"
import NumberContext from "../hooks/numbercontext/index.js"

const QuestionCount = ({ category }) => {
	const [number, setNumber] = useContext(NumberContext)

	return (
		<div className={`question-count__${category} question-count__wrapper`}>
			<div className="question-count__text">{number}/10</div>
		</div>
	)
}

export default QuestionCount
