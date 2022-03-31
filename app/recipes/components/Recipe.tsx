import type { DenizenRecipe, IndexedDenizenScript } from '../types'
import ItemDisplay from './ItemDisplay'

interface RecipeProps {
	recipe: DenizenRecipe
	items: IndexedDenizenScript[]
}

const Recipe = (props: RecipeProps) => {
	const inputs = Array.isArray(props.recipe.input) ? props.recipe.input : [props.recipe.input]
	const findItem = (itemId: string) => props.items.find((item) => item.id === itemId)
	return (
		<div>
			{/* <div className="text-xl">{(props.recipe.recipe_id || '').replaceAll('_', ' ')}</div> */}
			{/* <div className="text-xl">{(props.recipe.recipe_id || '')}</div> */}
			<div className="flex bg-gray-400 justify-start">
				<div className="flex flex-wrap">
					{inputs.map((input, id) => (
						<a href={`#${findItem(input)?.id}`} className="w-1/3 p-2" key={id}>
							{findItem(input) && <ItemDisplay hideText item={findItem(input)} />}
						</a>
					))}
				</div>
			</div>
		</div>
	)
}
export default Recipe
