import { MutableRefObject, useEffect, useRef } from 'react'
import { capitalize, getItemCategories, getItemsWithCategories } from '../items'
import { IndexedDenizenScript } from '../types'
import { ItemCraftingRecipeCardProps } from './ItemCraftingRecipeCard'
import { useHash, useIntersection } from '@mantine/hooks'

interface ItemCategoriesProps {
	items: IndexedDenizenScript[]
	itemCard: (
		props: ItemCraftingRecipeCardProps
	) => React.ReactElement<ItemCraftingRecipeCardProps>
}

type ItemCategoryProps = {
	items: IndexedDenizenScript[]
	itemCard: (
		props: ItemCraftingRecipeCardProps
	) => React.ReactElement<ItemCraftingRecipeCardProps>
	itemsWithCategories: ReturnType<typeof getItemsWithCategories>
	itemCategory: string
}

const ItemCategory = ({
	items,
	itemCard,
	itemCategory,
	itemsWithCategories,
}: ItemCategoryProps) => {
	return (
		<div id={itemCategory}>
			<h2 className="text-xl sticky p-4 shadow z-10 bg-white top-16">
				{capitalize(itemCategory)} -{' '}
				{itemsWithCategories.filter((item) => item.category == itemCategory).length} Rezepte
			</h2>
			<div className="flex flex-wrap">
				{itemsWithCategories
					.filter((item) => item.category == itemCategory)
					.sort((a, b) => a.id.localeCompare(b.id))
					.map((item) => itemCard({ item, items }))}
			</div>
		</div>
	)
}

const ItemCategories = ({ items, itemCard }: ItemCategoriesProps) => {
	const itemsWithCategories = getItemsWithCategories(items)
	const itemCategories = getItemCategories(items)

	return (
		<div className="relative">
			{itemCategories.map((itemCategory) => (
				<ItemCategory
					{...{ itemCard, itemCategory, items, itemsWithCategories }}
					key={itemCategory}
				/>
			))}
		</div>
	)
}
export default ItemCategories
