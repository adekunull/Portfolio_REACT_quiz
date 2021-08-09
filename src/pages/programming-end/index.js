import React from "react"
import Repeat from "../../components/button/repeat"
import PointsField from "../../components/points-field"
import Another from "../../components/another"
import X from "../../components/button/x/index.js"

const ProgrammingEnd = () => {
	return (
		<div className="programming-end__wrapper page__wrapper">
			<X />

			<PointsField category="programming" />

			<Repeat category="programming" />

			<Another
				category="programming"
				c1="technology"
				c2="culture"
				c3="motorization"
				c4="history"
			/>
		</div>
	)
}

export default ProgrammingEnd
