import React from "react"
import { Link } from "react-router-dom"

function X() {
	return (
		<div className="x__wrapper">
			<Link to="/">
				<div className="x__button"></div>
			</Link>
		</div>
	)
}

export default X
