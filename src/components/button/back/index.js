import React from "react"
import { Link } from "react-router-dom"

const Back = ({ path }) => {
	return (
		<div className="back__wrapper">
			<Link to={path}>
				<div className="back__button"></div>
			</Link>
		</div>
	)
}

export default Back
