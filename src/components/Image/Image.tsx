import { FC } from "react"
import styles from "./Image.module.css"
interface IImage {
	image: string
	title: string
}
const Image: FC<IImage> = ({ image, title }) => {
	return (
		<div className={styles.wrapper}>
			{image ? (
				<img
					src={image}
					alt={title}
					className={styles.image}
				/>
			) : null}
		</div>
	)
}
export default Image
