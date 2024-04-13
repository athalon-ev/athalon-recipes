import { Head, BlitzLayout, Image, Link } from 'blitz'
import { Suspense, useState } from 'react'
import UserInfo from '../components/UserInfo'
import { Button, TextInput } from '@mantine/core'
import { MdSearch } from 'react-icons/md'
import { useDebouncedValue } from '@mantine/hooks'
import { SearchContext } from '../searchContext'

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
	const [search, setSearch] = useState('')
	const [searchValue] = useDebouncedValue(search, 500)
	return (
		<>
			<Head>
				<title>
					{title} {title ? '-' : ''} Athalon Rezepte
				</title>
				<link rel="icon" href="/favicon.png" />
			</Head>
			<nav className="flex justify-between items-center bg-blue-600 text-white z-50 sticky top-0 h-16">
				<div className="flex gap-4 items-center">
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
					<TextInput
						placeholder="Suche..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						rightSection={<MdSearch color="black" />}
					/>
					<Link href="https://wiki.athalon.de/index.php/Almanach_des_Handwerks">
						<a>
							<Button>Handwerker Almanach</Button>
						</a>
					</Link>
				</div>
			</nav>
			<SearchContext.Provider value={searchValue}>{children}</SearchContext.Provider>
		</>
	)
}

export default Layout
