import { Tooltip } from '@mantine/core'
import { IndexedDenizenScript } from '../types'
import PotionItem from './PotionItem'

const colorCodeMap = new Map([
	['0', '#000000'],
	['1', '#0000AA'],
	['2', '#00AA00'],
	['3', '#00AAAA'],
	['4', '#AA0000'],
	['5', '#AA00AA'],
	['6', '#FFAA00'],
	['7', '#AAAAAA'],
	['8', '#555555'],
	['9', '#5555FF'],
	['a', '#55FF55'],
	['b', '#55FFFF'],
	['c', '#FF5555'],
	['d', '#FF55FF'],
	['e', '#FFFF55'],
	['f', '#FFFFFF'],
])

export const renderMinecraftStringToHtml = (name: string) =>
	name
		.replaceAll('<yellow>', '<&e>')
		.replaceAll('<dark_gray>', '<&8>')
		.replaceAll('<dark_red>', '<&4>')
		.replaceAll('<red>', '<&c>')
		.replaceAll('<gold>', '<&6>')
		.replaceAll('<gray>', '<&7>')
		.replaceAll('&lb', '[')
		.replaceAll('&rb', ']')
		.replaceAll(/\n/g, '<br />')
		.split(/<&/)
		.map((element) => translateColor(element.substring(0, 1), element.slice(2)))
		.join('')

const translateColor = (colorCode, string) => `
    <span style="color:${translateColorCode(colorCode)}">
            ${string.replace(/ /g, '&nbsp;')}
    </span>
`
const translateColorCode = (colorCode) => colorCodeMap.get(colorCode) || 'White'

interface ItemDisplayProps {
	item: IndexedDenizenScript
	hideName?: boolean
	hideLore?: boolean
	children?: React.ReactNode
	tooltipChildren?: React.ReactNode
	className?: string
}

const ItemDisplay = ({ item, hideName, hideLore, children, className, tooltipChildren }: ItemDisplayProps) => {
	const plainColor = item.color?.replace('co@', '')
	const color = plainColor?.match(/\d/) ? `rgb(${plainColor})` : plainColor
	if (!item) return <>%</>
	const name = renderMinecraftStringToHtml(
		typeof item['display name'] == 'string' ? item['display name'] : ''
	)
	const lore = (typeof item.lore == 'string' ? item.lore.split('\n') : item.lore || [])
		.map((line) =>
			typeof line == 'string'
				? renderMinecraftStringToHtml(line)
				: renderMinecraftStringToHtml(
					Object.entries(line)
						.map((l) => l.join(': '))
						.join('')
				)
		)
		.join('<br />')
	return (
		<Tooltip
			withArrow
			allowPointerEvents
			arrowSize={3}
			position="bottom"
			placement="start"
			label={
				<>
					{hideName && <span dangerouslySetInnerHTML={{ __html: name }} />}
					{lore && <div dangerouslySetInnerHTML={{ __html: lore }} />}
					{tooltipChildren}
				</>
			}
		>
			<div className={`rounded-md border-2 border-purple-800 bg-gray-900 p-2 text-white ${className}`}>
				<div className="flex items-center">
					{item.material != 'potion' ? (
						<img
							src={item.filepath}
							alt={item['display name']}
							width={16}
							height={16}
						/>
					) : (
						<PotionItem color={color} />
					)}
					{hideName || <span className="ml-2" dangerouslySetInnerHTML={{ __html: name }} />}
				</div>
				{hideLore || <div dangerouslySetInnerHTML={{ __html: lore }} />}
				{children}
			</div>
		</Tooltip>
	)
}
export default ItemDisplay
