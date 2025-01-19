import { FC } from "react"
import { INews } from "../../api/apiNews"
import styles from "./NewsList.module.css"
import NewsItem from "../NewsItem/NewsItem"
import withSkeleton from "../Helpers/hocs/withSkeleton"
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

const NewsListWithSkeleton = withSkeleton(NewsList, "list", 10)
export default NewsListWithSkeleton
