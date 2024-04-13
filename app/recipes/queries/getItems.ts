import { Ctx } from 'blitz'
import { getItems } from 'app/recipes/recipes'
import { IndexedDenizenScript, ItemConfig } from '../types'
import { readJson } from 'fs-extra'
import { itemConfigPath, itemsPath, recipesPath } from 'app/paths'

let recipes: IndexedDenizenScript[] = []

const getItemsQuery = async (_ = null, ctx: Ctx) => {
	const itemConfig: ItemConfig = await readJson(itemConfigPath)
	recipes = !recipes.length ? await getItems(itemsPath, recipesPath) : recipes
	return recipes
		.filter((r) => !itemConfig.hiddenItems.includes(r.id))
		.filter((r) => !r.id.includes('itemscript'))
}

export default getItemsQuery
