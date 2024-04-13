import { Suspense, useContext } from 'react'
import { BlitzPage } from 'blitz'
import Layout from 'app/core/layouts/Layout'
import { useQuery } from 'blitz'
import getItems from 'app/recipes/queries/getItems'

import ItemCraftingRecipeCard from 'app/recipes/components/ItemCraftingRecipeCard'
import ItemCategories from 'app/recipes/components/ItemCategories'
import ItemCategoriesMenu from 'app/recipes/components/ItemCategoriesMenu'
import { AppShell, ScrollArea } from '@mantine/core'
import { SearchContext } from 'app/core/searchContext'

const RecipeList = () => {
	const search = useContext(SearchContext)
	console.log({ search })
	const [items] = useQuery(getItems, null)
	const filteredItems = search.length
		? items.filter((item) =>
				(item['display name'] ?? '').toLowerCase().includes(search.toLowerCase())
		  )
		: items
	return (
		<AppShell
			navbar={
				<div className="h-full fixed shadow">
					<ScrollArea style={{ height: '100%' }}>
						<ItemCategoriesMenu items={filteredItems} />
					</ScrollArea>
				</div>
			}
		>
			<div className="pl-40">
				<ItemCategories
					items={filteredItems}
					itemCard={({ item, items }) => (
						<ItemCraftingRecipeCard key={item.id} item={item} items={items} />
					)}
				/>
			</div>
		</AppShell>
	)
}

const Home: BlitzPage = () => {
	return (
		<Suspense fallback="Loading...">
			<RecipeList />
		</Suspense>
	)
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
