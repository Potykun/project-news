import { FC, useEffect, useState } from "react"
import { getNews, INews } from "../../api/apiNews"
import NewsBanner from "../../components/NewsBanner/NewsBanner"
import NewsList from "../../components/NewsList/NewsList"
import styles from "./Main.styles.module.css"

const Main: FC = () => {
	const [news, setNews] = useState<INews[]>([])
	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await getNews()

				setNews(() => response.news)
			} catch (error) {
				console.log(error)
			}
		}
		fetchNews()
	}, [])

	return (
		<main className={styles.main}>
			{news.length > 0 ? <NewsBanner item={news[0]} /> : <div>No news available</div>}
			<NewsList news={news}></NewsList>
		</main>
	)
}
export default Main
