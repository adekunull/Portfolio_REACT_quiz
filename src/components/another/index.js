import React from "react"
import { Link } from "react-router-dom"

const Another = ({ category, c1, c2, c3, c4 }) => {
	return (
		<div className="another__wrapper">
			<Link to={`/${c1}`}>
				<div className={`another__${category}--${c1} another__button`}></div>
			</Link>

			<Link to={`/${c2}`}>
				<div className={`another__${category}--${c2} another__button`}></div>
			</Link>

			<Link to={`/${c3}`}>
				<div className={`another__${category}--${c3} another__button`}></div>
			</Link>

			<Link to={`/${c4}`}>
				<div className={`another__${category}--${c4} another__button`}></div>
			</Link>
		</div>
	)
}

export default Another
