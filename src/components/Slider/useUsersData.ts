import { useState } from 'react'
import { useQuery } from 'react-query'
import { getUser } from '../../api/axiosUserInstance'
import { users } from './constants'

export const useUserData = () => {
	const [sliderIndex, setSliderIndex] = useState(0)

	const handleNext = () => {
		setSliderIndex((prev) => (prev === users.length - 1 ? 0 : prev + 1))
	}

	const handlePrevious = () => {
		setSliderIndex((prev) => (prev === 0 ? users.length - 1 : prev - 1))
	}

	const { data, isLoading, isSuccess, error } = useQuery(
		['getUser', users[sliderIndex]],
		() => getUser(users[sliderIndex])
	)

	return [
		data,
		isLoading,
		isSuccess,
		error,
		handleNext,
		handlePrevious
	] as const
}
