import React from "react"
import StartQuiz from "../../components/button/StartQuiz/index.js"
import Back from "../../components/button/back/index.js"
import X from "../../components/button/x/index.js"

function Programming() {
	return (
		<div className="programming__wrapper page__wrapper">
			<Back path="/" />

			<X />

			<StartQuiz category="programming" />
		</div>
	)
}

export default Programming
