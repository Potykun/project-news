import { FC } from "react"
import styles from "./Skeleton.module.css"

interface ISkeleton {
	count?: number
	type?: "banner" | "item"
}

const Skeleton: FC<ISkeleton> = ({ count = 1, type = "banner" }) => {
	return (
		<>
			{count > 0 ? (
				<ul className={styles.list}>
					{[...Array(count)].map((_, index) => (
						<li
							key={index}
							className={type === "banner" ? styles.banner : styles.item}
						></li>
					))}
				</ul>
			) : (
				<li className={type === "banner" ? styles.banner : styles.item}></li>
			)}
		</>
	)
}
export default Skeleton
