import React from "react"
import Qbox from "../../components/qbox/index.js"
import X from "../../components/button/x/index.js"
import QuestionCount from "../../components/question-count"
import Title from "../../components/title"

const HistoryQuiz = () => {
	return (
		<div className="history-quiz__wrapper page__wrapper">
			<X />

			<Title />

			<QuestionCount category="history" />

			<Qbox children="5" category="history" />
		</div>
	)
}

export default HistoryQuiz
