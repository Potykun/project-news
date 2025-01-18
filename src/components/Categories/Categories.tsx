import { FC } from "react"
import styles from "./Categories.module.css"

interface ICategories {
	categories: string[]
	setSelectedCategory: (category: string) => void
	selectedCategory: string
}

const Categories: FC<ICategories> = ({ categories, setSelectedCategory, selectedCategory }) => {
	return (
		<div className={styles.categories}>
			{categories.map((category) => {
				return (
					<button
						onClick={() => setSelectedCategory(category)}
						className={selectedCategory === category ? styles.active : styles.item}
						key={category}
					>
						{category}
					</button>
				)
			})}
		</div>
	)
}
export default Categories
