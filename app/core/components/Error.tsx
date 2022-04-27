interface ErrorProps {
	statusCode: number
	title: string
}

const Error: React.FC<ErrorProps> = (props) => {
	return (
		<div className="flex flex-col items-center justify-center h-full">
			<h1 className="text-2xl text-center">{props.statusCode}</h1>
			<p className="text-center">{props.title}</p>
		</div>
	)
}
export default Error
