import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Homepage from "./pages/homepage/index.js"
import TechnologyQuiz from "./pages/technology-quiz/index.js"
import Technology from "./pages/technology/index.js"
import TechnologyEnd from "./pages/technology-end/index.js"
import Culture from "./pages/culture"
import CultureQuiz from "./pages/culture-quiz"
import CultureEnd from "./pages/culture-end"
import Motorization from "./pages/motorization"
import MotorizationQuiz from "./pages/motorization-quiz"
import MotorizationEnd from "./pages/motorization-end"
import Programming from "./pages/programming"
import ProgrammingQuiz from "./pages/programming-quiz"
import ProgrammingEnd from "./pages/programming-end"
import History from "./pages/history"
import HistoryQuiz from "./pages/history-quiz"
import HistoryEnd from "./pages/history-end"
import CountContext from "./components/hooks/countcontext/index.js"
import NumberContext from "./components/hooks/numbercontext/index.js"

function App() {
	const [number, setNumber] = useState(1)
	const [points, setPoints] = useState(0)

	return (
		<Router>
			<Switch>
				<NumberContext.Provider value={[number, setNumber]}>
					<CountContext.Provider value={[points, setPoints]}>
						<Route exact path="/" component={Homepage} />
						<Route exact path="/technology" component={Technology} />
						<Route exact path="/technology/quiz" component={TechnologyQuiz} />
						<Route exact path="/technology/end" component={TechnologyEnd} />
						<Route exact path="/culture" component={Culture} />
						<Route exact path="/culture/quiz" component={CultureQuiz} />
						<Route exact path="/culture/end" component={CultureEnd} />
						<Route exact path="/motorization" component={Motorization} />
						<Route
							exact
							path="/motorization/quiz"
							component={MotorizationQuiz}
						/>
						<Route exact path="/motorization/end" component={MotorizationEnd} />
						<Route exact path="/programming" component={Programming} />
						<Route exact path="/programming/quiz" component={ProgrammingQuiz} />
						<Route exact path="/programming/end" component={ProgrammingEnd} />
						<Route exact path="/history" component={History} />
						<Route exact path="/history/quiz" component={HistoryQuiz} />
						<Route exact path="/history/end" component={HistoryEnd} />
					</CountContext.Provider>
				</NumberContext.Provider>
			</Switch>
		</Router>
	)
}

export default App
