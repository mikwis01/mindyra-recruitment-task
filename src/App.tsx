import { ErrorBoundary } from 'react-error-boundary'
import { ErrorBar } from './components/ErrorBar/ErrorBar'
import { Header } from './components/Header/Header'
import { Slider } from './components/Slider/Slider'

const App = () => {
	return (
		<div className="w-full h-full flex flex-col gap-4 items-center">
			<Header />
			<ErrorBoundary
				fallbackRender={({ error }) => (
					<ErrorBar error={error.message} />
				)}>
				<Slider />
			</ErrorBoundary>
		</div>
	)
}

export default App
