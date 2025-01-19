import { FC } from "react"
import styles from "./Search.module.css"
interface ISearch {
	keywords: string
	setKeywords: (keywords: string) => void
}
const Search: FC<ISearch> = ({ keywords, setKeywords }) => {
	return (
		<div className={styles.search}>
			<input
				className={styles.input}
				type="text"
				value={keywords}
				placeholder="Search"
				onChange={(e) => setKeywords(e.target.value)}
			/>
		</div>
	)
}
export default Search
