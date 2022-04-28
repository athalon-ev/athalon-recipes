import { capitalize, getItemCategories, getItemsWithCategories } from '../items'
import { IndexedDenizenScript } from '../types'
import { ItemCraftingRecipeCardProps } from './ItemCraftingRecipeCard'

interface ItemCategoriesProps {
	items: IndexedDenizenScript[]
	itemCard: (props: ItemCraftingRecipeCardProps) => React.ReactElement<ItemCraftingRecipeCardProps>
}

const ItemCategories = ({ items, itemCard }: ItemCategoriesProps) => {
	const itemsWithCategories = getItemsWithCategories(items)
	const itemCategories = getItemCategories(items)
	return (<>
		{itemCategories.map((itemCategory) => (
			<div key={itemCategory} id={itemCategory}>
				<h2 className="text-xl p-4 sticky z-10 bg-white top-16">
					{capitalize(itemCategory)} - {itemsWithCategories.filter((item) => item.category == itemCategory).length} Rezepte
				</h2>
				<div className="flex flex-wrap">
					{itemsWithCategories
						.filter((item) => item.category == itemCategory)
						.sort((a, b) => a.id.localeCompare(b.id))
						.map((item) => (
							itemCard({ item, items })
						))}
				</div>
			</div>
		))}
	</>)
}
export default ItemCategories
