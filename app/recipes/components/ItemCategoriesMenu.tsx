import { getItemCategories } from '../items'
import { IndexedDenizenScript } from '../types'

const ItemCategoriesMenu = ({ items }: { items: IndexedDenizenScript[] }) => <div className="flex m-4">
	{getItemCategories(items).map((itemCategory) => (
		<a
			className="mr-2 px-2 py-1 rounded hover:bg-blue-600"
			key={itemCategory}
			href={`#${itemCategory}`}
		>
			{itemCategory}
		</a>
	))}
</div>
export default ItemCategoriesMenu
