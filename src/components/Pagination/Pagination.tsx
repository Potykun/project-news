import { FC } from "react"
import styles from "./Pagination.module.css"

interface IPagination {
	totalPages: number
	handleNextPage: () => void
	handlePrevPage: () => void
	currentPage: number
	handleGoToPage: (index: number) => void
}

const Pagination: FC<IPagination> = ({ totalPages, handleNextPage, handlePrevPage, currentPage, handleGoToPage }) => {
	console.log(currentPage)

	return (
		<div className={styles.pagination}>
			<button
				onClick={() => handlePrevPage()}
				className={styles.arrow}
				disabled={currentPage === 1}
			>
				{"<"}
			</button>
			<div className={styles.list}>
				{[...Array(totalPages)].map((_, index) => {
					return (
						<button
							className={`${styles.pageNumber} ${currentPage === index + 1 ? styles.active : ""}`}
							key={index}
							onClick={() => handleGoToPage(index + 1)}
							disabled={currentPage === index + 1}
						>
							{index + 1}
						</button>
					)
				})}
			</div>
			<button
				onClick={() => handleNextPage()}
				className={styles.arrow}
				disabled={currentPage === totalPages}
			>
				{">"}
			</button>
		</div>
	)
}
export default Pagination
