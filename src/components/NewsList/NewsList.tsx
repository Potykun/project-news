import { FC } from "react"
import { INews } from "../../api/apiNews"
import styles from "./NewsList.module.css"
import NewsItem from "../NewsItem/NewsItem"
interface INewsList {
	news: INews[]
}
const NewsList: FC<INewsList> = ({ news }) => {
	return (
		<ul className={styles.list}>
			{news.map((item) => (
				<NewsItem
					key={item.id}
					item={item}
				></NewsItem>
			))}
		</ul>
	)
}
export default NewsList
