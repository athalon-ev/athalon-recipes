import { Ctx } from 'blitz'
import { getItems } from 'app/recipes/recipes'
import { recipesPath, itemConfigPath, itemsPath } from 'app/paths'
import { IndexedDenizenScript, ItemConfig } from '../types'
import { readJson } from 'fs-extra'

let recipes: IndexedDenizenScript[] = []

const getItemsQuery = async (_ = null, ctx: Ctx) => {
	const itemConfig: ItemConfig = await readJson(itemConfigPath)
	recipes = !recipes.length ? await getItems(itemsPath, recipesPath) : recipes
	return recipes.map(r => ({
		...r,
		hidden: itemConfig.hiddenItems.includes(r.id)
	}))
}

export default getItemsQuery
