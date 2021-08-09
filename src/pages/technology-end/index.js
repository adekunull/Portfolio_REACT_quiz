import React from "react"
import Repeat from "../../components/button/repeat"
import PointsField from "../../components/points-field"
import Another from "../../components/another"
import X from "../../components/button/x/index.js"

const TechnologyEnd = () => {
	return (
		<div className="technology-end__wrapper page__wrapper">
			<X />

			<PointsField category="technology" />

			<Repeat category="technology" />

			<Another
				category="technology"
				c1="programming"
				c2="culture"
				c3="motorization"
				c4="history"
			/>
		</div>
	)
}

export default TechnologyEnd
