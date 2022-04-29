import { Image } from 'blitz'
import type { DenizenRecipe, IndexedDenizenScript } from '../types'
import ItemDisplay from './ItemDisplay'
import workbenchImg from 'public/workbench.webp'
import furnaceImg from 'public/furnace.webp'
import { Tooltip } from '@mantine/core'
import { memo } from 'react'

interface RecipeProps {
	recipe: DenizenRecipe
	items: IndexedDenizenScript[]
	item: IndexedDenizenScript
}

const Recipe = memo((props: RecipeProps) => {
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
	const type = {
		shapeless: 'Formlos',
		shaped: 'Form',
		furnace: 'Ofen',
		stonecutting: 'Steinschneider',
	}[props.recipe.type]
	return (
		<div>
			{/* <div className="text-xl">{(props.recipe.recipe_id || '').replaceAll('_', ' ')}</div> */}
			{/* <div className="text-xl">{(props.recipe.recipe_id || '')}</div> */}
			<div className="flex bg-gray-400 p-2 justify-between items-center">
				<div className="flex flex-wrap w-32">
					{RecipeTypeDisplay[props.recipe.type]}
				</div>
				<Tooltip label={`Rezeptart: ${type}`}>
					<p className="text-4xl text-gray-700 flex flex-col">
						<div>➜</div>
						{props.recipe.type == 'furnace' && <Image alt="" src={furnaceImg} height={furnaceImg.height * 0.24} width={furnaceImg.width * 0.24} />}
						{['shapeless', 'shaped'].includes(props.recipe.type) && <Image alt="" src={workbenchImg} height={workbenchImg.height * 0.12} width={workbenchImg.width * 0.12} />}

					</p>
				</Tooltip>
				<div className="p-4">
					<ItemDisplay hideName hideLore item={props.item} />
				</div>
			</div>
		</div>
	)
})
export default Recipe
