import { Suspense } from 'react'
import { BlitzPage } from 'blitz'
import Layout from 'app/core/layouts/Layout'
import { useQuery, Image } from 'blitz'
import getItems from 'app/recipes/queries/getItems'

import ItemCraftingRecipeCard from 'app/recipes/components/ItemCraftingRecipeCard'

const RecipeList = () => {
	const [items] = useQuery(getItems, null)
	const itemCategories = [
		...new Set(items.map((item) => item.id.split('_')[0] || 'uncategorized')),
	]
	const itemsWithCategories = items.map((item) => ({
		...item,
		category: item.id.split('_')[0] || 'uncategorized',
	}))
	return (
		<div>
			<div className="flex m-4">
				{itemCategories.map((itemCategory) => (
					<a
						className="mr-2 px-2 py-1 rounded hover:bg-blue-600"
						key={itemCategory}
						href={`#${itemCategory}`}
					>
						{itemCategory}
					</a>
				))}
			</div>
			{itemCategories.map((itemCategory) => (
				<div key={itemCategory} id={itemCategory}>
					<h2 className="text-xl m-4">
						{itemCategory} -{' '}
						{itemsWithCategories.filter((item) => item.category == itemCategory).length}{' '}
						Rezepte{' '}
					</h2>
					<div className="flex flex-wrap">
						{itemsWithCategories
							.filter((item) => item.category == itemCategory)
							.sort((a, b) => a.id.localeCompare(b.id))
							.map((item) => (
								<ItemCraftingRecipeCard key={item.id} item={item} items={items} />
							))}
					</div>
				</div>
			))}
		</div>
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
