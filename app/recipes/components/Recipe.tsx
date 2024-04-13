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

interface RecipeItemDisplayProps {
	input: string
	items: IndexedDenizenScript[]
}

const RecipeItemDisplay = (props: RecipeItemDisplayProps) => {
	const findItem = (itemId: string) => props.items.find((item) => item.id === itemId)
	const item = findItem(props.input)
	if (!item) {
		const search = new RegExp(props.input.replaceAll('*', '.*?'))
		const altItems = props.items.filter(item => item.id.match(search))
		if (!altItems.length) return <div className="w-1/3 rounded-md border-2 border-purple-800 bg-gray-900 w-9 h-9">
		</div>
		return <div className="w-1/3">
			<ItemDisplay hideName hideLore item={altItems[0]!} tooltipChildren={<>
				<hr />
				<div>Alternativen</div>
				<div className="flex flex-wrap gap-4">
					{altItems.slice(1).map(item => <ItemDisplay key={item.id} hideName hideLore item={item} />)}
				</div>
			</>} />
		</div>
		// return <a href={`#${findItem(props.input)?.id}`} className="w-1/3">
		// 	<ItemDisplay hideName hideLore item={item} />
		// </a>
	}
	return (
		<a href={`#${findItem(props.input)?.id}`} className="w-1/3">
			<ItemDisplay hideName hideLore item={item} />
		</a>
	)
}

export const getType = (type: string) =>
({
	shapeless: 'Formlos',
	shaped: 'Form',
	furnace: 'Ofen',
	blast: 'Blast Ofen',
	stonecutting: 'Steinschneider',
}[type])

const Recipe = memo((props: RecipeProps) => {
	const inputs = Array.isArray(props.recipe.input) ? props.recipe.input : [props.recipe.input]
	// "shapeless" | "shaped" | "furnace" | "stonecutting | "blast"
	const RecipeTypeDisplay = {
		shapeless: (
			<>
				{inputs.map((input, id) => (
					<RecipeItemDisplay key={id} input={input} items={props.items} />
				))}
			</>
		),
		shaped: (
			<>
				{inputs.map((input, id) => (
					Array.isArray(input) &&
					input.map((i, id) => (
						<RecipeItemDisplay key={id} input={i} items={props.items} />
					))
				))}
			</>
		),
		furnace: (
			<div>
				{inputs.map((input, id) => (
					<RecipeItemDisplay key={id} input={input} items={props.items} />
				))}
			</div>
		),
		blast: (
			<div>
				{inputs.map((input, id) => (
					<RecipeItemDisplay key={id} input={input} items={props.items} />
				))}
			</div>
		),
		stonecutting: (
			<div>
				{inputs.map((input, id) => (
					<RecipeItemDisplay key={id} input={input} items={props.items} />
				))}
			</div>
		),
	}
	const type = getType(props.recipe.type)
	return (
		<div>
			{/* <div className="text-xl">{(props.recipe.recipe_id || '').replaceAll('_', ' ')}</div> */}
			{/* <div className="text-xl">{(props.recipe.recipe_id || '')}</div> */}
			<div className="flex bg-gray-400 p-2 justify-between items-center">
				<div className="grid grid-cols-3 gap-2 w-32">
					{RecipeTypeDisplay[props.recipe.type]}
				</div>
				<Tooltip label={`Rezeptart: ${type}`}>
					<div className="text-4xl text-gray-700 flex flex-col">
						<div>➜</div>
						{['furnace', 'blast'].includes(props.recipe.type) && (
							<Image
								alt=""
								src={furnaceImg}
								height={furnaceImg.height * 0.24}
								width={furnaceImg.width * 0.24}
							/>
						)}
						{['shapeless', 'shaped'].includes(props.recipe.type) && (
							<Image
								alt=""
								src={workbenchImg}
								height={workbenchImg.height * 0.12}
								width={workbenchImg.width * 0.12}
							/>
						)}
					</div>
				</Tooltip>
				<div className="p-4">
					<ItemDisplay hideName hideLore item={props.item}>
						{props.recipe.output_quantity > 1 && (
							<>&times;{props.recipe.output_quantity}</>
						)}
					</ItemDisplay>
				</div>
			</div>
		</div>
	)
})
export default Recipe
