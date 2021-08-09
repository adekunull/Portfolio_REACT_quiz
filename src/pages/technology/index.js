import React from "react"
import StartQuiz from "../../components/button/StartQuiz/index.js"
import Back from "../../components/button/back/index.js"
import X from "../../components/button/x/index.js"

function Technology() {
	return (
		<div className="technology__wrapper page__wrapper">
			<Back path="/" />

			<X />

			<StartQuiz category="technology" />
		</div>
	)
}

export default Technology
