import { useHash } from '@mantine/hooks'
import { IndexedDenizenScript } from '../types'
import ItemDisplay from './ItemDisplay'
import Recipe from './Recipe'

interface ItemCraftingRecipeCardProps {
	items: IndexedDenizenScript[]
	item: IndexedDenizenScript
}

const ItemCraftingRecipeCard = ({ item, items }: ItemCraftingRecipeCardProps) => {
	const [hash] = useHash()
	return (
		<div className="p-4 w-1/4" id={item.id}>
			{item.id}
			<div
				className={`${
					hash.replace('#', '') == item.id ? 'bg-blue-400' : 'bg-gray-300'
				} p-4 rounded`}
			>
				<ItemDisplay item={item} />
				{item.recipes.map((recipe, id) => (
					<div key={id}>
						Rezept {id + 1}:{recipe.type}
						<Recipe items={items} recipe={recipe} />
					</div>
				))}
			</div>
		</div>
	)
}
export default ItemCraftingRecipeCard
