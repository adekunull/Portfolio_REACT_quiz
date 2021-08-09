import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import CountContext from "../../components/hooks/countcontext/index.js"
import NumberContext from "../../components/hooks/numbercontext/index.js"
import initialData from "../data/initialData.js"

const Qbox = ({ children, category }) => {
	const [number, setNumber] = useContext(NumberContext)
	const [points, setPoints] = useContext(CountContext)
	const [path, setPath] = useState()
	const data = initialData.results[children][number]

	const onDragEnd = (result) => {
		if (!result.destination) {
			return
		}

		const source = result.source
		const destination = result.destination

		if (source.droppableId !== destination.droppableId) {
			console.log(result)
			if (source.index + 1 === data.correctId && number !== 9) {
				setNumber((prev) => prev + 1)
				setPoints((prev) => prev + 1)
			} else if (source.index + 1 !== data.correctId && number !== 9) {
				setNumber((prev) => prev + 1)
			} else if (source.index + 1 === data.correctId && number === 9) {
				setNumber((prev) => prev + 1)
				setPoints((prev) => prev + 1)
				setPath(`/${category}/end`)
			} else if (source.index + 1 !== data.correctId && number === 9) {
				setNumber((prev) => prev + 1)
				setPath(`/${category}/end`)
			}
		}
	}

	if (initialData.results[children][number].type === "normal") {
		return (
			<div className="qbox__wrapper">
				<div className="qbox__question--content">
					<div className="qbox__first-question">
						{initialData.results[children][number].question}
					</div>
				</div>

				<div className="qbox__content">
					{initialData.results[children][number].answers.map(
						({ answer, id }) => {
							return (
								<Link to={path}>
									<div
										className={`qbox__${category} qbox__text qbox__button`}
										onClick={() => {
											if (id === data.correctId && number !== 9) {
												setNumber((prev) => prev + 1)
												setPoints((prev) => prev + 1)
											} else if (id !== data.correctId && number !== 9) {
												setNumber((prev) => prev + 1)
											} else if (id === data.correctId && number === 9) {
												setNumber((prev) => prev + 1)
												setPoints((prev) => prev + 1)
												setPath(`/${category}/end`)
											} else if (id !== data.correctId && number === 9) {
												setNumber((prev) => prev + 1)
												setPath(`/${category}/end`)
											}
										}}
									>
										<div className="qbox__button--text">{answer}</div>
									</div>
								</Link>
							)
						}
					)}
				</div>
			</div>
		)
	} else {
		return (
			<div className="qbox__wrapper">
				<DragDropContext onDragEnd={onDragEnd}>
					<div className="qbox__question--content">
						<div className="qbox__first-question">
							{initialData.results[children][number].question}
						</div>

						<Droppable droppableId="question">
							{(provided) => (
								<div
									className={`qbox__dnd--${category} qbox__dnd-field`}
									{...provided.droppableProps}
									ref={provided.innerRef}
								></div>
							)}
						</Droppable>

						<div className="qbox__after-question">
							{initialData.results[children][number].afterQuestion}
						</div>
					</div>

					<Droppable droppableId="list">
						{(provided) => (
							<div
								className="qbox__content"
								{...provided.droppableProps}
								ref={provided.innerRef}
							>
								{initialData.results[children][number].answers.map(
									({ answer, value, id }, index) => {
										return (
											<Draggable
												key={id}
												draggableId={`question-${id}`}
												index={index}
											>
												{(provided) => (
													<div
														{...provided.draggableProps}
														{...provided.dragHandleProps}
														ref={provided.innerRef}
														className={`qbox__${category}-dnd qbox__text qbox__button-dnd`}
													>
														<div>{answer}</div>
													</div>
												)}
											</Draggable>
										)
									}
								)}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</DragDropContext>
			</div>
		)
	}
}

export default Qbox
