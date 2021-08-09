import React from "react"
import { Link } from "react-router-dom"

function Categories() {
	return (
		<div className="categories__wrapper">
			<Link to="/technology">
				<div className="categories__technology categories__button"></div>
			</Link>

			<Link to="/culture">
				<div className="categories__culture categories__button"></div>
			</Link>

			<Link to="/motorization">
				<div className="categories__motorization categories__button"></div>
			</Link>

			<Link to="/programming">
				<div className="categories__programming categories__button"></div>
			</Link>

			<Link to="/history">
				<div className="categories__history categories__button"></div>
			</Link>
		</div>
	)
}

export default Categories
