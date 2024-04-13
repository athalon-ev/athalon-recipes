import { useHash } from '@mantine/hooks'
import { getItemCategories, getItemsWithCategories } from '../items'
import { IndexedDenizenScript } from '../types'
import ItemDisplay, { renderMinecraftStringToHtml } from './ItemDisplay'

const ItemCategoriesMenu = ({ items }: { items: IndexedDenizenScript[] }) => {
	const [hash] = useHash()
	const itemsWithCategories = getItemsWithCategories(items)
	return (
		<div>
			{getItemCategories(items).map((itemCategory) => {
				return (
					<div key={itemCategory}>
						<a
							className={`
								block px-4 py-1
								hover:bg-blue-500 hover:text-white
								${hash.slice(1) == itemCategory && 'bg-blue-600 text-white'}
							`}
							href={`#${itemCategory}`}
						>
							{itemCategory}
						</a>
					</div>
				)
			})}
		</div>
	)
}
export default ItemCategoriesMenu
