export const ErrorBar = ({ error }: { error: string }) => {
	return (
		<div className="w-5/6 bg-red-700 h-14 max-w-3xl grid place-items-center text-white text-center">
			{error}
		</div>
	)
}
