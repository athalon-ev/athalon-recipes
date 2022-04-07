import type { DenizenRecipe, IndexedDenizenScript } from '../types'
import ItemDisplay from './ItemDisplay'

interface RecipeProps {
	recipe: DenizenRecipe
	items: IndexedDenizenScript[]
}

const Recipe = (props: RecipeProps) => {
	const inputs = Array.isArray(props.recipe.input) ? props.recipe.input : [props.recipe.input]
	const findItem = (itemId: string) => props.items.find((item) => item.id === itemId)
	// "shapeless" | "shaped" | "furnace" | "stonecutting
	const RecipeTypeDisplay = {
		shapeless: (<>
			{inputs.map((input, id) => (
				<a href={`#${findItem(input)?.id}`} className="w-1/3 p-2" key={id}>
					{findItem(input) && <ItemDisplay hideName hideLore item={findItem(input)} />}
				</a>
			))}
		</>),
		shaped: (<>
			{inputs.map((input, id) => (
				<div className="flex flex-wrap" key={id}>
					{Array.isArray(input) && input.map((i, id) => (
						<a href={`#${findItem(i)?.id}`} className="w-1/3 p-2" key={id}>
							{findItem(i) && <ItemDisplay hideName hideLore item={findItem(i)} />}
						</a>
					))}
				</div>
			))}
		</>),
		furnace: (<div>
			{inputs.map((input, id) => (
				<a href={`#${findItem(input)?.id}`} className="w-1/3 p-2" key={id}>
					{findItem(input) && <ItemDisplay hideName hideLore item={findItem(input)} />}
				</a>
			))}
		</div>),
		stonecutting: (<div>
			{inputs.map((input, id) => (
				<a href={`#${findItem(input)?.id}`} className="w-1/3 p-2" key={id}>
					{findItem(input) && <ItemDisplay hideName hideLore item={findItem(input)} />}
				</a>
			))}
		</div>),
	}
	return (
		<div>
			{/* <div className="text-xl">{(props.recipe.recipe_id || '').replaceAll('_', ' ')}</div> */}
			{/* <div className="text-xl">{(props.recipe.recipe_id || '')}</div> */}
			<div className="flex bg-gray-400 p-2 justify-start">
				<div className="flex flex-wrap">
					{RecipeTypeDisplay[props.recipe.type]}
				</div>
			</div>
		</div>
	)
}
export default Recipe
