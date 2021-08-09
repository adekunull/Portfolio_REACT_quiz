import React from "react"
import Qbox from "../../components/qbox/index.js"
import X from "../../components/button/x/index.js"
import QuestionCount from "../../components/question-count"
import Title from "../../components/title"

const TechnologyQuiz = () => {
	return (
		<div className="technology-quiz__wrapper page__wrapper">
			<X />

			<Title />

			<QuestionCount category="technology" />

			<Qbox children="1" category="technology" />
		</div>
	)
}

export default TechnologyQuiz
