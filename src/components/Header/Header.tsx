import { FC } from "react"
import formateData from "../Helpers/formateData"
import styles from "./styles.module.css"

const Header: FC = () => {
	return (
		<div className={styles.header}>
			<h1 className={styles.title}>News App</h1>
			<p>{formateData(new Date())}</p>
		</div>
	)
}
export default Header
