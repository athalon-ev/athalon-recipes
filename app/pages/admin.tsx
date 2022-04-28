import { Suspense, useState } from 'react'
import { BlitzPage } from 'blitz'
import Layout from 'app/core/layouts/Layout'
import { useQuery } from 'blitz'
import getItemWithSettings from 'app/recipes/queries/getItemWithSettings'
import { Set } from 'immutable'

import ItemCraftingRecipeCard from 'app/recipes/components/ItemCraftingRecipeCard'
import ItemCategories from 'app/recipes/components/ItemCategories'
import ItemCategoriesMenu from 'app/recipes/components/ItemCategoriesMenu'

const RecipeList = () => {
	const [items] = useQuery(getItemWithSettings, null)
	const [hiddenItems, setHiddenItems] = useState(Set(items.filter(i => i.hidden).map(i => i.id)))
	return (
		<div>
			Hidden: {hiddenItems.size}
			<ItemCategoriesMenu items={items} />
			<ItemCategories
				items={items}
				itemCard={({ item, items }) =>
					<ItemCraftingRecipeCard
						key={item.id}
						onClick={e => setHiddenItems(hiddenItems.has(item.id) ? hiddenItems.delete(item.id) : hiddenItems.add(item.id))}
						item={item}
						items={items}
						className="cursor-pointer"
					>
						<div className={`p-4 ${hiddenItems.has(item.id) ? 'bg-red-600' : 'bg-green-400'}`}>
							Rezept {hiddenItems.has(item.id) ? 'versteckt' : 'öffentlich'}
						</div>
					</ItemCraftingRecipeCard>
				}
			/>
		</div>
	)
}

const AdminPage: BlitzPage = () => {
	return (
		<Suspense fallback="Loading...">
			<RecipeList />
		</Suspense>
	)
}

AdminPage.suppressFirstRenderFlicker = true
AdminPage.getLayout = (page) => <Layout>{page}</Layout>

export default AdminPage
