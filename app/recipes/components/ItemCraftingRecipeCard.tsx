import { useHash } from '@mantine/hooks'
import { IndexedDenizenScript } from '../types'
import ItemDisplay from './ItemDisplay'
import Recipe from './Recipe'
import { useClipboard } from '@mantine/hooks'
import { Tooltip } from '@mantine/core'
import { memo } from 'react'
export interface ItemCraftingRecipeCardProps extends React.ComponentPropsWithoutRef<'div'> {
	items: IndexedDenizenScript[]
	item: IndexedDenizenScript & { hidden?: boolean }
	children?: JSX.Element
}

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

const ItemCraftingRecipeCard = memo(
	({ item, items, children, ...props }: ItemCraftingRecipeCardProps) => {
		const [hash] = useHash()
		const clipboard = useClipboard()
		return (
			<div
				className={`relative p-4 w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 ${props.className || ''}`}
			>
				<a className="inline-block relative -top-32 invisible" id={item.id} />
				<div className="flex justify-between">
					<span>
						{item.id
							.replaceAll('_', ' ')
							.split(' ')
							.slice(1)
							.join(' ')
							.split(/(?=[A-Z])/)
							.map(capitalize)
							.join(' ')}
					</span>
					<Tooltip
						label={
							clipboard.copied ? (
								'😃 Befehl kopiert!'
							) : (
								<code>{`/ex give ${item.id}`}</code>
							)
						}
						withArrow
					>
						<div
							className="p-2 cursor-pointer"
							onClick={() => clipboard.copy(`/ex give ${item.id}`)}
						>
							📋
						</div>
					</Tooltip>
				</div>
				<div
					className={`${hash.replace('#', '') == item.id ? 'bg-blue-400' : 'bg-gray-300'} p-4 rounded`}
					onClick={props.onClick}
				>
					<ItemDisplay item={item} />
					{item.recipes.map((recipe, id) => (
						<div key={id}>
							Rezept {id + 1} ({recipe.type})
							<Recipe items={items} recipe={recipe} item={item} />
						</div>
					))}
					{children}
				</div>
			</div>
		)
	}
)
export default ItemCraftingRecipeCard
