import React from "react"
import Repeat from "../../components/button/repeat"
import PointsField from "../../components/points-field"
import Another from "../../components/another"
import X from "../../components/button/x/index.js"

const HistoryEnd = () => {
	return (
		<div className="history-end__wrapper page__wrapper">
			<X />

			<PointsField category="history" />

			<Repeat category="history" />

			<Another
				category="history"
				c1="technology"
				c2="culture"
				c3="motorization"
				c4="programming"
			/>
		</div>
	)
}

export default HistoryEnd
