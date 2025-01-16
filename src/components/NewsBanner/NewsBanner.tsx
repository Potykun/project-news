import { FC } from "react"
import formatData from "../Helpers/formateData"
import formatTimeAgo from "../Helpers/formatTimeAgo"
import Image from "../Image/Image"
import styles from "./NewsBanner.module.css"

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

const NewsBanner: FC<NewsBannerProps> = ({ item }) => {
	if (!item) {
		return <div>No data available</div> // Обработка случая, если данных нет
	}

	const publishedDate = item.published ? formatTimeAgo(formatData(item.published)) : "Unknown date"

	return (
		<div className={styles.banner}>
			<Image
				image={item.image || "default-image.jpg"}
				title={item.title || "No title"}
			/>
			<h3 className={styles.title}>{item.title}</h3>
			<p className={styles.extra}>
				{publishedDate} by {item.author || "Unknown author"}
			</p>
		</div>
	)
}

export default NewsBanner
