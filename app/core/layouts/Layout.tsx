import { Head, BlitzLayout, Image, Link } from 'blitz'
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
			<nav className="flex justify-between items-center bg-blue-600 text-white z-50 sticky top-0">
				<Link href="/">
					<div className="flex items-stretch py-4 text-xl font-bold cursor-pointer hover:bg-blue-500 px-4">
						<Image
							src="/data/texturepack/assets/minecraft/textures/item/writable_book.png"
							width={32}
							height={32}
						/>
						<div className="ml-4">Athalon Rezepte</div>
					</div>
				</Link>
			</nav>
			{children}
		</>
	)
}

export default Layout
