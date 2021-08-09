import React from "react"
import Qbox from "../../components/qbox/index.js"
import X from "../../components/button/x/index.js"
import QuestionCount from "../../components/question-count"
import Title from "../../components/title"

const ProgrammingQuiz = () => {
	return (
		<div className="programming-quiz__wrapper page__wrapper">
			<X />

			<Title />

			<QuestionCount category="programming" />

			<Qbox children="4" category="programming" />
		</div>
	)
}

export default ProgrammingQuiz
