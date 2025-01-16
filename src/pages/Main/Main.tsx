import { FC, useEffect, useState } from "react"
import { getNews, INews } from "../../api/apiNews"
import NewsBanner from "../../components/NewsBanner/NewsBanner"
import NewsList from "../../components/NewsList/NewsList"
import Skeleton from "../../components/Skeleton/Skeleton"
import styles from "./Main.styles.module.css"

const Main: FC = () => {
	const [news, setNews] = useState<INews[]>([])
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		const fetchNews = async () => {
			try {
				setLoading(true)
				const response = await getNews()

				setNews(() => response.news)
				setLoading(false)
			} catch (error) {
				console.log(error)
			}
		}
		fetchNews()
	}, [])

	return (
		<main className={styles.main}>
			{news.length > 0 && !loading ? (
				<NewsBanner item={news[0]} />
			) : (
				<Skeleton
					type="banner"
					count={1}
				/>
			)}
			{!loading ? (
				<NewsList news={news}></NewsList>
			) : (
				<Skeleton
					type="item"
					count={10}
				></Skeleton>
			)}
		</main>
	)
}
export default Main
