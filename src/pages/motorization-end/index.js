import React from "react"
import Repeat from "../../components/button/repeat"
import PointsField from "../../components/points-field"
import Another from "../../components/another"
import X from "../../components/button/x/index.js"

const MotorizationEnd = () => {
	return (
		<div className="motorization-end__wrapper page__wrapper">
			<X />

			<PointsField category="motorization" />

			<Repeat category="motorization" />

			<Another
				category="motorization"
				c1="technology"
				c2="culture"
				c3="programming"
				c4="history"
			/>
		</div>
	)
}

export default MotorizationEnd
