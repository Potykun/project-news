import { FC } from "react"
import formatData from "../Helpers/formateData"
import formatTimeAgo from "../Helpers/formatTimeAgo"
import Image from "../Image/Image"
import styles from "./NewsItem.module.css"

interface INewsBanner {
	author: string
	category: string[]
	description: string
	id: string
	image: string
	language: string
	published: string
	title: string
	url: string
}

type NewsBannerProps = {
	item: INewsBanner
}

const NewsItem: FC<NewsBannerProps> = ({ item }) => {
	if (!item) {
		return <div>No data available</div> // Обработка случая, если данных нет
	}

	const publishedDate = item.published ? formatTimeAgo(formatData(item.published)) : "Unknown date"

	return (
		<li className={styles.item}>
			<div className={styles.info}>
				<div
					className={styles.wrapper}
					style={{ backgroundImage: `url(${item.image})` }}
				></div>
				<h3 className={styles.title}>{item.title}</h3>
				<p className={styles.extra}>
					{publishedDate} by {item.author || "Unknown author"}
				</p>
			</div>
		</li>
	)
}

export default NewsItem
