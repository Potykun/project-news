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
export interface IGetNews {
	news: INews[]
	page_number: number
	page_size: number
}

export const getNews = async (page_number = 1, page_size = 10): Promise<IGetNews> => {
	try {
		const response = await axios.get(`${BASE_URL}search`, {
			params: {
				apiKey: API_KEY,
				page_number,
				page_size,
			},
		})
		return response.data
	} catch (error) {
		console.error(error)
		throw new Error("Failed to fetch news")
	}
}
