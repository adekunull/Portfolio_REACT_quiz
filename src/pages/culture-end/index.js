import React from "react"
import Repeat from "../../components/button/repeat"
import PointsField from "../../components/points-field"
import Another from "../../components/another"
import X from "../../components/button/x/index.js"

const CultureEnd = () => {
	return (
		<div className="culture-end__wrapper page__wrapper">
			<X />

			<PointsField category="culture" />

			<Repeat category="culture" />

			<Another
				category="culture"
				c1="technology"
				c2="programming"
				c3="motorization"
				c4="history"
			/>
		</div>
	)
}

export default CultureEnd
