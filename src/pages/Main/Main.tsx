import { FC, useEffect, useState } from "react"
import { getCategories, getNews, INews } from "../../api/apiNews"
import Categories from "../../components/Categories/Categories"
import NewsBanner from "../../components/NewsBanner/NewsBanner"
import NewsList from "../../components/NewsList/NewsList"
import Pagination from "../../components/Pagination/Pagination"
import Skeleton from "../../components/Skeleton/Skeleton"
import styles from "./Main.styles.module.css"

const Main: FC = () => {
	const [news, setNews] = useState<INews[]>([])
	const [categories, setCategories] = useState<string[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [selectedCategory, setSelectedCategory] = useState<string>("All")

	const pageSize = 10
	const totalPages = 10

	const fetchNews = async (currentPage: number) => {
		try {
			setLoading(true)
			const response = await getNews({
				page_number: currentPage,
				page_size: pageSize,
				category: selectedCategory === "All" ? null : selectedCategory,
			})
			if (response.news) {
				setNews(response.news) // Use response.news
			}
			setLoading(false)
		} catch (error) {
			console.log(error)
		}
	}
	const fetchCategories = async () => {
		try {
			const response = await getCategories()
			setCategories(() => ["All", ...response.categories])
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchNews(currentPage)
		fetchCategories()
	}, [currentPage, selectedCategory])

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage((prev) => prev + 1)
		}
	}
	const handlePrevPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage((prev) => prev - 1)
		}
	}
	const handleGoToPage = (page: number) => {
		setCurrentPage(() => page)
	}

	return (
		<main className={styles.main}>
			<Categories
				categories={categories}
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			></Categories>
			{news.length > 0 && !loading ? (
				<NewsBanner item={news[0]} />
			) : (
				<Skeleton
					type="banner"
					count={1}
				/>
			)}
			<Pagination
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				currentPage={currentPage}
				totalPages={totalPages}
				handleGoToPage={handleGoToPage}
			></Pagination>
			{!loading ? (
				<NewsList news={news}></NewsList>
			) : (
				<Skeleton
					type="item"
					count={10}
				></Skeleton>
			)}
			<Pagination
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				currentPage={currentPage}
				totalPages={totalPages}
				handleGoToPage={handleGoToPage}
			></Pagination>
		</main>
	)
}
export default Main
