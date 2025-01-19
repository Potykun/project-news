import { useEffect, useState } from "react"

export const useFetch = (fetchFunction: Function, params) => {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [data, setData] = useState(null)

	const stringParams = params ? new URLSearchParams(params).toString() : ""

	useEffect(() => {
		;(async () => {
			try {
				setLoading(true)
				const response = await fetchFunction(params)
				setData(response)
			} catch (error) {
				setError(error)
			} finally {
				setLoading(false)
			}
		})()
	}, [fetchFunction, stringParams])
	return { loading, error, data }
}
