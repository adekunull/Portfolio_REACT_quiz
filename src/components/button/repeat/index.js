import React, { useContext } from "react"
import { Link } from "react-router-dom"
import CountContext from "../../hooks/countcontext/index.js"
import NumberContext from "../../hooks/numbercontext/index.js"

const Repeat = ({ category }) => {
	const [points, setPoints] = useContext(CountContext)
	const [number, setNumber] = useContext(NumberContext)

	return (
		<div className={`${category}-end__button-repeat repeat__button`}>
			<Link to={`/${category}`}>
				<div
					className={`${category}-end__button-repeat--img repeat__img`}
					onClick={() => {
						setPoints((prev) => 0)
						setNumber((prev) => 1)
					}}
				></div>
			</Link>
		</div>
	)
}

export default Repeat
