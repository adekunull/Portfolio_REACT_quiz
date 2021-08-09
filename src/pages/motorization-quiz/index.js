import React from "react"
import Qbox from "../../components/qbox/index.js"
import X from "../../components/button/x/index.js"
import QuestionCount from "../../components/question-count"
import Title from "../../components/title"

const MotorizationQuiz = () => {
	return (
		<div className="motorization-quiz__wrapper page__wrapper">
			<X />

			<Title />

			<QuestionCount category="motorization" />

			<Qbox children="3" category="motorization" />
		</div>
	)
}

export default MotorizationQuiz
