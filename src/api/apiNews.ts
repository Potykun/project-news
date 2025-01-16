import axios from "axios"

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL as string
const API_KEY = import.meta.env.VITE_NEWS_API_KEY as string

export interface INews {
	id: string
	title: string
	description: string
	author: string
	category: string[]
	published: string
	image: string
	url: string
	language: string
}

export const getNews = async (): Promise<{ news: INews[] }> => {
	try {
		const response = await axios.get(`${BASE_URL}latest-news`, {
			params: {
				apiKey: API_KEY,
			},
		})
		return response.data
	} catch (error) {
		console.error(error)
		throw new Error("Failed to fetch news")
	}
}
