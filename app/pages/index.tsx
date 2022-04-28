import { Suspense } from 'react'
import { BlitzPage } from 'blitz'
import Layout from 'app/core/layouts/Layout'
import { useQuery } from 'blitz'
import getItems from 'app/recipes/queries/getItems'

import ItemCraftingRecipeCard from 'app/recipes/components/ItemCraftingRecipeCard'
import ItemCategories from 'app/recipes/components/ItemCategories'
import ItemCategoriesMenu from 'app/recipes/components/ItemCategoriesMenu'

const RecipeList = () => {
	const [items] = useQuery(getItems, null)
	return (
		<div>
			<ItemCategoriesMenu items={items} />
			<ItemCategories
				items={items}
				itemCard={({ item, items }) => <ItemCraftingRecipeCard key={item.id} item={item} items={items} />}
			/>
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
