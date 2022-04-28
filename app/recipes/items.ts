import { IndexedDenizenScript } from './types'

export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

export const getItemCategories = (items: IndexedDenizenScript[]) => [
	...new Set(items.map((item) => item.id.split('_')[0] || 'uncategorized')),
].map(capitalize)

export const getItemsWithCategories = (items: IndexedDenizenScript[]) => items.map((item) => ({
	...item,
	category: capitalize(item.id.split('_')[0] || 'uncategorized'),
}))
