import React from "react"
import Qbox from "../../components/qbox/index.js"
import X from "../../components/button/x/index.js"
import QuestionCount from "../../components/question-count"
import Title from "../../components/title"

const CultureQuiz = () => {
	return (
		<div className="culture-quiz__wrapper page__wrapper">
			<X />

			<Title />

			<QuestionCount category="culture" />

			<Qbox children="2" category="culture" />
		</div>
	)
}

export default CultureQuiz
