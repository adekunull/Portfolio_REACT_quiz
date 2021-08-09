import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import CountContext from "../../../components/hooks/countcontext/index.js"
import NumberContext from "../../../components/hooks/numbercontext/index.js"

const StartQuiz = ({ category }) => {
	const [number, setNumber] = useContext(NumberContext)
	const [points, setPoints] = useContext(CountContext)

	return (
		<div className="startquiz__wrapper startquiz__button">
			<Link
				to={`/${category}/quiz`}
				onClick={() => {
					setNumber((prev) => 1)
					setPoints((prev) => 0)
				}}
			>
				<div className={`startquiz__${category} startquiz__img`}></div>
			</Link>
		</div>
	)
}

export default StartQuiz
