import { useUserData } from './useUsersData'
import { useErrorHandler } from 'react-error-boundary'

export const Slider = () => {
	const handleError = useErrorHandler()
	const [data, isLoading, isSuccess, error, handleNext, handlePrevious] =
		useUserData()

	error && handleError(error)

	return (
		<div className="max-w-3xl w-5/6 h-96 p-4 bg-neutral-800 text-white flex flex-col justify-between items-center gap-4">
			<div
				className={`h-5/6 w-full bg-center grid place-items-center bg-no-repeat max-w-xs bg-cover sm:bg-contain duration-500`}
				style={{
					backgroundImage: `url(${isSuccess && data?.avatar_url})`
				}}>
				{isLoading && <p className="duration-500">Loading ...</p>}
			</div>

			<div className="w-full h-1/6 flex gap-5 justify-between font-bold">
				<button
					onClick={handlePrevious}
					className="w-1/2 bg-cyan-600 lg:hover:bg-cyan-800 transition-all">
					Previous
				</button>
				<button
					onClick={handleNext}
					className="w-1/2 bg-cyan-600 lg:hover:bg-cyan-800 transition-all">
					Next
				</button>
			</div>
		</div>
	)
}
