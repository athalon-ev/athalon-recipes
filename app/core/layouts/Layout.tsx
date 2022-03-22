import { Container } from "@mantine/core"
import { Head, BlitzLayout } from "blitz"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
	return (
		<>
			<Head>
				<title>
					{title} {title ? "-" : ""} Athalon Rezepte
				</title>
				<link rel="icon" href="/favicon.png" />
			</Head>
			<nav className="flex justify-between md:px-8 bg-blue-600">
				<div className="flex items-stretch">miau</div>
			</nav>
			{children}
		</>
	)
}

export default Layout
