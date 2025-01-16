import { FC } from "react"
import Header from "./components/Header/Header"
import Main from "./pages/Main/Main"

const App: FC = () => {
	return (
		<>
			<Header>{}</Header>
			<div className="container">
				<Main></Main>
			</div>
		</>
	)
}

export default App
