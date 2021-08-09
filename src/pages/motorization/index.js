import React from "react"
import StartQuiz from "../../components/button/StartQuiz/index.js"
import Back from "../../components/button/back/index.js"
import X from "../../components/button/x/index.js"

function Motorization() {
	return (
		<div className="motorization__wrapper page__wrapper">
			<Back path="/" />

			<X />

			<StartQuiz category="motorization" />
		</div>
	)
}

export default Motorization
