import React from "react"
import StartQuiz from "../../components/button/StartQuiz/index.js"
import Back from "../../components/button/back/index.js"
import X from "../../components/button/x/index.js"

function History() {
	return (
		<div className="history__wrapper page__wrapper">
			<Back path="/" />

			<X />

			<StartQuiz category="history" />
		</div>
	)
}

export default History
