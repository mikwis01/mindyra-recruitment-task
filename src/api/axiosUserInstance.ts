import axios from 'axios'
const API_URI = import.meta.env.VITE_API_URI
const VITE_USER_TOKEN = import.meta.env.VITE_USER_TOKEN

export const animalApi = axios.create({
	baseURL: API_URI,
	headers: {
		Authorization: `Bearer ${VITE_USER_TOKEN}`
	}
})

export const getUser = async (username: string) => {
	try {
		const response = await animalApi.get(`/${username}`)

		return response.data
	} catch (error) {
		throw new Error("A problem with fetching users' data occurred!")
	}
}
