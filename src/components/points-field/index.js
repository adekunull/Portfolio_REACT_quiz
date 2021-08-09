import React, { useContext } from "react"
import CountContext from "../hooks/countcontext/index.js"

const PointsField = ({ category }) => {
	const [points, setPoints] = useContext(CountContext)

	return (
		<div className={`${category}-end__points point-field__wrapper`}>
			{points}/10
		</div>
	)
}

export default PointsField
