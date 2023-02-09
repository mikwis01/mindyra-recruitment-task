import axios from 'axios'
const API_URI = import.meta.env.VITE_API_URI
const VITE_USER_TOKEN = import.meta.env.VITE_USER_TOKEN

export const animalApi = axios.create({
	baseURL: API_URI,
	headers: {
		Authorization: `Bearer ${VITE_USER_TOKEN}`
	}
})

const checkError = (textStatus: string, numberStatus: number) => {
	if (textStatus !== 'OK') {
		if (numberStatus === 400) throw new Error('Eror 400 - Bad request')
		if (numberStatus === 404) throw new Error('Eror 404 - Not found')
		if (numberStatus === 500)
			throw new Error('Eror 500 - Internal server error')
	}
}

export const getUser = async (username: string) => {
	const response = await animalApi.get(`/${username}`)

	checkError(response.statusText, response.status)

	return response.data
}
