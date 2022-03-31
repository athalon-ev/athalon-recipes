import { Head, BlitzLayout, Image } from 'blitz'
import { Suspense } from 'react'
import UserInfo from '../components/UserInfo'

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
	return (
		<>
			<Head>
				<title>
					{title} {title ? '-' : ''} Athalon Rezepte
				</title>
				<link rel="icon" href="/favicon.png" />
			</Head>
			<nav className="flex justify-between items-center bg-blue-600 text-white px-4">
				<div className="flex items-stretch py-4 text-xl font-bold">
					<Image
						src="/data/texturepack/assets/minecraft/textures/item/writable_book.png"
						width={32}
						height={32}
					/>
					<div className="ml-4">Athalon Rezepte</div>
				</div>
				<div className="py-4">
					<Suspense fallback="loading...">
						<UserInfo />
					</Suspense>
				</div>
			</nav>
			{children}
		</>
	)
}

export default Layout
