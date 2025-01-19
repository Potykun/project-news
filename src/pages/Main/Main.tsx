import { FC } from "react"
import { getCategories, getNews } from "../../api/apiNews"
import Categories from "../../components/Categories/Categories"
import useDebounce from "../../components/Helpers/hooks/useDebounce"
import { useFetch } from "../../components/Helpers/hooks/useFetch"
import NewsBanner from "../../components/NewsBanner/NewsBanner"
import NewsList from "../../components/NewsList/NewsList"
import Pagination from "../../components/Pagination/Pagination"
import Search from "../../components/Search/Search"
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants"
import styles from "./Main.styles.module.css"
import { useFilters } from "../../components/Helpers/hooks/useFilters"

const Main: FC = () => {
	const { filters, changeFilters } = useFilters({
		page_number: 1,
		page_size: PAGE_SIZE,
		category: null,
		keywords: "",
	})

	const debounceKeywords = useDebounce(filters.keywords, 500)

	const { data, loading } = useFetch(getNews, {
		...filters,
		keywords: debounceKeywords,
	})

	const { data: dataCategories } = useFetch(getCategories, null)

	const handleNextPage = () => {
		if (filters.page_number < TOTAL_PAGES) {
			changeFilters(filters.page_number, filters.page_number + 1)
		}
	}
	const handlePrevPage = () => {
		if (filters.page_number < TOTAL_PAGES) {
			changeFilters(filters.page_number, filters.page_number - 1)
		}
	}
	const handleGoToPage = (pageNumber: number) => {
		changeFilters("page_number", pageNumber)
	}

	return (
		<main className={styles.main}>
			{dataCategories ? (
				<Categories
					categories={dataCategories.categories}
					selectedCategory={filters.category}
					setSelectedCategory={(category) => changeFilters("category", category)}
				></Categories>
			) : null}
			<Search
				keywords={filters.keywords}
				setKeywords={(keywords) => changeFilters("keywords", keywords)}
			></Search>
			<NewsBanner //NewsBannerWithSkeleton
				loading={loading}
				item={data && data.news && data.news[0]}
			/>
			<Pagination
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				currentPage={filters.page_number}
				totalPages={TOTAL_PAGES}
				handleGoToPage={handleGoToPage}
			></Pagination>
			<NewsList //NewsListWithSkeleton
				loading={loading}
				news={data?.news}
			></NewsList>
			<Pagination
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				currentPage={filters.page_number}
				totalPages={TOTAL_PAGES}
				handleGoToPage={handleGoToPage}
			></Pagination>
		</main>
	)
}
export default Main
