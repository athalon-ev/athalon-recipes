import { useState } from 'react'

type FallbackImageProps = {
	fallbackSrc?: string
	src: string
	alt?: string
	width?: number
	height?: number
} & React.HTMLAttributes<HTMLImageElement>

export const FallbackImage = (props: FallbackImageProps) => {
	const { src, fallbackSrc, ...rest } = props
	const [originalSrc, setSrc] = useState(props.src)
	const handleError = () => {
		fallbackSrc && setSrc(fallbackSrc)
		console.log('handle', fallbackSrc, props.src)
	}
	return <img src={originalSrc} data-fbi={fallbackSrc} onError={handleError} {...rest} />
}
